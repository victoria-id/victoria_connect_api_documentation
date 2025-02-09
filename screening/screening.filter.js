export default /* screening.filter.js */
 {
 
  request:
   {
 
    create:
     {
      screening:
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
 
          profile:
           {
            id: core.mongodb.type.object_id,
           },
 
          country: core.validate('country.code'),
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          time:
           {
            /*
             Date format: 2000-12-31T12:00Z.
             Make sure to use timezone is Zulu (`Z`) or `+0000`, and that time is set to 12:00.
            */
            from: core.validate('date', 'date_only'),
            to: core.validate('date', 'date_only'),
           },
         },
       ],
 
     },
 
 
    update:
     {
      screening:
       [
         {
          // id: core.mongodb.type.object_id,
 
          // group:
          //  {
          //   id: core.mongodb.type.object_id,
          //  },
 
          // profile:
          //  {
          //   id: core.mongodb.type.object_id,
          //  },
 
          reminder:
           {
            id: true,
           },
 
          title: core.validate('name.relaxed'),
          description: core.validate('description'),
 
          state: core.validation.rule.enum(['new', 'pending', 'open', 'closed', 'archived']),
 
          time:
           {
            /*
             Date format: 2000-12-31T12:00Z.
             Make sure to use timezone is Zulu (`Z`) or `+0000`, and that time is set to 12:00.
            */
            from: core.validate('date', 'date_only'),
            to: core.validate('date', 'date_only'),
           },
         },
       ],
 
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      screening:
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
 
          profile:
           {
            id: true,
           },
 
          country: true,
 
          title: true,
          description: true,
 
          screenee: true,
 
          state: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
             },
           ],
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      screening:
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
 
          profile:
           {
            id: true,
           },
 
          reminder:
           {
            id: true,
           },
 
          country: true,
 
          title: true,
          description: true,
 
          screenee: true,
 
          state: true,
 
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
