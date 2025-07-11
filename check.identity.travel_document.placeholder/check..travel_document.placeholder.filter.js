export default /* check..travel_document.placeholder.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      document:
       {
        id: core.validate('string', 'trim', 'uppercase', 'description'),
 
        type:
         {
          code: core.validate('string', 'trim', 'uppercase', 'description'),
          name: core.validate('required', core.validation.rule.enum(['passport', 'id_card', 'residence_permit'])),
         },
 
        issuer:
         {
          state: core.validate('required', 'country.code'),
         },
 
        date:
         {
          expire: core.validate('required', 'date'),
         },
       },
 
      entity:
       {
        id: core.validate('string', 'trim', 'uppercase', 'description'), // BSN for example.
 
        name:
         {
          personal: core.validate('required', 'name.relaxed'),
          family: core.validate('name.relaxed'),
          married: core.validate('name.relaxed'),
         },
 
        date:
         {
          birth: core.validate('required', 'date'),
         },
 
        gender: core.validate('required', 'gender'),
        nationality: core.validate('required', 'country.code'),
 
        image: core.validation.rule.array({ range: [0, 1] },
         [
          core.validation.rule.file.object(
           {
            name: core.validate('required', 'file.name.strict'),
            type: core.validate('required', 'media.type', 'media.type.image.jpeg'),
            encoding: core.validate('required', core.validation.rule.enum(['base64'])),
            content: core.validate('required', 'encoding.base64'),
           }),
         ]),
 
       },
 
     }, // update
 
   },
 };
