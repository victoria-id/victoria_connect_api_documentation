{
 code: { $type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validation.rule.resource.identifier },

 path: { $type: String, trim: true, maxlength: 255, required: true, unique: true, validate: core.mongodb.validation.rule.address.http.path.strict },

 order: { $type: Number, required: true, index: true, default: 1000 },


 name: { $type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validation.rule.name.relaxed },

 description: { $type: String, trim: true, maxlength: 1024, required: true, default: '', validate: core.mongodb.validation.rule.description },


 // Restricts check use based on `Screening.country`. If `Check.country[]` is empty, no restriction is set.
 country:
  [
    { $type: String, trim: true, minlength: 3, maxlength: 3, validate: core.mongodb.validation.rule.country.code },
  ],


 // This check is dependent on the following checks.
 dependency:
  [
    {
     _id: false,

     /**

      'required' means:

       When this check is enabled in the screening profile, any checks it depends on will also be automatically enabled.
       Conversely, if a dependent check is disabled, this check will automatically be disabled as well.

       The check that is listed as a dependency must be completed before being allowed to complete this check.


       'optional' means:

       If the dependent check is included in the screening profile, it must be completed before this check can be completed.
       However, if the dependent check is not included in the screening profile, this check may operate independently.

     */
     type: { $type: String, enum: ['optional', 'required'], required: true, default: 'required' },

     // `check.code` (matching strategy: 'starts with') of the check this check depends on.
     code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },
    },
  ],


 state: { $type: String, enum: ['unknown', 'fail', 'ready'], required: true, default: 'unknown' },
 message: { $type: String, trim: true, maxlength: 1024, default: 'Service temporarily unavailable.', validate: core.mongodb.validation.rule.description },

 maintenance:
  {
   start: { $type: Date },
   end: { $type: Date },
   description: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },
  },

 configuration:
  {
   form:
    {
     present: { $type: String, enum: ['normal', 'expand', 'dialog'], default: 'normal' },

     element:
      [
       core.form.element.schema,
      ],
    },
  },
}
