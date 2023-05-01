# Victoria Connect API - Webhooks - Receiver

This document describes everything you need to know about Victoria ID's webhooks from a webhook receiver's perspective.


## Table of contents

1. [Victoria Connect API - Webhooks - Receiver](#victoria-connect-api---webhooks---receiver)
   1. [Table of contents](#table-of-contents)
   2. [Definitions](#definitions)
   3. [Health](#health)
   4. [Retention](#retention)
   5. [Immediate](#immediate)
   6. [Guaranteed](#guaranteed)
   7. [Method](#method)
   8. [URI](#uri)
   9. [Base data](#base-data)
      1. [Headers](#headers)
         1. [Authorization](#authorization)
         2. [Content-Type](#content-type)
      2. [Query and data](#query-and-data)
   10. [Order guarantee](#order-guarantee)
   11. [Set-up](#set-up)


## Definitions

* Webhook

  A preconfigured HTTP-based callback mechanism for lightweight and event-driven communication between two APIs.

* Webhook payload (or simply 'payload')

  A data (package) to be delivered to the webhook receiver.

* Webhook receiver

  The receiving API server accessible as configured the webhooks URI.

* Webhook sender

  The Victoria Connect API server.


## Health

Webhooks have a health status. While a webhook is marked unhealthy, all payloads are queued for delivery at a later time (even if the webhook is configured for immediate delivery).

A webhook is considered unhealthy after X consecutive failures, and fully healthy after a single success. In other words, a single successfully delivered payload resets the failure counter.

An unhealthy webhook is checked after 1 minute. If it is not yet healthy, it will automatically check with a progressive delay of 5 minutes, 10 minutes, 15 minutes, 30 minutes, 1 hour (3 times), 4 hours (3 times), 12 hours, 1 day (3 times), 7 days (3 times), 14 days.


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

The default HTTP method for sending payloads is `GET`. The payload data is encoded in the URI's query string.

By default, the webhook payload contains only enough information for the webhook receiver to know that something changed and that it should contact the webhook sender for details.

As a matter of good practice, the webhook payload data should always be regarded with some distrust. Always fetch the actual status and sensitive information from the webhook sender's API.

Only few webhook payloads contain extra information encoded in the request body (like the subject of an e-mail). This information is only sent when the webhook is configured to use a non-`GET` request like `PUT`.


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

Any good webhook configuration should at least have an `Authorization` header containing a shared secret.

A good method of rotating shared secrets is to configure a secondary secret on the webhook receiver. When the webhook receiver is ready to accept the secondary secret, the webhook sender can seamlessly migrate to the new secret. When done, the primary secret is deleted, and the secondary secret becomes the only secret.

Because headers (and other base data) are merged just before sending a payload, changes to base data is applied almost instantly. Therefore, old secrets can be removed almost instantly.

If somehow generating a new secret overrides the current secret, rest assured that failed payloads are automatically retried (if the webhook is configured to be [guaranteed](#guaranteed)) after updating the shared secret on the webhook (sender).

#### Content-Type

Some payloads contain a request body, but only if a webhook is configured to use a non-`GET` [method](#method) like `PUT`. You can use a `Content-Type` header to specify the desired format of the request body. Currently supported `Content-Type` values are `application/json` and `x-www-form-urlencoded`.

### Query and data

You can configure the webhook to automatically add static information to the query string and request body (data) of payloads. It works almost identical to [headers](#headers).

To support sending data, please specify a [`Content-Type`](#content-type) header, and make sure the webhook is configured to use the `PUT` [method](#method).


---


## Order guarantee

Although the delivery algorithm makes a best effort to deliver payloads in order, the order is not guaranteed, simply because network and server conditions may vary. For example, a webhook receiver might fail to accept a payload because of a temporary network / server outage, while subsequent payloads are delivered just fine.


---


## Set-up

If the webhook defaults are suitable for your webhook receiver, then all you have to specify is the `uri` of the webserver to which to send the payloads to.

However, it is strongly recommended to specify an `Authorization` [header](#headers) as well.

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
