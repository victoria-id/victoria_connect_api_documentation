export default /* webhook.filter.js */
 {
 
  request:
   {
 
    create:
     {
      webhook:
       [
         {
          // id: core.mongodb.type.object_id,
 
          method: core.validation.rule.enum(['get', 'put']),
          uri: core.validate('required', address_net_http_secure),
 
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
 
          channel: core.validation.rule.array({ range: [0, 100], required: false },
           [
            core.validate('required', core.validation.rule.enum(core.configuration.webhook.channel.available)),
           ]),
         },
       ],
 
     },
 
 
    update:
     {
      webhook:
       [
         {
          // id: core.mongodb.type.object_id,
 
          method: core.validation.rule.enum(['get', 'put']),
          uri: core.validate(address_net_http_secure),
 
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
 
          channel: core.validation.rule.array({ range: [0, 100], required: false },
           [
            core.validate('required', core.validation.rule.enum(core.configuration.webhook.channel.available)),
           ]),
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
          // header: false,
 
          // // Default query and data payload.
          // query: true,
          // data: true,
 
 
          // Execution behavior.
          immediate: true,
          guaranteed: true,
 
          channel:
           [
            true,
           ],
 
 
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
          header:
           [
             {
              name: true,
             },
           ],
 
          // // Default query and data payload.
          // query: true,
          // data: true,
 
 
          // Execution behavior.
          immediate: true,
          guaranteed: true,
 
          channel:
           [
            true,
           ],
 
 
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
 
 
    secret:
     {
      webhook:
       [
         {
          id: true,
 
 
          method: true,
          uri: true,
 
          // `header` contains secrets! This is displayed only during webhook creation.
          // Default headers to add to webhook payload.
          header: true,
 
          // // Default query and data payload.
          // query: true,
          // data: true,
 
 
          // Execution behavior.
          immediate: true,
          guaranteed: true,
 
          channel:
           [
            true,
           ],
 
 
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
 
 
    channel:
     {
 
      list:
       {
        'webhook.channel':
         [
           {
            code: true,
           },
         ],
       },
 
     },
   },
 };
