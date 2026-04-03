export default
 {
  _id: false,

  // Allows 'q1' to 'q99_99'.
  id: { $type: String, trim: true, maxlength: 6, required: true, validate: core.mongodb.validation.rule.variable.name },

  /*

   Question numbering (`q1`, `q2`, etc.) changes while adding, removing, and reordering questions. A `tag` is a persistent identifier that allows automated systems to recognize information.

   For example, when asking for a person's date of birth, you can tag the question with "date_of_birth". Automated systems are then able to interpret the given answer accordingly.

   Tags do not have to be unique, so if you want to group multiple questions (like image upload questions) using the same tag, then this is possible.

  */
  tag: { $type: String, trim: true, maxlength: 40, default: '', validate: core.mongodb.validation.rule.alphanumeric.snake_case.mixed_case },

  // A condition allows showing or hiding a form element (a.k.a. a question).
  condition: core.condition.schema,

  // The type of form element.
  type: { $type: String, enum: ['title', 'heading', 'text', 'horizontal_rule', 'image', 'error', 'alert', 'input.text', 'input.textarea', 'input.number', 'input.password', 'input.tele', 'input.calendar', 'input.checkbox', 'input.radio', 'input.select', 'input.select.multiple', 'input.gender', 'input.language', 'input.country', 'input.color', 'input.file'], required: true, default: 'input.text' },

  // Text value for 'title', 'heading' or 'text', or some introductory text before the input.
  text: { $type: String, trim: true, maxlength: 10240, default: '', validate: core.mongodb.validation.rule.description },

  // Input label.
  label: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },

  // Input placeholder.
  placeholder: { $type: String, trim: true, maxlength: 256, default: '', validate: core.mongodb.validation.rule.description },

  // A text that offers clarification to the question as stated using the `label`.
  clarification: { $type: String, trim: true, maxlength: 10240, default: '', validate: core.mongodb.validation.rule.description },

  // Input hint (like a tooltip or blue round 'i' icon).
  hint: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },

  // Choices the user can select from in case of a 'input.radio', `input.checkbox`, or 'input.select'.
  choice:
   [
     {
      _id: false,

      label: { $type: String, trim: true, maxlength: 256, required: true, validate: core.mongodb.validation.rule.description },

      value: { $type: String, trim: true, maxlength: 256, required: true, validate: core.mongodb.validation.rule.description },
     },
   ],

  value:
   {
    // Default input value.
    default: { $type: core.mongodb.schema.type.mixed, trim: true, maxlength: 1024, validate: core.mongodb.validation.rule.form.element.value },

    // Current value.
    current: { $type: core.mongodb.schema.type.mixed, trim: true, maxlength: 1024, validate: core.mongodb.validation.rule.form.element.value },

    // Defining a path should retrieve / store the current value somewhere else.
    // This is useful for check settings where the values need to be stored in `Profile.configuration`.
    path: { $type: String, trim: true, maxlength: 256, default: '', validate: core.mongodb.validation.rule.object.property.path.relaxed },
   },

  // An array of strings referring to validation rules. Validation rules should exist both in the front-end and back-end, and in the back-end as a request filter and schema validation.
  validation:
   [
     { $type: String, required: true, validate: core.mongodb.validation.rule.validation.rule.code },
   ],

  /*
   Modifiers are basically CSS classes. When applied, they can change how a form element looks and / or behaves in the front-end. The front-end determines which modifiers it supports. The API is blissfully unaware of their meaning.

   But if the API could speculate, it would imagine the front-end supporting modifiers like 'indent_1' and 'choice_vertical'.
  */
  modifier:
   [
     { $type: String, required: true, validate: core.mongodb.validation.rule.alphanumeric.snake_case.lowercase },
   ],

  time: false,
 };
