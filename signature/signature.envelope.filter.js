export default /* signature.envelope.filter.js */
 {
 
  response:
   {
 
    list:
     {
      envelope:
       [
         {
          id: true,
 
          name: true,
          state: true,
 
          action: true,
 
          time:
           {
            expire: true,
           },
 
          signee:
           [
             {
              id: true,
              user: true,
              screenee: true,
              role: true,
              state: true,
              name:
               {
                display: true,
               },
             },
           ],
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      envelope:
       [
         {
          // source: true,
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
 
                order: true,
 
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
                  name: true,
                 },
 
                user:
                 {
                  id: true,
                  name: true,
                 },
 
                file: true,
               },
             ],
           },
         },
       ],
     },
 
   },
 };
