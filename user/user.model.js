{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 type: { $type: String, enum: ['normal', 'federated', 'service'], required: true, default: 'normal' },

 name:
  {
   /*
    Official personal / first / given names.

    Example: James Benedict Cornelius
   */
   personal: { $type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validation.rule.name.human.full },

   /*
    Official family name / last name / surname.

    Example: Conner
   */
   family: { $type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validation.rule.name.human.full },

   /*
    Display name is used in e-mail fields (`To`, `CC`, `BCC`), user overview lists (like a company directory), etc.
    This field defaults to the first name found in `name.personal` + `name.family`.

    Example: James Conner
   */
   display: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.human.full },

   /*
    Short name can be used to address someone in conversations,
     either in an informal way like 'Jay', or more formal like 'James'.
    It could also be a nickname ('Bob') which has no relation to a person's official names.
    This field defaults to the first name found in `name.personal`.

    Example: Jay
   */
   short: { $type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validation.rule.name.human.full },
  },

 password: { $type: String, required: true },

 locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validation.rule.locale },
 gender: { $type: String, enum: ['female', 'male', 'unknown'], required: true, default: 'unknown' },

 address:
  {
   mail:
    [
     core.mongodb.schema(
      {
       _id: false,

       uri: { $type: String, trim: true, maxlength: 100, lowercase: true, required: true, validate: core.mongodb.validation.rule.address.net.mail },
       primary: { $type: Boolean, required: true, default: false },
       confirmed: { $type: Boolean, required: true, default: false },
       token: { $type: String, default: core.cryptography.code },
      }),
    ],

   net:
    [
      {
       _id: false,

       type: { $type: String, enum: ['http', 'tel'], required: true },
       uri: { $type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validation.rule.address.net.uri },
      },
    ],
  },

 reset:
  {
   token: { $type: String },

   time:
    {
     expire: { $type: Date },
    },
  },

 // Scope defines global permissions that applies only to users of `type` 'service'.
 scope:
  [
    { $type: String, enum: ['user.impersonate'] },
  ],

 time:
  {
   confirmed: { $type: Date, default: (core._.get(core, 'configuration.user.address.mail.confirmed', false) ? Date.now : null) },
  },

}
