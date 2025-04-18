export default /* user.filter.js */
 {
 
  request:
   {
 
    /**
     Registration is the process of an anonymous user creating an account for him/herself by
      supplying various pieces of information including a password.
     The user cannot specify account type as the account type is always 'normal'.
    */
    register:
     {
 
      user:
       [
         {
          // id: core.mongodb.type.object_id,
 
          password: String,
 
          name:
           {
            personal: core.validate('required', 'name.human.full'),
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
                uri: core.validate('address.net.mail.relaxed'),
                primary: core.validate('boolean'),
               },
             ]),
 
            net: core.validation.rule.array({ required: false, range: [0, 3] },
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.net.uri'),
               },
             ]),
           },
 
         },
       ],
 
     }, // register
 
 
    /**
     User creation is the process of a portal / group administrator creating an account for someone else by
      supplying various pieces of information excluding password.
     The user can be of type 'normal' or 'federated'.
    */
    create:
     {
 
      user:
       [
         {
          // id: core.mongodb.type.object_id,
 
          type: core.validate('required', core.validation.rule.enum(['normal', 'federated'])),
 
          name:
           {
            personal: core.validate('required', 'name.human.full'),
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
                uri: core.validate('address.net.mail.relaxed'),
                primary: core.validate('boolean'),
               },
             ]),
 
            net: core.validation.rule.array({ required: false, range: [0, 3] },
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.net.uri'),
               },
             ]),
           },
 
         },
       ],
 
     }, // create
 
 
    update:
     {
 
      user:
       [
         {
          // id: core.mongodb.type.object_id,
 
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
                uri: core.validate('address.net.mail.relaxed'),
                primary: core.validate('boolean'),
               },
             ]),
 
            net: core.validation.rule.array({ required: false, range: [0, 3] },
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.net.uri'),
               },
             ]),
           },
 
         },
       ],
 
     }, // update
 
 
    password:
     {
 
      user:
       [
         {
          // id: core.mongodb.type.object_id,
 
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
 
     }, // password
 
 
    confirm:
     {
 
      user:
       [
         {
          // id: core.mongodb.type.object_id,
 
          password:
           {
            new: String,
           },
 
         },
       ],
 
     }, // confirm
 
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
 
     }, // minimal
 
 
    verify:
     {
 
      user:
       [
         {
          id: true,
 
          name: true,
 
          type: true,
 
          address:
           {
            mail:
             [
              {
               uri: true,
              },
             ],
           },
         },
       ],
 
     }, // verify
 
 
    list:
     {
 
      user:
       [
         {
          id: true,
 
          type: true,
 
          name: true,
 
          gender: true,
          locale: true,
 
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
           },
 
          role: true,
         },
       ],
 
      query: true,
 
     }, // list
 
 
    detail:
     {
 
      user:
       [
         {
          id: true,
 
          type: true,
 
          name: true,
 
          gender: true,
          locale: true,
 
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
 
          role: true,
 
          consent: true,
 
          time: true,
         },
       ],
 
      query: true,
     }, // detail
 
   },
 };
