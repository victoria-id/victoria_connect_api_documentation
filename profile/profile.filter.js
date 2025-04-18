export default /* profile.filter.js */
 {
 
  request:
   {
 
    create:
     {
      profile:
       [
         {
          // id: core.mongodb.type.object_id,
 
          // portal:
          //  {
          //   id: core.mongodb.type.object_id,
          //  },
 
          // group:
          //  {
          //   id: core.mongodb.type.object_id,
          //  },
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          reminder:
           {
            id: core.validate('object_id'),
           },
 
          screenee:
           {
            type: core.validation.rule.enum(['screenee', 'employee', 'professional', 'client', 'customer', 'supplier', 'partner']),
           },
 
          check:
           [
             {
              code: core.validate('resource.identifier'),
 
              state_finish: core.validate('string'),
 
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
          // id: core.mongodb.type.object_id,
 
          // group:
          //  {
          //   id: core.mongodb.type.object_id,
          //  },
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          reminder:
           {
            id: core.validate('object_id'),
           },
 
          screenee:
           {
            type: core.validation.rule.enum(['screenee', 'employee', 'professional', 'client', 'customer', 'supplier', 'partner']),
           },
 
          check:
           [
             {
              code: core.validate('resource.identifier'),
 
              state_finish: core.validation.rule.enum(['evaluation', 'success']),
 
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
 
          reminder:
           {
            id: true,
           },
 
          check:
           [
             {
              id: true,
 
              state_finish: true,
 
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
