export default
 {
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  group:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
   },

  reminder:
   {
    id: { $type: core.mongodb.schema.type.object_id, ref: 'reminder' },
   },

  title: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },

  description: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },


  // Screenee defaults.
  screenee:
   {
    // Type of relation. Has effect on retention and other legal aspects.
    type: { $type: String, enum: ['screenee', 'employee', 'professional', 'client', 'customer', 'supplier', 'partner'], required: true, default: 'screenee' },
   },


  check:
   [
     {
      _id: false,

      code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },

      state_finish: { $type: String, enum: ['evaluation', 'success'], required: true, default: 'success' },

      configuration:
       {
        data: { $type: core.mongodb.schema.type.mixed },
       },

      time: false,
     },
   ],

 };
