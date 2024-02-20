export default /* mail.filter.js */
 {
 
  response:
   {
 
    detail:
     {
      mail:
       [
         {
          // The default is `false`. Only properties with a truthy value will be used.
          from: true,
          to: true,
          cc: true,
          // bcc: false, // Let's not expose BCC (as it suppose to be blind).
          subject: true,
          html: true,
          text: true,
 
          locale: true,
          template: true,
          header: true,
          footer: true,
         },
       ],
     },
 
   },
 
 };
