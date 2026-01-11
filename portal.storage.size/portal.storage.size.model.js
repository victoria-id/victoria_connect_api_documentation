export default
 {

  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  count: { $type: Number, min: 0, required: true },

  size: { $type: Number, min: 0, required: true },

  item:
   [
     {
      code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },
      type: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },
      count: { $type: Number, min: 0, required: true },
      size: { $type: Number, min: 0, required: true },
     },
   ],

  time:
   {
    create: { $type: Date, required: true },
   },

 };
