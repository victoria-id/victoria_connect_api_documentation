export default /* wallet.filter.js */
 {
 
  request:
   {
 
    update:
     {
      wallet:
       [
         {
          name: core.validate('name.relaxed'),
         },
       ],
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      wallet:
       [
         {
          id: true,
 
          name: true,
 
          credit:
           {
            amount: true,
           },
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      wallet:
       [
         {
          id: true,
 
          name: true,
 
          credit:
           {
            amount: true,
           },
 
          time: true,
         },
       ],
 
     },
 
   },
 };
