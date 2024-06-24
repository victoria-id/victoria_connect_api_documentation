export default /* group.screenee.filter.js */
 {
 
  request:
   {
 
    create:
     {
      screenee:
       [
         {
          // id: core.mongodb.object_id,
 
          organization:
           {
            name: core.validate('name.relaxed'),
           },
 
          name:
           {
            personal: core.validate('name.human.full'),
            family: core.validate('name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
          description: core.validate('description'),
 
          locale: core.validate('locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validate('address.net.mail'),
            tele:
             {
              phone: core.validate('address.net.tele'),
             },
           },
 
          do_not_contact: core.validate('boolean'),
         },
       ],
 
     },
 
 
    update:
     {
      screenee:
       [
         {
          // id: core.mongodb.object_id,
 
          type: core.validation.rule.enum(['screenee', 'employee', 'client', 'customer', 'supplier', 'partner']),
 
          organization:
           {
            name: core.validate('name.relaxed'),
           },
 
          name:
           {
            personal: core.validate('name.human.full'),
            family: core.validate('name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
          description: core.validate('description'),
 
          locale: core.validate('locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validate('address.net.mail'),
            tele:
             {
              phone: core.validate('address.net.tele'),
             },
           },
 
          do_not_contact: core.validate('boolean'),
         },
       ],
 
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      screenee:
       [
         {
          id: true,
 
          group:
           {
            id: true,
           },
 
          screening:
           {
            id: true,
           },
 
          user:
           {
            id: true,
           },
 
          state: true,
 
          type: true,
 
          organization:
           {
            name: true,
           },
 
          name: true,
          // description: false,
 
          locale: true,
          gender: true,
 
          address: true,
 
          check:
           [
             {
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
             },
           ],
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      screenee:
       [
         {
          id: true,
 
          group:
           {
            id: true,
           },
 
          screening:
           {
            id: true,
           },
 
          user:
           {
            id: true,
           },
 
          state: true,
 
          type: true,
 
          organization:
           {
            name: true,
           },
 
          name: true,
          description: true,
 
          locale: true,
          gender: true,
 
          address: true,
 
          check:
           [
             {
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
 
              data:
               {
                shared: true,
 
                // screenee: false,
 
                screener: true,
               },
             },
           ],
 
          time: true,
         },
       ],
 
     },
 
   },
 };
