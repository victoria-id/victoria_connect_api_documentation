export default
 {
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  name: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },

  address:
   {
    mail:
     [
       {
        name: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },
        uri: { $type: String, trim: true, maxlength: 100, lowercase: true, required: true, validate: core.mongodb.validation.rule.address.net.mail.relaxed },
        use:
         [
           { $type: String, enum: ['alert'] },
         ],
        locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, default: 'en_us', validate: core.mongodb.validation.rule.locale },
       },
     ],
   },


  access:
   [
     {
      _id: false,

      user:
       {
        id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'user' },
       },

      role:
       [
         { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'role' },
       ],
     },
   ],

 };
