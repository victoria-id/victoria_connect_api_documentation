export default /* mail.template.filter.js */
 {
 
  request:
   {
 
    create:
     {
      template:
       [
         {
          path: core.validate('required', 'resource.identifier'),
          type: core.validate('required', core.validation.rule.enum(['base', 'fragment', 'content'])),
 
          locale: core.validate('required', 'locale'),
          subject: core.validate('string'),
          content: core.validate('string'),
         },
       ],
     },
 
 
    update:
     {
      template:
       [
         {
          path: core.validate('resource.identifier'),
          type: core.validate(core.validation.rule.enum(['base', 'fragment', 'content'])),
 
          locale: core.validate('locale'),
          subject: core.validate('string'),
          content: core.validate('string'),
         },
       ],
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      template:
       [
         {
          id: true,
 
          path: true,
          type: true,
          locale: true,
 
          portal:
           {
            id: true,
           },
 
          base: true,
 
          active: true,
         },
       ],
     },
 
 
    detail:
     {
      template:
       [
         {
          id: true,
 
          path: true,
          type: true,
          locale: true,
 
          subject: true,
          base: true,
 
          content: true,
 
          dependency: true,
 
          active: true,
 
          portal:
           {
            id: true,
           },
 
          has_default: true,
 
          validation:
           {
            mjml:
             {
              valid: true,
              error: true,
             },
            variable:
             {
              valid: true,
              error: true,
              fragment: true,
             },
           },
         },
       ],
     },
 
 
    variable:
     {
      variable:
       [
        {
         name: true,
         example: true,
        },
       ],
     },
 
   },
 
 };
