{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 profile:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'profile' },
  },

 uri: { type: String, get()
  {
   return 'screening/' + this.id + '/';
  } },

 title: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.relaxed },

 description: { type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validate.name.relaxed },

 state: { type: String, enum: ['new', 'pending', 'open', 'closed', 'archived'], required: true, index: true, default: 'new' },

 check:
  [
    {
     code: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.resource.identifier },

     configuration:
      {

      },
    },
  ],

 time:
  {
   from: { type: Date, index: true, default: () => Date.now() },
   to: { type: Date, index: true, default: () => Date.now() + (4 * 7 * 24 * 60 * 60 * 1000) },
  },

}
