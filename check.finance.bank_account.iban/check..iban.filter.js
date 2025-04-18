export default /* check..iban.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      image:
       {
 
        bank:
         {
          card:
           {
            image: core.validation.rule.array({ count: [0, 2] }, // Either 0 (none) or 2 (front and back).
             [
              core.validation.rule.file.object(
               {
                name: core.validate('required', 'file.name.strict'),
                type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
                encoding: core.validate('required', core.validation.rule.enum(['base64'])),
                content: core.validate('required', 'encoding.base64'),
               }),
             ]),
           },
         },
 
       },
 
      information:
       {
 
        bank:
         {
          code: core.validate('bank.bic'), // BIC.
 
          account:
           {
            type: core.validate('string'), // E.g., 'iban' (default) or 'unknown'.
            number: core.validate('string', 'trim', 'uppercase'),
 
            holder:
             {
              // type: '', // 'personal' / 'business'.
              name: core.validate('name.human.initial'),
              organization: core.validate('name.relaxed'),
             },
           },
         },
 
       },
 
     },
   },
 
 };
