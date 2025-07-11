export default /* check..vog_nl.filter.js */
 {
 
  request:
   {
 
    flow:
     {
      vog_request_new: core.validate('required', 'boolean'),
     }, // flow
 
 
    request:
     {
      birth:
       {
        date: core.validate('required', 'date'),
       },
      address:
       {
        mail: core.validate('required', 'address.net.mail.relaxed'),
       },
     }, // request
 
 
    upload:
     {
      file: core.validation.rule.array({ range: [0, 1] },
       [
         {
          name: core.validate('required', 'file.name.strict'),
          type: core.validate('required', 'media.type'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
         },
       ]),
 
     }, // upload
 
   }, // request
 
 
  response:
   {
 
    pending:
     {
 
      request:
       [
         {
          vog_data: true,
          configuration: true,
         },
       ],
 
     }, // pending
 
   },
 };
