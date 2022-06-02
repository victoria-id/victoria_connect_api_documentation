{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { type: core.mongodb.schema.type.object_id, index: true, ref: 'group' },
   name: { type: String, trim: true, maxlength: 100 },
  },

 user:
  {
   id: { type: core.mongodb.schema.type.object_id, index: true, ref: 'user' },
   name: { type: Object },
  },

 screening:
  {
   id: { type: core.mongodb.schema.type.object_id, index: true, ref: 'screening' },
   title: { type: String, trim: true, maxlength: 100 },
  },

 screenee:
  {
   id: { type: core.mongodb.schema.type.object_id, index: true, ref: 'screenee' },
   name: { type: Object },
   address: { type: Object },
  },

 code: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.resource.identifier },

 data: { type: Object },

 time:
  {
   update: false,
  },
}
