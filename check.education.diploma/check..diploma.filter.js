export default /* check..diploma.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      source: core.validate('required', core.validation.rule.enum(['emrex', 'upload'])),
 
      emp:
       {
        id: core.validate('resource.identifier'),
       },
 
      file: core.validation.rule.array({ range: [0, 10] },
       [
         {
          name: core.validate('required', 'file.name.strict'),
          type: core.validate('required', 'media.type', 'media.type.application.pdf'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
          date_issue: core.validate('required', 'date'),
         },
       ]),
 
     },
 
 
    update:
     {
 
      highest: core.validate('required', 'boolean'),
 
     },
 
   },
 
 
  response:
   {
 
    detail:
     {
 
      diploma:
       [
        {
         id: true,
         name: true,
 
         source: true,
 
         emp:
          {
           id: true,
           token: true,
           name: true,
          },
 
         issuer: true,
         student: true,
 
         date: true,
         time: true,
 
         grading_scheme: true,
         learning_opportunity_specification: true,
 
         file: true,
         assertion: true,
         state: true,
        },
       ],
 
     },
 
   },
 
 };
