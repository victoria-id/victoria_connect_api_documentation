export default /* check..uwv_nl.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      file: core.validation.rule.array({ count: 1 },
       [
        core.validation.rule.file.object(
         {
          name: core.validate('required', 'file.name.strict'),
          type: core.validate('required', 'media.type', 'media.type.application.pdf'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
         }),
       ]),
 
     },
 
 
    skip:
     {
 
      skip_reason: core.validate('required', 'description'),
 
     },
 
   },
 
 };
