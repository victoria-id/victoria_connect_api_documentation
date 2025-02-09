export default /* sso.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      sso:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('required', 'name.relaxed'),
 
          uri: core.validate('required', 'address.net.http.secure'),
         },
       ],
 
     }, // create
 
 
    update:
     {
      sso:
       [
         {
          // id: core.mongodb.type.object_id,
 
          name: core.validate('required', 'name.relaxed'),
 
          uri: core.validate('required', 'address.net.http.secure'),
         },
       ],
 
     }, // update
 
   }, // request
 
 
  response:
   {
 
    list:
     {
 
      sso:
       [
         {
          id: true,
 
          type: true,
 
          name: true,
 
          uri: true,
         },
       ],
 
     }, // list
 
 
    detail:
     {
 
      sso:
       [
         {
          id: true,
 
          type: true,
 
          name: true,
 
          uri: true,
         },
       ],
 
     }, // detail
 
 
   }, // response
 
 };
