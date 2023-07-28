{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },


 method: { $type: String, emum: ['get', 'put'], required: true, default: 'get' },
 uri: { $type: String, trim: true, maxlength: 100, required: true, validate: validation_rule_address_http_secure },

 // Default headers to add to webhook payload.
 header:
  [
    {
     name: { $type: String },
     value: { $type: String },
    },
  ],

 // Default query and data payload.
 query: { $type: Object, default: {} },
 data: { $type: Object, default: {} },


 // Execution behavior.
 immediate: { $type: Boolean, required: true, default: true },
 guaranteed: { $type: Boolean, required: true, default: true },


 error:
  {
   // 0 = healthy.
   level: { $type: Number, min: 0, required: true, default: 0 },
   // `count` resets on every successfully delivered payload.
   count: { $type: Number, min: 0, required: true, default: 0 },
  },


 // Success count and timestamp for statistics.
 success:
  {
   count: { $type: Number, min: 0, required: true, default: 0 },
   update: { $type: Date },
  },

 // Exception count and timestamp for statistics.
 exception:
  {
   count: { $type: Number, min: 0, required: true, default: 0 },
   update: { $type: Date },
  },


 node:
  {
   id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'node' },

   handover_id: { $type: core.mongodb.schema.type.object_id, ref: 'node' },
  },


 time:
  {
   retry: { $type: Date },
  },
}
