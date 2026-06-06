export default /* transaction.filter.js */
 {
 
  response:
   {
 
    list:
     {
      transaction:
       [
         {
          id: true,
 
          wallet:
           {
            id: true,
           },
 
 
          unique:
           {
            hash: true,
           },
 
          code: true,
          name: true,
          description: true,
 
          provisional: true,
          processed: true,
 
          credit:
           {
            amount: true,
           },
 
 
          exception:
           {
            count: true,
            description: true,
           },
 
 
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
 
          // data: true,
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      transaction:
       [
         {
          id: true,
 
          wallet:
           {
            id: true,
           },
 
 
          unique:
           {
            hash: true,
           },
 
          code: true,
          name: true,
          description: true,
 
          provisional: true,
          processed: true,
 
          credit:
           {
            amount: true,
           },
 
 
          exception:
           {
            count: true,
            description: true,
           },
 
 
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
 
          data: true,
 
          time: true,
         },
       ],
 
     },
 
   },
 };
