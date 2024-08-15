export default /* check..finish.filter.js */
 {
 
  request:
   {
 
    update:
     {
      data:
       {
        behavior: core.validate('required', core.validation.rule.enum(['return_overview', 'return_url_profile', 'return_url_custom'])),
        url: core.validate('required', 'address.net.http.secure'),
       },
     },
 
   },
 
 };
