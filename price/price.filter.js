export default /* price.filter.js */
 {
 
  response:
   {
 
    list:
     {
      price:
       [
         {
          id: true,
 
          portal: true,
 
          group: true,
 
          // Product code / SKU / event code.
          code: true,
 
          // Product name.
          name: true,
 
          // Product description.
          description: true,
 
          credit:
           {
            amount: true,
           },
 
          apply: true,
          per:
           [
             true,
 
             /*
              Example:
 
              apply: 'once',
 
              per:
               [
                // per..
                'screenee',
 
                // per..
                'form',
               ]
 
             */
           ],
 
 
          time: true,
         },
       ],
 
     },
 
   },
 };
