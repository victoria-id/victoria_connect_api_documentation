export default
 {
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  title: { $type: String, required: true, trim: true, maxlength: 100 },

  check:
   [
     {
      _id: false,

      code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },

      first: { $type: Number, min: 1 },
      interval: { $type: Number, min: 1 },

      note:
       [
         {
          _id: false,

          locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validation.rule.locale },

          value: { $type: String, trim: true },
         },
       ],

     },
   ],

 };
