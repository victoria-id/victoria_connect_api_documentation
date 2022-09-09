{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 title: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.relaxed },

 description: { type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validate.name.relaxed },

 check:
  [
    {
     code: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.resource.identifier },

     configuration:
      {

      },
    },
  ],

}
