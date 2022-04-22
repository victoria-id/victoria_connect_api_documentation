{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 uri: { type: String, get()
  {
   return 'user/' + this.id + '/';
  } },

 name:
  {
   personal: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },
   family: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },
   display: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.human },
  },

 password: { type: String, required: true },

 locale: { type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validate.locale },
 gender: { type: String, trim: true, lowercase: true, enum: ['female', 'male', 'unknown'], required: true, default: 'unknown' },

 address:
  {
   mail:
    [
     core.mongodb.schema(
      {
       _id: false,

       uri: { type: String, trim: true, maxlength: 100, lowercase: true, required: true, validate: core.mongodb.validate.address.mail },
       primary: { type: Boolean, required: true, default: false },
       confirmed: { type: Boolean, required: true, default: false },
       token: { type: String, default: core.cryptography.code },
      }),
    ],

   net:
    [
      {
       _id: false,

       type: { type: String, enum: ['http', 'tel'], required: true },
       uri: { type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validate.address.uri },
      },
    ],
  },

 reset:
  {
   token: { type: String },

   time:
    {
     expire: { type: Date },
    },
  },

 time:
  {
   confirmed: { type: Date, default: (core._.get(core, 'configuration.user.address.mail.confirmed', false) ? Date.now : null) },
  },

}
