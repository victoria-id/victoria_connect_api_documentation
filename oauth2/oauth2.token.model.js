{
 client:
  {
   id: { type: String, trim: true, maxlength: 24 },
  },

 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, ref: 'portal' },
  },

 user:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, ref: 'user' },
  },

 token:
  [
    {
     _id: false,

     type: { type: String, enum: ['access', 'refresh'], required: true },

     value: { type: String, required: true, index: true },

     time:
      {
       expire: { type: Date, required: true, index: true },
      },
    },
  ],

}
