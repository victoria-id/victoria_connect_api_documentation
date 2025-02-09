export default /* role.filter.js */
 {
 
  request:
   {
 
    create:
     {
      role:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('name.relaxed'),
 
          permission: core.validation.rule.array({ required: false },
           [
            core.validate('permission'),
           ]),
 
         },
       ],
 
     }, // create
 
 
    update:
     {
      role:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('name.relaxed'),
 
          permission: core.validation.rule.array({ required: false },
           [
            core.validate('permission'),
           ]),
 
         },
       ],
 
     }, // update
 
   },
 
 
  response:
   {
 
    list:
     {
      role:
       [
         {
          id: true,
 
          name: true,
 
          code: true,
          protected: true,
 
          permission: true,
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      role:
       [
         {
          id: true,
 
          name: true,
 
          code: true,
          protected: true,
 
          time: true,
         },
       ],
 
     },
 
   },
 };
