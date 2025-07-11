export default /* group.document.filter.js */
 {
 
  request:
   {
 
    upload:
     {
      document: core.validation.rule.array({ range: [0, 1] },
       [
        core.validation.rule.file.object(
         {
          name: core.validate('required', 'file.name.relaxed'),
          type: core.validate('required', 'media.type', 'media.type.application.pdf'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
         }),
       ]),
     },
 
    update:
     {
      document:
       [
         {
          name: core.validate('required', 'name.relaxed'),
         },
       ],
     },
 
   },
 
  response:
   {
 
    list:
     {
      document:
       [
         {
          id: true,
 
          name: true,
          type: true,
 
          profile: true,
 
         },
       ],
 
      query: true,
     },
 
    detail:
     {
      document:
       [
         {
          id: true,
 
          name: true,
          type: true,
          encoding: true,
          content: true,
         },
       ],
     },
 
   },
 
 };
