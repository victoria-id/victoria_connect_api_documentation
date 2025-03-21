# API request function example for API integrations

DO NOT REQUEST NEW ACCESS TOKENS FOR EACH INDIVIDUAL ACTION!! Expect sign ins to be rate limited; even for successful sign ins.

The preferred way of maintaining an access token is by using refresh tokens. You can rotate between two access tokens, using the most recent access token for API calls, while updating the oldest access token in the background, which then becomes the most recent.

The tricky thing about using refresh tokens is that it immediately invalidates the current version of the associated access token. Thereby potentially invalidating an access token some other thread is about to use.

This document shows a crude but effective example of how to at least prevent constant re-authentication for each individual action an API integration takes.


## Example

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
