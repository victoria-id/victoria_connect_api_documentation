export default /* check..finish.filter.js */
 {
 
  request:
   {
 
    update:
     {
      data:
       {
        behavior: core.validate('required', core.validation.rule.enum(['return_overview', 'return_url_profile', 'return_url_custom'])),
        url: core.validate('address.net.http.secure'),
       },
     },
 
   },
 
 
  response:
   {
    release:
     {
      data:
       [
        {
         url: true,
         behavior: true,
        },
       ],
     },
   },
 
 };
