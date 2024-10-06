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
      id: core.validate('required', 'string', 'trim'),
 
      birth:
       {
        country: core.validate('required', 'country.code'),
        date: core.validate('required', 'date'),
        place: core.validate('required', 'name.relaxed'),
       },
 
      nationality: core.validation.rule.array({ range: [0, 10], required: false },
       [
        core.validate('country.code'),
       ]),
 
      address:
       {
        physical:
         {
          city: core.validate('required', 'name.relaxed'),
          country: core.validate('required', 'country.code'),
          house_number: core.validate('required', 'string', 'trim'),
          postal_code: core.validate('required', 'address.physical.postal_code.relaxed'),
          street: core.validate('required', 'name.relaxed'),
         },
 
        mail: core.validate('required', 'address.net.mail'),
 
        tele:
         {
          phone: core.validate('address.net.tele.relaxed'),
         },
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
