export default /* user.filter.js */
 {
 
  request:
   {
 
    register:
     {
      user:
       [
         {
          // id: core.mongodb.object_id,
 
          password: String,
 
          name:
           {
            personal: core.validate('name.human.full'),
            family: core.validate('name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
 
          locale: core.validate('locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validation.rule.array({ range: [1, 5] },
             [
               {
                uri: core.validate('address.net.mail'),
                primary: core.validate('boolean'),
               },
             ]),
 
            net:
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.net.uri'),
               },
             ],
           },
         },
       ],
 
     },
 
 
    create:
     {
      user:
       [
         {
          // id: core.mongodb.object_id,
 
          name:
           {
            personal: core.validate('name.human.full'),
            family: core.validate('name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
 
           locale: core.validate('locale'),
           gender: core.validate('gender'),
 
           address:
            {
             mail: core.validation.rule.array({ range: [1, 5] },
              [
                {
                 uri: core.validate('address.net.mail'),
                 primary: core.validate('boolean'),
                },
              ]),
 
             net:
              [
                {
                 type: core.validation.rule.enum(['http', 'tel']),
                 uri: core.validate('address.net.uri'),
                },
              ],
            },
         },
       ],
 
     },
 
 
    update:
     {
      user:
       [
         {
          // id: core.mongodb.object_id,
 
          name:
           {
            personal: core.validate('name.human.full'),
            family: core.validate('name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
 
          locale: core.validate('locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validation.rule.array({ required: false, range: [1, 5] },
             [
               {
                uri: core.validate('address.net.mail'),
                primary: core.validate('boolean'),
               },
             ]),
 
            net:
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.net.uri'),
               },
             ],
           },
         },
       ],
 
     },
 
 
    password:
     {
      user:
       [
         {
          // id: core.mongodb.object_id,
 
          password:
           {
            current: String,
            new: String,
           },
 
          reset:
           {
            token: String,
           },
 
         },
       ],
 
     },
 
   },
 
 
  response:
   {
 
    minimal:
     {
      user:
       [
         {
          id: true,
 
          name: true,
 
          // locale: true,
          // gender: true,
         },
       ],
 
     },
 
 
    list:
     {
      user:
       [
         {
          id: true,
 
          name: true,
 
          locale: true,
          gender: true,
         },
       ],
 
     },
 
 
    detail:
     {
      user:
       [
         {
          id: true,
 
          type: true,
 
          name: true,
 
          locale: true,
          gender: true,
 
          address:
           {
            mail:
             [
               {
                uri: true,
 
                primary: true,
                confirmed: true,
               },
             ],
 
            net: true,
           },
 
          scope: true,
 
          time: true,
         },
       ],
 
     },
 
   },
 };
