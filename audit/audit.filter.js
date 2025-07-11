export default /* audit.filter.js */
 {
 
  response:
   {
 
    list:
     {
      audit:
       [
         {
          id: true,
 
          // The requesting user.
          request:
           {
            user:
             {
              id: true,
 
              name:
               {
                display: true,
               },
             },
           },
 
          // The (subjected) user being created, updated, deleted, etc.
          user:
           {
            id: true,
 
            name:
             {
              display: true,
             },
           },
 
          group:
           {
            id: true,
 
            name: true,
           },
 
          role:
           {
            id: true,
 
            name: true,
           },
 
          profile:
           {
            id: true,
 
            title: true,
           },
 
          reminder:
           {
            id: true,
 
            title: true,
           },
 
          form:
           {
            id: true,
 
            name: true,
           },
 
          document:
           {
            id: true,
 
            name: true,
           },
 
          screening:
           {
            id: true,
 
            title: true,
           },
 
          screenee:
           {
            id: true,
 
            name:
             {
              display: true,
             },
           },
 
          signature: true,
          sso: true,
          saml2: true,
 
          code: true,
 
          // data: true,
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      audit:
       [
         {
          id: true,
 
          // The requesting user.
          request:
           {
            user:
             {
              id: true,
 
              name:
               {
                display: true,
               },
             },
           },
 
          // The (subjected) user being created, updated, deleted, etc.
          user:
           {
            id: true,
 
            name:
             {
              display: true,
             },
           },
 
          group:
           {
            id: true,
 
            name: true,
           },
 
          role:
           {
            id: true,
 
            name: true,
           },
 
          profile:
           {
            id: true,
 
            title: true,
           },
 
          reminder:
           {
            id: true,
 
            title: true,
           },
 
          form:
           {
            id: true,
 
            name: true,
           },
 
          document:
           {
            id: true,
 
            name: true,
           },
 
          screening:
           {
            id: true,
 
            title: true,
           },
 
          screenee:
           {
            id: true,
 
            name:
             {
              display: true,
             },
           },
 
          signature: true,
          sso: true,
          saml2: true,
 
          code: true,
 
          data: true,
 
          time: true,
         },
       ],
 
     },
 
   },
 };
