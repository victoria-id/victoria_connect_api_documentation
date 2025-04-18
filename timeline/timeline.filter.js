export default /* timeline.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      message:
       [
         {
          type: core.validate('required', core.validation.rule.enum(['normal', 'approve', 'reject'])),
          scope: core.validate('required', core.validation.rule.enum(['screenee', 'client', 'internal'])),
          check:
           {
            code: core.validate('resource.identifier'),
           },
 
          content: core.validate('required', 'description'),
         },
       ],
 
     }, // create
 
   }, // request
 
 
  response:
   {
 
    list:
     {
 
      timeline:
       [
         {
          id: true,
 
          user:
           {
            id: true,
            name: true,
           },
 
          request: true,
 
          author: true,
          type: true,
          scope: true,
          check: true,
          code: true,
 
          content: true,
 
          time:
           {
            create: true,
           },
         },
       ],
 
     }, // list
 
   }, // response
 };
