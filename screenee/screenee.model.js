{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 screening:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'screening' },
  },

 user:
  {
   id: { type: core.mongodb.schema.type.object_id, index: true, ref: 'user' },
  },

 uri: { type: String, get()
  {
   return 'screenee/' + this.id + '/';
  } },

 type: { type: String, enum: ['screenee', 'candidate', 'employee', 'client', 'customer'], required: true, default: 'candidate' },

 name:
  {
   personal: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },
   family: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },
   display: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.human },
  },

 description: { type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validate.name.relaxed },

 locale: { type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validate.locale },

 gender: { type: String, enum: ['female', 'male', 'unknown'], required: true, default: 'unknown' },

 address:
  {
   mail: { type: String, trim: true, maxlength: 100, lowercase: true, required: true, index: true, validate: core.mongodb.validate.address.mail },

   tele:
    {
     phone: { type: String, trim: true, maxlength: 50, validate: core.mongodb.validate.address.tele },
    },
  },

 invite:
  {
   token: { type: String, validate: core.mongodb.validate.code.alphanumeric },
  },

 check:
  [
    {
     code: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.resource.identifier },

     state: { type: String, enum: ['new', 'seen', 'progress', 'requested', 'paid', 'added', 'removed', 'evaluation', 'fail', 'success'], required: true, index: true, default: 'new' },
     progress: { type: Number, min: 0, max: 100, required: true, default: 0 },

     data:
      {
       // Visible only to the API.
       secret: {},

       // Visible to screenee, screener, and API.
       shared: {},

       // Visible only to the screenee.
       screenee: {},

       // Visible only to the screener.
       screener: {},
      },
    },
  ],

 time:
  {
   invite: { type: Date },
   accept: { type: Date },
  },

}
