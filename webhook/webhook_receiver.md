# Victoria Connect API - Webhooks - Receiver

This document describes everything you need to know about Victoria-ID's webhooks from a webhook receiver's perspective.


## Table of contents

1. [Victoria Connect API - Webhooks - Receiver](#victoria-connect-api---webhooks---receiver)
   1. [Table of contents](#table-of-contents)
   2. [Definitions](#definitions)
   3. [What a webhook is not](#what-a-webhook-is-not)
   4. [Response](#response)
   5. [Close the connection](#close-the-connection)
   6. [Health](#health)
   7. [Message queue](#message-queue)
   8. [Retention](#retention)
   9. [Immediate](#immediate)
   10. [Guaranteed](#guaranteed)
   11. [Method](#method)
   12. [URI](#uri)
   13. [Base data](#base-data)
       1. [Headers](#headers)
          1. [Authorization](#authorization)
          2. [Content-Type](#content-type)
       2. [Query and data](#query-and-data)
   14. [Order guarantee](#order-guarantee)
   15. [Set-up](#set-up)
   16. [Payload](#payload)
       1. [Query string](#query-string)
       2. [Event codes](#event-codes)
       3. [Request body](#request-body)


## Definitions

* Webhook

  A pre-configured HTTP-based callback mechanism for lightweight and event-driven communication between two APIs.

* Webhook payload (or simply 'payload')

  A data package to be delivered to the webhook receiver.

* Webhook receiver

  A publicly accessible API server (specified by webhooks URI) able to receive webhook payloads.

* Webhook sender

  The Victoria Connect API server.


## What a webhook is not

A webhook is not an message queue. It does not offer repeatability of an event (and the actions that should or should not follow). The sole purpose of a webhook is to notify. A message queue is expected to be part of the webhook receiver's infrastructure and under the control of the integrating party.


## Response

A webhook receiver is expected to always accept the payload and respond with a `HTTP 200 OK` regardless of the contents of the payload.

In case of generic problems in terms of infrastructure, the webhook receiver may return any HTTP status code in the 400 or 500 series.

Generic problems with infrastructure can include:

* Network down.
* Incorrect shared secret.
* Web server configuration errors.
* Unable to receive message due to not being able to access internal infrastructure such as a database or message queue.


## Close the connection

Close the incoming HTTP connection (with a `HTTP 200 OK`) as soon as possible. Do not keep the receiving HTTP request open any longer than needed.

As long as the webhook received keeps the HTTP connection open, the API waits on completion. This is super handy when the webhook receiver needs to update some state on their end before the API is allowed to continue.

For example, lets say the API completed some action and is about to redirect a user back to the web application of the webhook receiver. When the API sends a webhook event, the webhook receiver can fetch and update the information it needs to display to the user after being redirected.

This does place the burden on the webhook receiver to close the connection as soon as possible when there is no need to wait.

Failure to close the connection can result in situations where:

* the webhook receiver receives an initial webhook event, but keeps the connection open while..
* the webhook receiver requests some information from the API,
* the API responds with another webhook event,
* the webhook receiver also keeps that connection open,
* the webhook receiver requests some other information from the API,
* the connection of the initial webhook event times out (`HTTP 504 Gateway timeout` or `HTTP 499`).
* the webhook receiver finishes processing the initial webhook event, finally attempting to close the connection, which just timed out.

Of course the problem with the flow as described above is that the webhook receiver did not implement and does not operate from an event queue. See [What a webhook is not](#what-a-webhook-is-not) and [Message queue](#message-queue).


## Health

Webhooks have a health status. While a webhook is marked unhealthy, all payloads are queued for delivery at a later time (even if the webhook is configured for immediate delivery).

A webhook is considered unhealthy after X consecutive failures, and fully healthy after a single success. In other words, a single successfully delivered payload resets the failure counter.

An unhealthy webhook is checked after 1 minute. If it is not yet healthy, it will automatically check with a progressive delay of 5 minutes, 10 minutes, 15 minutes, 30 minutes, 1 hour (3 times), 4 hours (3 times), 12 hours, 1 day (3 times), 7 days (3 times), 14 days.


## Message queue

Anything can go wrong. A webhook receiver is expected to save webhook events into a message queue. From there, the API integration of the webhook receiver can take action.

If the action succeeds, the event can be removed from the message queue. If the action fails, the action should be retried after a short amount of time.

This allows the API integration to automatically recover when something goes wrong between the API integration and our API.

An alternative —though very hands-on— way of recovery is to add a `[ Synchronize ]` button in the user interface of your own back-office application, which users can click to initiate synchronization by the API integration.

Failure to implement a message queue, or any other method of recovery, can result in a highly undesirable outcome in production.

We queue our webhook events in case of a failure to deliver. Queue successfully received webhook events in case of failure to execute an action.


## Retention

Webhook payloads are kept in a live database for 31 days for delayed delivery and analysis. If a payload fails to be delivered by then, the payload is discarded.

Payloads are designed to be small and not to include sensitive information.

The 31-day retention refers to the live database only. This does not exclude payloads from our backup policy.


---


## Immediate

A webhook can be configured to be executed immediately. If a browser sends a request that triggers an immediate webhook, the webhook receiver will be notified of the event before data is sent back to the browser. This is especially useful if the webhook receiver needs to update a status before the browser is redirected to a status page showing that status.

Immediate only works when the webhook is healthy.

Immediate webhooks have property `immediate` set to `true`.


## Guaranteed

The webhook receiver might be experiencing a problem while the webhook is trying to deliver a payload. Either the webhook receiver has a problem with a specific payload, or a problem in general (like a server being down).

If a payload cannot be delivered, and the webhook is configured to be guaranteed, it will automatically try to deliver the payload at a later time.

This ensures the webhook receiver can resume processing payloads after being down. It also means that the longer a webhook receiver is down, the harder it needs to work to catch up when the server is back up.

Guaranteed webhooks have property `guaranteed` set to `true`.


---


## Method

The default HTTP method for sending payloads is `GET`.

Information is primarily encoded in the query string of the URI. In very few cases, a webhook payload contains additional information encoded in the request body (like the subject of an e-mail). To receive such information please read [Request body](#request-body).


## URI


The webhook receiver (server) must be publicly accessible via secure HTTP. The webhook URI must start with `https://`.


---


## Base data

A webhook can contain static base data which is automatically added to payloads before they are sent. The base data consists of:

* Headers
* Query string
* Request body

### Headers

#### Authorization

Any good webhook configuration should at least have an `Authorization` header (or something similar) containing a shared secret.

A good method of rotating shared secrets is to configure a secondary secret on the webhook receiver. When the webhook receiver is ready to accept the secondary secret, the webhook sender can seamlessly migrate to the new secret. When done, the primary secret is deleted, and the secondary secret becomes the only secret.

Because headers (and other base data) are merged just before sending a payload, changes to base data is applied almost instantly. Therefore, old secrets can be removed almost instantly.

If somehow generating a new secret overwrites the current secret, rest assured that failed payloads are automatically retried (if the webhook is configured to be [guaranteed](#guaranteed)) after updating the shared secret on the webhook (sender).

#### Content-Type

Very few webhook payloads contain extra information encoded in the request body (like the subject of an e-mail).

A request body requires a non-`GET` method (like `PUT`), and a valid `Content-Type` header.

Currently supported values for `Content-Type` are `application/json` and `x-www-form-urlencoded`.

For more information, see [Request body](#request-body)

### Query and data

You can configure the webhook to automatically add static information to the query string and request body (data) of payloads. It works almost identical to [headers](#headers).

Static request body data requires a non-`GET` method (like `PUT`), and a valid [`Content-Type`](#content-type) header.


---


## Order guarantee

Although the delivery algorithm makes a best effort to deliver payloads in order, the order is not guaranteed, simply because network and server conditions may vary. For example, a webhook receiver might fail to accept a payload because of a temporary network / server outage, while subsequent payloads are delivered just fine.


---


## Set-up

Webhooks need to be configured per portal and (currently) can only be set up by Victoria-ID. Please let us know where you'd like us to send the callbacks.

If the webhook defaults are suitable for your webhook receiver, then all you have to specify is the `uri` of the webserver to which to send the payloads to. However, it is strongly recommended to also specify an `Authorization` [header](#headers) (or something similar).

Please copy, alter, and send the definition below if you require a more specific setup:

```javascript
const objWebhook =
 {

  // immediate: true,   // default: true
  // guaranteed: true,  // default: true

  // method: 'get',     // default: 'get'
  uri: 'https://domain.tld/path/',

  header:
   [
     { name: 'Authorization', value: 'Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
     // { name: '', value: '' },
   ],

  query:
   {
    // variable: 'value',
   },

  data:
   {
    // variable: 'value',
   },

 };
```


## Payload

The webhook payload contains just enough information for the webhook receiver to know something changed and that it should contact the webhook sender's API for details.

As a matter of good practice, the webhook payload data should always be regarded with some distrust. Always fetch the actual status and sensitive information from the webhook sender's API.

### Query string

The payload data is primarily encoded in the URI's query string. This query string will look similar to the one below:

```sh
#https://example.com/path/?
request_user_id=644b8cb9000af3c567089560&portal_id=644b8cb9000af3c56708955f&group_id=644b8cb9000af3c567089562&screening_id=644b8cb9000af3c567089617&screenee_id=644b8cb9000af3c567089632&code=check/identity.travel_document.text_chip_certificate/release
```

Here is the same information as shown above but organized to be more readable:

```sh
request_user_id  = 644b8cb9000af3c567089560
portal_id        = 644b8cb9000af3c56708955f
group_id         = 644b8cb9000af3c567089562
screening_id     = 644b8cb9000af3c567089617
screenee_id      = 644b8cb9000af3c567089632
code             = check/identity.travel_document.text_chip_certificate/release
```

Most parameters are just references to a user, portal, group, screening, or screenee. The `code` parameter refers to the event or action that was taken.

Some webhook events mention **2 users**: The user being created / modified / deleted is references using `user_id`, and the requesting user —which does the request— is always referred to as `request_user_id`.

### Event codes

Event codes related to checks commonly have the following format: `check/<check_code>/<event_sub_code>`. For example, `check/finance.bank_account.iban/release` where the middle part, `finance.bank_account.iban`, is the check code.

Not all checks trigger the same amount or type of codes as checks often differ in the amount and the type of steps required.
However, all checks trigger events with sub-code `release` and `delete`, which are typically the events a webhook receiver wants to act upon.

* `release` happens when the screenee (candidate) releases the information gathered to the screener (typically a HR role).

* `delete` happens when check information is deleted.


Here is a non-exhaustive list of event codes relating to checks:

| Event code                                                      | Description
|-----------------------------------------------------------------|-------------------------------------------------------
| `check/business.chamber_of_commerce.kvk_nl/update`              | Screenee updated their KvK details.
| `check/business.chamber_of_commerce.kvk_nl/release`             | Screenee released KvK details to the screener.
| `check/business.chamber_of_commerce.kvk_nl/delete`              | KvK details were deleted.
|                                                                 |
| `check/declaration.employment_history.uwv_nl/update`            | Screenee updated their UWV details.
| `check/declaration.employment_history.uwv_nl/release`           | Screenee released UWV details to the screener.
| `check/declaration.employment_history.uwv_nl/delete`            | UWV details were deleted.
|                                                                 |
| `check/declaration.right_to_work/update`                        | Screenee updated their RTW details.
| `check/declaration.right_to_work/release`                       | Screenee released RTW details to the screener.
| `check/declaration.right_to_work/delete`                        | RTW details were deleted.
|                                                                 |
| `check/finance.bank_account.iban/update.image`                  | Screenee uploaded images of their debit card.
| `check/finance.bank_account.iban/update.information`            | Screenee updated debit card information.
| `check/finance.bank_account.iban/release`                       | Screenee released debit card information to the screener.
| `check/finance.bank_account.iban/delete`                        | Debit card information was deleted.
|                                                                 |
| `check/finance.insolvency.cir_nl/update`                        | Screenee updated information from the Insolvency Registry.
| `check/finance.insolvency.cir_nl/release`                       | Screenee released information to the screener.
| `check/finance.insolvency.cir_nl/delete`                        | Information was deleted.
|                                                                 |
| `check/health.practitioner.big_nl/update`                       | Screenee updated information from the BIG Registry.
| `check/health.practitioner.big_nl/release`                      | Screenee released information to the screener.
| `check/health.practitioner.big_nl/delete`                       | Information was deleted.
|                                                                 |
| `check/identity.travel_document.quick/create`                   | Screenee uploaded images of their ID.
| `check/identity.travel_document.quick/release`                  | Screenee released information to the screener.
| `check/identity.travel_document.quick/delete`                   | Information was deleted.
|                                                                 |
| `check/identity.travel_document.text_chip_certificate/start`    | Screenee started the ID check on their mobile device.
| `check/identity.travel_document.text_chip_certificate/create`   | Screenee finished the ID check on their mobile device.
| `check/identity.travel_document.text_chip_certificate/release`  | Screenee released ID information to the screener.
| `check/identity.travel_document.text_chip_certificate/delete`   | ID information was deleted.


A non-exhaustive list of events not related to checks:

| Event code                                                      | Description
|-----------------------------------------------------------------|-------------------------------------------------------
| `user.mail`                                                     | An e-mail was sent to a user.
|                                                                 |
| `screenee.create`                                               | A screenee was added to a screening.
| `screenee.mail`                                                 | An e-mail was sent to a screenee.
| `screenee.invite.sent`                                          | An invitation e-mail was sent to a screenee.
| `screenee.invite.accept`                                        | Invitation was accepted.
| `screenee.update`                                               | A screenee's details got updated.
| `screenee.delete`                                               | A screenee was deleted.


### Request body

The difference between information encoded in the query string and the request body, is that the information in the query string is considered safe to log (in HTTP access logs), whereas the request body is better suited for semi-sensitive information like an e-mail subject.

Very few webhook payloads contain extra information encoded in the request body (like the subject of an e-mail).

A request body requires a non-`GET` method (like `PUT`), and a valid [`Content-Type`](#content-type) header.
