export default
 {
  _id: false,

  // When set to `true`, will treat the result inverted like a `!()` or  `not ()`.
  inverse: { $type: Boolean, required: true, default: false },

  type: { $type: String, enum: ['group', 'comparison'], required: true, default: 'comparison' },
  operator: { $type: String, enum: [...core.condition.operator.group, ...core.condition.operator.comparison], required: true, default: 'is' },

  // The name of the "variable".
  id: { $type: String, trim: true, maxlength: 6, validate: core.mongodb.validation.rule.variable.name },

  // The value to compare against.
  value: { $type: core.mongodb.schema.type.mixed, trim: true, maxlength: 1024, validate: core.mongodb.validation.rule.form.element.value },

  // group: [ recursive ],

  time: false,
 };
