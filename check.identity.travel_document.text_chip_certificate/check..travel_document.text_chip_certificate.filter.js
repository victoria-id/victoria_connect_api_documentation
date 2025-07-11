export default /* check..travel_document.text_chip_certificate.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      chip:
       {
        lds1:
         {
          dg1: String,
          dg2: String,
          dg3: String,
          dg4: String,
          dg5: String,
          dg6: String,
          dg7: String,
          dg8: String,
          dg9: String,
          dg10: String,
          dg11: String,
          dg12: String,
          dg13: String,
          dg14: String,
          dg15: String,
          sod: String,
         },
       },
 
 
      document:
       {
        // id: String,
 
        // type: String,
 
        mrz: String,
 
        // issuer:
        //  {
        //   state: String,
        //  },
 
        // date:
        //  {
        //   expire: String,
        //  },
 
        image: core.validation.rule.array({ count: 2 },
         [
          core.validation.rule.file.object(
           {
            name: core.validate('required', 'file.name.strict'),
            type: core.validate('required', 'media.type', 'media.type.image.jpeg'),
            encoding: core.validate('required', core.validation.rule.enum(['base64'])),
            content: core.validate('required', 'encoding.base64'),
           }),
         ]),
       },
 
 
      entity:
       {
        id: String, // BSN for example.
 
        // name:
        //  {
        //   personal: String,
        //   family: String,
        //  },
 
        // date:
        //  {
        //   birth: String,
        //  },
 
        // gender: String,
        // nationality: String,
 
        // image: core.validation.rule.array({ range: [0, 1] },
        //  [
        //   core.validation.rule.file.object(
        //    {
        //     name: core.validate('required', 'file.name.strict'),
        //     type: core.validate('required', 'media.type', 'media.type.image.jpeg'),
        //     encoding: core.validate('required', core.validation.rule.enum(['base64'])),
        //     content: core.validate('required', 'encoding.base64'),
        //    }),
        //  ]),
 
       },
 
 
      // Optional metadata used for the purpose of debugging and quality assurance.
      meta:
       {
 
        platform:
         {
          id: core.validate('resource.identifier'),
          version: core.validate('name.relaxed'),
         },
 
        application:
         {
          id: core.validate('resource.identifier'),
          version: core.validate('name.relaxed'),
         },
 
       },
     }, // update
 
   }, // request
 
 
  response:
   {
 
    minimal:
     {
      screenee:
       [
         {
          check:
           [
             {
              assertion: true,
              date: true,
 
              badge: true,
              description: true,
              score: true,
 
              data:
               {
                screenee: true,
               },
             },
           ],
         },
       ],
 
     },
 
   }, // response
 
 };
