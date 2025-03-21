export default /* group.filter.js */
 {
 
  request:
   {
 
    create:
     {
      group:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('name.relaxed'),
 
         },
       ],
 
     },
 
 
    update:
     {
      group:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('name.relaxed'),
 
         },
       ],
 
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      group:
       [
         {
          id: true,
 
          name: true,
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      group:
       [
         {
          id: true,
 
          name: true,
 
          access:
           [
             {
              id: true,
 
              user: true,
              role: true,
             },
           ],
 
          time: true,
         },
       ],
 
     },
 
 
    role:
     {
      group:
       [
         {
          id: true,
 
          name: true,
 
          role: true,
 
          time: true,
         },
       ],
 
     },
 
   },
 };
