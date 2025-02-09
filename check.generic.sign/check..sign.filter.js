export default /* check..sign.filter.js */
 {
 
  request:
   {
    decline:
     {
      reason: core.validate('required', core.validation.rule.enum(['content_problem', 'outright_reject'])),
      explanation: core.validate('required', 'description', 'trim'),
     },
 
    sign:
     {
      otp:
       {
        phone:
         {
          id: core.validate('required', 'resource.identifier'),
          code: core.validate('required', 'number'),
         },
 
        mail:
         {
          id: core.validate('required', 'resource.identifier'),
          code: core.validate('required', 'number'),
         },
       },
     },
 
    sign_bulk:
     {
      // Optionally: specify a document that should be fully populated and returned.
      populate: core.validate('resource.identifier'),
 
      envelope: core.validation.rule.array({ range: [0, 100] },
       [
        core.validate('resource.identifier'),
       ]),
 
      otp:
       {
        phone:
         {
          id: core.validate('required', 'resource.identifier'),
          code: core.validate('required', 'number'),
         },
 
        mail:
         {
          id: core.validate('required', 'resource.identifier'),
          code: core.validate('required', 'number'),
         },
       },
     },
 
    upload:
     {
      action: core.validate('required', core.validation.rule.enum(['approve', 'sign'])),
      download_required: core.validate('boolean'),
 
      file: core.validation.rule.array({ range: [1, 1] },
       [
         {
          name: core.validate('required', 'file.name.relaxed'),
          type: core.validate('required', 'media.type', 'media.type.application.pdf'),
          encoding: core.validate('required', core.validation.rule.enum(['base64'])),
          content: core.validate('required', 'encoding.base64'),
         },
       ]),
 
      signee: core.validation.rule.array({ range: [1] },
       [
         {
          role:
           {
            id: core.validate('required', 'resource.identifier'),
           },
          order: core.validate('required', 'number'),
         },
       ]),
     },
   },
 
  response:
   {
 
    list:
     {
      document:
       [
         {
          id: true,
          source: true,
 
          action: true,
 
          name: true,
          state: true,
 
          envelope: true,
         },
       ],
     },
 
    detail:
     {
      document:
       [
         {
          source: true,
          id: true,
 
          name: true,
          state: true,
 
          user:
           {
            current_signee: true,
            state: true,
           },
 
          envelope:
           {
            id: true,
 
            action: true,
            download_required: true,
 
            state: true,
 
            file:
             [
              {
               id: true,
 
               name: true,
               type: true,
               encoding: true,
               content: true,
 
               digest: true,
               version: true,
              },
             ],
 
            signee:
             [
               {
                id: true,
 
                role: true,
                signed: true,
 
                state: true,
 
                decline: true,
 
                time:
                 {
                  approve: true,
                  decline: true,
                  download: true,
                  sign: true,
                 },
 
                name: true,
 
                address:
                 {
                  mail: true,
                 },
 
                screenee:
                 {
                  id: true,
                 },
 
                user:
                 {
                  id: true,
                 },
 
                file: true,
               },
             ],
           },
         },
       ],
     },
 
   },
 
  envelope:
   {
    minimal:
     {
      name: true,
 
      action: true,
      download_required: true,
 
      state: true,
 
      signee:
       [
         {
          role:
           {
            id: true,
           },
 
          name: true,
 
          state: true,
 
          decline: true,
 
          time: true,
         },
       ],
 
      time: true,
     },
   },
 };
