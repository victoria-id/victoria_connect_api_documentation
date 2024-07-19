{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 screening:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'screening' },
  },

 user:
  {
   id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'user' },
  },


 state: { $type: String, enum: ['new', 'pending', 'declined', 'accepted'], required: true, default: 'new' },


 // Type of relation. Has effect on retention and other legal aspects.
 type: { $type: String, enum: ['screenee', 'employee', 'client', 'customer', 'supplier', 'partner'], required: true, default: 'screenee' },


 organization:
  {
   name: { $type: String, trim: true, maxlength: 256, default: '', validate: core.mongodb.validation.rule.name.relaxed },
  },


 name:
  {
   /*
    Official personal / first / given names.

    Example: James Benedict Cornelius
   */
   personal: { $type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validation.rule.name.human.full },

   /*
    Official family name / last name / surname:

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

 description: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.name.relaxed },

 locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validation.rule.locale },

 gender: { $type: String, enum: ['female', 'male', 'unknown'], required: true, default: 'unknown' },

 address:
  {
   mail: { $type: String, trim: true, maxlength: 100, lowercase: true, required: true, index: true, validate: core.mongodb.validation.rule.address.net.mail },

   tele:
    {
     phone: { $type: String, trim: true, maxlength: 50, validate: core.mongodb.validation.rule.address.net.tele },
    },
  },

 do_not_contact: { $type: Boolean, required: true, default: false },

 invite:
  {
   token: { $type: String, validate: core.mongodb.validation.rule.alphanumeric.lowercase },
  },


 check:
  [
    {
     code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },

     state: { $type: String, enum: ['new', 'seen', 'progress', 'requested', 'paid', 'added', 'removed', 'evaluation', 'fail', 'success'], required: true, index: true, default: 'new' },
     progress: { $type: Number, min: 0, max: 100, required: true, default: 0 },

     time:
      {
       start: { $type: Date, default: null },
       end: { $type: Date, default: null },
      },

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
   invite: { $type: Date },
   accept: { $type: Date },
  },

}
