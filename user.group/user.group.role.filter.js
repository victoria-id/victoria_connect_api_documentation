export default /* user.group.role.filter.js */
 {
  filter:
   {
 
    request:
     {
 
      update:
       {
 
        group:
         [
           {
            id: core.validate('required', core.mongodb.type.object_id),
 
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
