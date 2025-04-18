export default /* group.screenee.filter.js */
 {
 
  request:
   {
 
    create:
     {
      screenee:
       [
         {
          // id: core.mongodb.type.object_id,
 
          user:
           {
            id: core.mongodb.type.object_id,
           },
 
          reference: core.validate('resource.identifier'),
 
          organization:
           {
            name: core.validate('name.relaxed'),
           },
 
          name:
           {
            personal: core.validate('required', 'name.human.full'),
            family: core.validate('required', 'name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
 
          description: core.validate('description'),
 
          locale: core.validate('required', 'locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validate('required', 'address.net.mail.relaxed'),
 
            tele:
             {
              phone: core.validate('address.net.tele.e164'),
             },
           },
 
          screener: core.validation.rule.array({ range: [0, 5] },
           [
            core.validate('resource.identifier'),
           ]),
 
          do_not_contact: core.validate('boolean'),
 
          time:
           {
            end: core.validate('date', 'date_only'),
            deadline: core.validate('date', 'date_only'),
           },
         },
       ],
 
     },
 
 
    update:
     {
      screenee:
       [
         {
          // id: core.mongodb.type.object_id,
          reference: core.validate('resource.identifier'),
 
          type: core.validation.rule.enum(['screenee', 'employee', 'professional', 'client', 'customer', 'supplier', 'partner']),
 
          organization:
           {
            name: core.validate('name.relaxed'),
           },
 
          name:
           {
            personal: core.validate('required', 'name.human.full'),
            family: core.validate('required', 'name.human.full'),
            display: core.validate('name.human.full'),
            short: core.validate('name.human.full'),
           },
 
          description: core.validate('description'),
 
          locale: core.validate('required', 'locale'),
          gender: core.validate('gender'),
 
          address:
           {
            mail: core.validate('address.net.mail.relaxed'),
 
            tele:
             {
              phone: core.validate('address.net.tele.e164'),
             },
           },
 
          screener: core.validation.rule.array({ range: [0, 5] },
           [
            core.validate('resource.identifier'),
           ]),
 
          do_not_contact: core.validate('boolean'),
 
          time:
           {
            end: core.validate('date', 'date_only'),
            deadline: core.validate('date', 'date_only'),
           },
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
          reference: true,
 
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
 
          screener: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
 
              badge: true,
              description: true,
              score: true,
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
          reference: true,
 
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
 
          screener: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
 
              assertion: true,
              date: true,
 
              badge: true,
              description: true,
              score: true,
 
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
