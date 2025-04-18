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
 
          address:
           {
            mail: core.validation.rule.array({ required: false },
             [
               {
                name: core.validate('required', 'name.relaxed'),
                uri: core.validate('required', 'address.net.mail.relaxed'),
                use: core.validation.rule.array({ required: false },
                 [
                  core.validation.rule.enum(['alert']),
                 ]),
               },
             ]),
           },
 
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
 
          address:
           {
            mail: core.validation.rule.array({ required: false },
             [
               {
                name: core.validate('required', 'name.relaxed'),
                uri: core.validate('required', 'address.net.mail.relaxed'),
                use: core.validation.rule.array({ required: false },
                 [
                  core.validation.rule.enum(['alert']),
                 ]),
               },
             ]),
           },
 
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
 
 
          address:
           {
            mail:
             [
               {
                id: true,
 
                name: true,
                uri: true,
                use: true,
               },
             ],
           },
 
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
