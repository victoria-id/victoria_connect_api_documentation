export default /* profile.filter.js */
 {
 
  request:
   {
 
    create:
     {
      profile:
       [
         {
          // id: core.mongodb.object_id,
 
          // portal:
          //  {
          //   id: core.mongodb.object_id,
          //  },
 
          // group:
          //  {
          //   id: core.mongodb.object_id,
          //  },
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          screenee:
           {
            type: core.validation.rule.enum(['screenee', 'employee', 'client', 'customer', 'supplier', 'partner']),
           },
 
          check:
           [
             {
              code: core.validate('resource.identifier'),
 
              configuration:
               {
                // `data` is checked against `Check.configuration.form.element[]`.
                data: Object,
               },
             },
           ],
 
         },
       ],
 
     },
 
 
    update:
     {
      profile:
       [
         {
          // id: core.mongodb.object_id,
 
          // group:
          //  {
          //   id: core.mongodb.object_id,
          //  },
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          screenee:
           {
            type: core.validation.rule.enum(['screenee', 'employee', 'client', 'customer', 'supplier', 'partner']),
           },
 
          check:
           [
             {
              code: core.validate('resource.identifier'),
 
              configuration:
               {
                // `data` is checked against `Check.configuration.form.element[]`.
                data: Object,
               },
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
      profile:
       [
         {
          id: true,
 
          // portal:
          //  {
          //   id: true,
          //  },
 
          group:
           {
            id: true,
           },
 
          title: true,
          description: true,
 
          screenee: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              // configuration: true,
             },
           ],
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      profile:
       [
         {
          id: true,
 
          // portal:
          //  {
          //   id: true,
          //  },
 
          group:
           {
            id: true,
           },
 
          title: true,
          description: true,
 
          screenee: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              configuration: true,
             },
           ],
 
          time: true,
         },
       ],
 
     },
 
   },
 };
