export default /* group.filter.js */
 {
 
  request:
   {
 
    create:
     {
      group:
       [
         {
          // id: core.mongodb.object_id,
 
          name: core.validate('name.relaxed'),
 
          access:
           [
             {
              user:
               {
                id: core.mongodb.object_id,
               },
 
              permission:
               [
                String,
               ],
             },
           ],
 
         },
       ],
 
     },
 
 
    update:
     {
      group:
       [
         {
          // id: core.mongodb.object_id,
 
          name: core.validate('name.relaxed'),
 
          access:
           [
             {
              user:
               {
                id: core.mongodb.object_id,
               },
 
              permission:
               [
                String,
               ],
             },
           ],
 
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
              permission: true,
             },
           ],
 
          time: true,
         },
       ],
 
     },
 
   },
 };
