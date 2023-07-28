{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 // The webhook determines the URI, headers, default query and default data
 //  to be merged with the payload before sending the payload off to the receiving
 //  API server.
 webhook:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true },
  },

 // Group webhook payloads together using `group_key`.
 // This provides useful context when retrying webhooks.
 //
 // When retrying webhooks, we need to test using a random payload
 //  because we never know if the webhook in general is at fault,
 //  or a specific payload causes the error.
 //
 // We want to give some guarantee payloads are delivered in original order;
 //  at least in relation to the payloads within the same group.
 //
 // For example:
 //
 // You rather not deliver payload 'person.A.goodbye' before 'person.A.hello',
 //  but sending 'person.B.hello' before 'person.A.hallo' is acceptable.
 // In such a case, you would group payloads by person.
 //
 // Most commonly you would set this to `screenee.id`.
 group_key: { $type: core.mongodb.schema.type.object_id, index: true },

 // Webhook payload specific query and data.
 query: { $type: Object, default: {} },
 data: { $type: Object, default: {} },

 // State of the payload.
 done: { $type: Boolean, required: true, index: true, default: false },
 success: { $type: Boolean, required: true, index: true, default: false },

 // Success / failure log of the payload.
 log:
  [
    {
     _id: false,

     code: { $type: String, trim: true, lowercase: true, default: ''/* , validate: core.mongodb.validation.rule.required*/ },
     // Note: `required: true` does not work with empty string, therefore using `validate: required`.
     description: { $type: String, maxlength: 1024, trim: true, default: ''/* , validate: core.mongodb.validation.rule.required*/ },
     detail: { $type: String, maxlength: 1024, default: ''/* , validate: core.mongodb.validation.rule.required*/ },

     time:
      {
       create: { $type: Date, required: true, default: Date.now },
      },
    },
  ],

 time:
  {
   expire: { $type: Date, required: true, default: () => Date.now() + core.configuration.webhook.payload.expire, expires: 0, index: true },
  },
}
