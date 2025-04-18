export default /* group.contact.filter.js */
 {
 
  request:
   {
 
    create:
     {
      contact:
       [
         {
          order: core.validate('number.round'),
 
          image:
           [
            core.validation.rule.file.object(
             {
              name: core.validate('required', 'file.name.strict'),
              type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
              encoding: core.validate('required', core.validation.rule.enum(['base64'])),
              content: core.validate('required', 'encoding.base64'),
             }),
           ],
 
          name:
           {
            display: core.validate('name.human.full'),
           },
 
          job_title: core.validate('description'),
          description: core.validate('description'),
 
          address:
           {
            mail: core.validate('address.net.mail.relaxed'),
            tele:
             {
              phone: core.validate('address.net.tele.e164'),
             },
           },
         },
       ],
 
     }, // create
 
   }, // request
 
 
  response:
   {
 
    list:
     {
 
      contact:
       [
         {
          id: true,
 
          group:
           {
            id: true,
           },
 
          order: true,
 
          image: true,
 
          name:
           {
            display: true,
           },
 
          job_title: true,
          description: true,
 
          address:
           {
            mail: true,
            tele:
             {
              phone: true,
             },
           },
         },
       ],
 
     }, // list
 
   }, // response
 };
