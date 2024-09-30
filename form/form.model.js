{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 group:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
  },

 name: { $type: String, required: true, trim: true, maxlength: 256, index: true, validate: core.mongodb.validation.rule.name.relaxed },

 tag: { $type: String, trim: true, maxlength: 25, default: '', validate: core.mongodb.validation.rule.alphanumeric.snake_case.mixed_case },

 element:
  [
   core.form.element.schema,
  ],

}
