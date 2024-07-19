{

 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, ref: 'portal' },
  },

 user:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, ref: 'user' },
  },

 description: { $type: String },

 authorization:
  {
   code: { $type: String },
  },

 token:
  [
    {
     _id: false,

     type: { $type: String, enum: ['access', 'refresh'], required: true },

     value: { $type: String, required: true, index: true },

     time:
      {
       expire: { $type: Date, required: true, index: true },
      },
    },
  ],

 time:
  {
   expire: { $type: Date, index: true, expires: 0 },
  },

}
