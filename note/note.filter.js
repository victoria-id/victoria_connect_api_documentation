export default /* note.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      note:
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
 
      note:
       [
         {
          id: true,
 
          user:
           {
            id: true,
            name: true,
           },
 
          author: true,
          type: true,
          scope: true,
          check: true,
 
          content: true,
 
          time: true,
         },
       ],
 
     }, // list
 
   }, // response
 };
