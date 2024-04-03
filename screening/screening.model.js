{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 profile:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'profile' },
  },


 // Country applicable law.
 country: { $type: String, trim: true, maxlength: 3, upper: true, required: true, validate: core.mongodb.validation.rule.country.code },


 title: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },

 description: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.name.relaxed },

 state: { $type: String, enum: ['new', 'pending', 'open', 'closed', 'archived'], required: true, index: true, default: 'new' },


 // Screenee defaults.
 screenee:
  {
   // Type of relation. Has effect on retention and other legal aspects.
   type: { $type: String, enum: ['screenee', 'employee', 'client', 'customer', 'supplier', 'partner'], required: true, default: 'screenee' },
  },


 check:
  [
    {
     _id: false,

     code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },

     configuration:
      {
       // `data` is checked against `Check.configuration.form.element[]`.
       data: { $type: core.mongodb.schema.type.mixed },
      },
    },
  ],


 time:
  {
   from: { $type: Date, required: true, index: true, default: () => Date.now() },
   to: { $type: Date, required: true, index: true, default: () => Date.now() + (4 * 7 * 24 * 60 * 60 * 1000) },
  },

}
