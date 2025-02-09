export default /* group.user.role.filter.js */
 {
  filter:
   {
 
    request:
     {
 
      update:
       {
 
        access:
         [
           {
            user:
             {
              id: core.validate('required', core.mongodb.type.object_id),
             },
 
            role: core.validation.rule.array({},
             [
              core.validate('required', core.mongodb.type.object_id),
             ]),
           },
         ],
 
       }, // update
 
     }, // request
 
   }, // filter
 };
