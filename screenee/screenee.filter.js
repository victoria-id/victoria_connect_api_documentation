export default /* screenee.filter.js */
 {
 
  response:
   {
 
    minimal:
     {
      screenee:
       [
         {
          id: true,
 
          group:
           {
            id: true,
           },
 
          screening:
           {
            id: true,
           },
 
          type: true,
 
          name: true,
 
          locale: true,
          gender: true,
 
          address: true,
         },
       ],
     },
 
 
    list:
     {
      screenee:
       [
         {
          id: true,
          reference: true,
 
          group:
           {
            id: true,
           },
 
          screening:
           {
            id: true,
           },
 
          user:
           {
            id: true,
           },
 
          type: true,
 
          name: true,
          // description: false,
 
          locale: true,
          gender: true,
 
          address: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
 
              badge: true,
              description: true,
              score: true,
             },
           ],
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      screenee:
       [
         {
          id: true,
          reference: true,
 
          group:
           {
            id: true,
           },
 
          screening:
           {
            id: true,
           },
 
          user:
           {
            id: true,
           },
 
          type: true,
 
          name: true,
          description: true,
 
          locale: true,
          gender: true,
 
          address: true,
 
          check:
           [
             {
              id: true,
 
              code: true,
 
              state: true,
              progress: true,
 
              time: true,
 
              assertion: true,
              date: true,
 
              badge: true,
              description: true,
              score: true,
 
              data:
               {
                shared: true,
 
                screenee: true,
 
                // screener: false,
               },
             },
           ],
 
          time: true,
         },
       ],
 
     },
 
   },
 };
