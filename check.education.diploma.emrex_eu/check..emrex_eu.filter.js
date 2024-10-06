export default /* check..emrex_eu.filter.js */
 {
 
  request:
   {
 
    update:
     {
      emp:
       {
        emp_id: core.validate('required', 'resource.identifier'),
       },
     },
 
 
    upload:
     {
      file: core.validation.rule.array({ range: [0, 10] },
       [
         {
          name: core.validate('required', 'file.name.strict'),
          type: core.validate('required', 'media.type', 'media.type.application.pdf'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
         },
       ]),
 
     },
   },
 
 };
