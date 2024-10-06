export default /* webhook.filter.js */
 {
 
  request:
   {
 
    create:
     {
      webhook:
       [
         {
          // id: core.mongodb.object_id,
 
          method: core.validation.rule.enum(['get', 'put']),
          uri: core.validate('required', 'address.net.http.secure'),
 
          // Default headers to add to webhook payload.
          header: core.validation.rule.array({ range: [0, 3], required: false },
           [
             {
              name: core.validate('required', 'header'),
              value: core.validate('required', 'description'),
             },
           ]),
 
          // // Default query and data payload.
          // query: { $type: Object, default: {} },
          // data: { $type: Object, default: {} },
 
 
          // Execution behavior.
          immediate: core.validate('boolean'),
          guaranteed: core.validate('boolean'),
         },
       ],
 
     },
 
 
    update:
     {
      webhook:
       [
         {
          // id: core.mongodb.object_id,
 
          method: core.validation.rule.enum(['get', 'put']),
          uri: core.validate('required', 'address.net.http.secure'),
 
          // Default headers to add to webhook payload.
          header: core.validation.rule.array({ range: [0, 3], required: false },
           [
             {
              name: core.validate('required', 'header'),
              value: core.validate('required', 'description'),
             },
           ]),
 
          // // Default query and data payload.
          // query: { $type: Object, default: {} },
          // data: { $type: Object, default: {} },
 
 
          // Execution behavior.
          immediate: core.validate('boolean'),
          guaranteed: core.validate('boolean'),
         },
       ],
 
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      webhook:
       [
         {
          id: true,
 
 
          method: true,
          uri: true,
 
          // // Default headers to add to webhook payload.
          // header: true,
 
          // // Default query and data payload.
          // query: true,
          // data: true,
 
 
          // Execution behavior.
          immediate: true,
          guaranteed: true,
 
 
          error:
           {
            // 0 = healthy.
            level: true,
            // `count` resets on every successfully delivered payload.
            count: true,
           },
 
 
          // Success count and timestamp for statistics.
          success:
           {
            count: true,
            update: true,
           },
 
          // Exception count and timestamp for statistics.
          exception:
           {
            count: true,
            update: true,
           },
 
 
          node:
           {
            id: true,
           },
 
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      webhook:
       [
         {
          id: true,
 
 
          method: true,
          uri: true,
 
          // // Default headers to add to webhook payload.
          // header: true,
 
          // // Default query and data payload.
          // query: true,
          // data: true,
 
 
          // Execution behavior.
          immediate: true,
          guaranteed: true,
 
 
          error:
           {
            // 0 = healthy.
            level: true,
            // `count` resets on every successfully delivered payload.
            count: true,
           },
 
 
          // Success count and timestamp for statistics.
          success:
           {
            count: true,
            update: true,
           },
 
          // Exception count and timestamp for statistics.
          exception:
           {
            count: true,
            update: true,
           },
 
 
          node:
           {
            id: true,
           },
 
 
          time: true,
         },
       ],
 
     },
 
   },
 };
