export default
 {
  reference: { $type: String, trim: true, maxlength: 100, validate: core.mongodb.validation.rule.resource.identifier },

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
  type: { $type: String, enum: ['screenee', 'employee', 'professional', 'client', 'customer', 'supplier', 'partner'], required: true, default: 'screenee' },


  organization:
   {
    name: { $type: String, trim: true, maxlength: 256, index: true, default: '', validate: core.mongodb.validation.rule.name.relaxed },
   },


  name:
   {
    /*
     Official personal / first / given names.

     Example: James Benedict Cornelius
    */
    personal: { $type: String, trim: true, maxlength: 1024, required: true, index: true, validate: core.mongodb.validation.rule.name.human.full },

    /*
     Official family name / last name / surname.

     Example: Conner
    */
    family: { $type: String, trim: true, maxlength: 1024, required: true, index: true, validate: core.mongodb.validation.rule.name.human.full },

    /*
     Display name is used in e-mail fields (`To`, `CC`, `BCC`), user overview lists (like a company directory), etc.
     This field defaults to the first name found in `name.personal` + `name.family`.

     Example: James Conner
    */
    display: { $type: String, trim: true, maxlength: 100, required: true, index: true, validate: core.mongodb.validation.rule.name.human.full },

    /*
     Short name can be used to address someone in conversations,
      either in an informal way like 'Jay', or more formal like 'James'.
     It could also be a nickname ('Bob') which has no relation to a person's official names.
     This field defaults to the first name found in `name.personal`.

     Example: Jay
    */
    short: { $type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validation.rule.name.human.full },
   },

  description: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },

  locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validation.rule.locale },

  gender: { $type: String, enum: ['female', 'male', 'unknown'], required: true, default: 'unknown' },

  address:
   {
    mail: { $type: String, trim: true, maxlength: 100, lowercase: true, required: true, index: true, validate: core.mongodb.validation.rule.address.net.mail.relaxed },

    tele:
     {
      phone: { $type: String, trim: true, maxlength: 50, default: '', validate: core.mongodb.validation.rule.address.net.tele.relaxed },
     },
   },

  do_not_contact: { $type: Boolean, required: true, default: false },

  subscription:
   [
     {
      _id: false,

      category: { $type: String, trim: true, index: true, maxlength: 50, lowercase: true, required: true, validate: core.mongodb.validation.rule.resource.identifier },

      token: { $type: String, validate: core.mongodb.validation.rule.alphanumeric.lowercase, required: true },

      subscribe: { $type: Boolean, required: true },
     },
   ],

  invite:
   {
    token: { $type: String, validate: core.mongodb.validation.rule.alphanumeric.lowercase },
   },

  // The screener(s) responsible for this screenee
  screener:
   [
     {
      $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'user',
     },
   ],

  check:
   [
    // See file `screenee.check.model.js`.
    core.screenee.check.schema,
   ],


  time:
   {
    invite: { $type: Date },
    accept: { $type: Date },
    remind: { $type: Date },
    end: { $type: Date },
    deadline: { $type: Date },
   },

 };
