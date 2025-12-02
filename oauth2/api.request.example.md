# API request strategy example for API integrations


## Table of contents

1. [API request strategy example for API integrations](#api-request-strategy-example-for-api-integrations)
   1. [Table of contents](#table-of-contents)
   2. [Considerations](#considerations)
   3. [A simple strategy for concurrent environments](#a-simple-strategy-for-concurrent-environments)
      1. [Recommendations for improvement](#recommendations-for-improvement)
      2. [Example](#example)


## Considerations

DO NOT REQUEST NEW ACCESS TOKENS FOR EACH INDIVIDUAL ACTION!! Expect sign ins to be rate limited; even for successful sign ins.

Access tokens have a lifetime of 90 minutes (1 hour and 30 minutes) and can be renewed using a refresh token. However, using a refresh token immediately invalidates the current access token.

In environments where multiple API requests may execute concurrently (e.g., in multi-threaded or asynchronous integrations), prematurely invalidating a shared access token can disrupt in-flight requests that are still using it.


## A simple strategy for concurrent environments

To ensure reliable operation in concurrent scenarios, this is one of the strategies you can adopt for proactive token management:

1. Use a single access token across all concurrent API requests.

2. Before initiating any new API request, check the age of the current token:

   * If the token is older than 60 minutes (or does not yet exist):

     * Obtain a new access token via re-authentication (e.g., using client credentials).

     * Store the access token and issuance timestamp to be used for all subsequent requests.

   * If the token is younger than 60 minutes, continue using it.


This strategy provides the following benefits:

* In-flight requests continue uninterrupted, as the previous token remains valid for up to 30 additional minutes after the new one is issued.

* Token rotation occurs predictably and without race conditions or complex synchronization mechanisms.

Here is some [example](#example) code that follows this strategy.


### Recommendations for improvement

* Use a strategy that uses 2 sets of access + refresh tokens. One for active use, one to be renewed.

* Use the refresh token to obtain a new access token instead of sending client credentials.

* Only use client credentials when refresh token fails.

This drastically lowers the frequency at which the static client credentials communicated.


### Example

```javascript

// Imports.

// `http_request` represents the function that allows for plain HTTP requests.
/* eslint-disable-next-line func-style */
const http_request = async function http_request(objRequest) {};


// Making an API call (abstract).

// Make a high-level API request that automatically inserts an `Authorization: Bearer <access_token>` header.
// This will in turn call `http_request()`.
const objResponse = await api_request(
 {
  method: 'GET',
  uri: 'group/',
 });

console.log(objResponse.data);


// Functions (details).

/**
 `api_request()` is a wrapper function around the basic HTTP request that automatically maintains an access token,
  without re-authentication on each individual call.

 @argument {Object} objRequest -  The HTTP request intended for `http_request()`.
*/
async function api_request(objRequest)
 {

  // Fetch token.
  let objToken = await token_fetch();


  // If no token exists, or the token expired, then..
  if (!objToken || objToken.expire < Date.now())
   {
    // Fetch client ID and client secret.
    const objClient = await client_fetch();

    // Create a new token.
    objToken = await create_oauth2_token_using_client_credentials(objClient.id, objClient.secret);

    // Save token so other instances of the API integration can use it.
    await token_save(objToken);
   }


  // Execute the intended HTTP request, but with automatically inserted `Authorization: Bearer <access_token>` header.
  return http_request(
   {
    method: objRequest.method,
    uri: objRequest.uri,

    header:
     {
      Authorization: 'Bearer ' + objToken.access,
     },

    data: objRequest.data,
   });
 }


/**
 Fetch token from memory or database.

 @return {Object} - objToken.
*/
async function token_fetch()
 {
  return { access: 'access_token', expire: Date.now() + 1000, refresh: 'refresh_token' };
 }


/**
 Save token so other instances of the API integration can use it.
*/
async function token_save(objToken)
 {

 }


/**
 Fetch client ID and client secret from memory or database.

 @return {Object} - objClient.
*/
async function client_fetch()
 {
  return { id: 'client_id', secret: 'client_secret' };
 }


/**
 Create an access token

 @argument {String} strClient_ID - Client ID.
 @argument {String} strClient_Secret - Client secret.
 @return {Object} - objToken.
*/
async function create_oauth2_token_using_client_credentials(strClient_ID, strClient_Secret)
 {
  const objResponse = await http_request(
   {
    method: 'POST',
    uri: 'portal/:portal_domain/oauth2/token/',

    data:
     {
      client_id: strClient_ID,
      client_secret: strClient_Secret,
     },
   });

  const objToken = objResponse.data;

  const intExpires_In = objToken.expires_in * 1000; // seconds to milliseconds.
  const intExpires_At = Date.now() + intExpires_In;

  objToken.expire = intExpires_At;

  // return objToken;
  return {
    access: 'access_token',
    expire: intExpires_At,
    refresh: 'refresh_token',
   };
 }


/**
 The tricky thing about using refresh tokens is that it invalidates the current version of the associated access token.
 Thereby potentially invalidating an access token some other thread is about to use.
*/
// eslint-disable-next-line no-unused-vars
async function update_oauth2_token_using_refresh_token(strRefresh_Token)
 {
  return { access: 'access_token', expire: Date.now() + 1000, refresh: 'refresh_token' };
 }

```
