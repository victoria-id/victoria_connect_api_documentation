export default
 {
  path: { $type: String, trim: true, maxlength: 200, required: true, validate: core.mongodb.validation.rule.resource.identifier },

  type: { $type: String, enum: ['base', 'fragment', 'content'], required: true },

  // Portal ID (`null` = default/global template).
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, ref: 'portal', index: true, default: null },
   },

  locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, default: 'en_us', validate: core.mongodb.validation.rule.locale },

  // Subject only for e-mail templates of type `content`.
  subject:
   {
    $type: String,

    required()
     {
      return this.type === 'content';
     },
   },

  // Template content.
  content: { $type: String, required: false, default: '' },

  // Template dependencies (paths). Auto-populated from template parsing.
  dependency: [{ $type: String, trim: true, maxlength: 200 }],

  // Base template reference for content templates (path).
  base: { $type: String, trim: true, maxlength: 200, default: null },

  // MJML and variable validation results.
  validation:
   {

    mjml:
     {
      valid: { $type: Boolean, default: false },

      error:
       [
         { $type: String, trim: true, maxlength: 1000 },
       ],
     },


    variable:
     {
      valid: { $type: Boolean, default: null },

      error:
       [
         { $type: String, trim: true, maxlength: 1000 },
       ],

      // Fragment-specific errors (for content/base templates that use fragments).
      fragment:
       [
        {
         _id: false,

         path: { $type: String, trim: true, maxlength: 200, required: true },

         parent: { $type: String, trim: true, maxlength: 200, default: null },

         resolved:
          {
           portal_id: { $type: core.mongodb.type.object_id },

           locale: { $type: String, trim: true, maxlength: 7, lowercase: true, required: true, default: 'en_us', validate: core.mongodb.validation.rule.locale },
          },

         error:
          [
            { $type: String, trim: true, maxlength: 1000 },
          ],
        },
       ],
     },
   },

  active: { $type: Boolean, required: true, default: true },

 };
