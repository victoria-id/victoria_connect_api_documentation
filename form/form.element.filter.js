export default /* form.element.filter.js */
 {
 
  request:
   {
 
    element:
     [
       {
        // Allows 'q1' to 'q99_99'.
        id: core.validate('variable.name'),
 
        /*
 
         Question numbering (`q1`, `q2`, etc.) changes while adding, removing, and reordering questions. A `tag` is a persistent identifier that allows automated systems to recognize information.
 
         For example, when asking for a person's date of birth, you can tag the question with "date_of_birth". Automated systems are then able to interpret the given answer accordingly.
 
         Tags do not have to be unique, so if you want to group multiple questions (like image upload questions) using the same tag, then this is possible.
 
        */
        tag: core.validate('alphanumeric.snake_case.mixed_case'),
 
        // A condition allows showing or hiding a form element (a.k.a. a question).
        condition: core.validate('condition'),
 
        // The type of form element.
        type: core.validation.rule.enum(['title', 'heading', 'text', 'horizontal_rule', 'image', 'error', 'alert', 'input.text', 'input.textarea', 'input.number', 'input.password', 'input.tele', 'input.calendar', 'input.checkbox', 'input.radio', 'input.select', 'input.select.multiple', 'input.gender', 'input.language', 'input.country', 'input.color', 'input.file']),
 
        // Text value for 'title', 'heading' or 'text', or some introductory text before the input.
        text: core.validate('description'),
 
        // Input label.
        label: core.validate('description'),
 
        // Input placeholder.
        placeholder: core.validate('description'),
 
        // A text that offers clarification to the question as stated using the `label`.
        clarification: core.validate('description'),
 
        // Input hint (like a tooltip or blue round 'i' icon).
        hint: core.validate('description'),
 
        // Choices the user can select from in case of a 'input.radio', `input.checkbox`, or 'input.select'.
        choice: core.validation.rule.array({ range: [0, 50], required: false },
         [
           {
            label: core.validate('description'),
 
            value: core.validate('description'),
           },
         ]),
 
        value:
         {
          // Default input value.
          default: core.validate('form.element.value'),
 
          // Current value.
          current: core.validate('form.element.value'),
 
          // Defining a path should retrieve / store the current value somewhere else.
          // This is useful for check settings where the values need to be stored in `Profile.configuration`.
          path: core.validate('object.property.path.relaxed'),
         },
 
        // An array of strings referring to validation rules. Validation rules should exist both in the front-end and back-end, and in the back-end as a request filter and schema validation.
        validation: core.validation.rule.array({ range: [0, 10], required: false },
         [
          core.validate('validation.rule.code'),
         ]),
 
        /*
         Modifiers are basically CSS classes. When applied, they can change how a form element looks and / or behaves in the front-end. The front-end determines which modifiers it supports. The API is blissfully unaware of their meaning.
 
         But if the API could speculate, it would imagine the front-end supporting modifiers like 'indent_1' and 'choice_vertical'.
        */
        modifier: core.validation.rule.array({ range: [0, 5], required: false },
         [
          core.validate('alphanumeric.snake_case.lowercase'),
         ]),
 
       },
     ],
 
   },
 
 
  response:
   {
 
    element:
     [
       {
        // Allows 'q1' to 'q99_99'.
        id: true,
 
        /*
 
         Question numbering (`q1`, `q2`, etc.) changes while adding, removing, and reordering questions. A `tag` is a persistent identifier that allows automated systems to recognize information.
 
         For example, when asking for a person's date of birth, you can tag the question with "date_of_birth". Automated systems are then able to interpret the given answer accordingly.
 
         Tags do not have to be unique, so if you want to group multiple questions (like image upload questions) using the same tag, then this is possible.
 
        */
        tag: true,
 
        // A condition allows showing or hiding a form element (a.k.a. a question).
        condition: true,
 
        // The type of form element.
        type: true,
 
        // Text value for 'title', 'heading' or 'text', or some Introductory text before the input.
        text: true,
 
        // Input label.
        label: true,
 
        // Input placeholder.
        placeholder: true,
 
        // A text that offers clarification to the question as stated using the `label`.
        clarification: true,
 
        // Input hint (like a tooltip or blue round 'i' icon).
        hint: true,
 
        // Choices the user can select from in case of a 'input.radio', `input.checkbox`, or 'input.select'.
        choice:
         [
           {
            label: true,
 
            value: true,
           },
         ],
 
        value:
         {
          // Default input value.
          default: true,
 
          // Current value.
          current: true,
 
          // Defining a path should retrieve / store the current value somewhere else.
          // This is useful for check settings where the values need to be stored in `Profile.configuration`.
          path: true,
         },
 
        // An array of strings referring to validation rules. Validation rules should exist both in the front-end and back-end, and in the back-end as a request filter and schema validation.
        validation: true,
 
        /*
         Modifiers are basically CSS classes. When applied, they can change how a form element looks and / or behaves in the front-end. The front-end determines which modifiers it supports. The API is blissfully unaware of their meaning.
 
         But if the API could speculate, it would imagine the front-end supporting modifiers like 'indent_1' and 'choice_vertical'.
        */
        modifier: true,
 
       },
     ],
 
   },
 
 };
