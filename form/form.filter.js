export default /* form.filter.js */
 {
 
  request:
   {
 
    create:
     {
      form:
       [
         {
          name: core.validate('name.relaxed'),
 
          element: core.form.element.filter.request.element,
         },
       ],
     },
 
 
    update:
     {
      form:
       [
         {
          name: core.validate('name.relaxed'),
 
          element: core.form.element.filter.request.element,
         },
       ],
     },
 
   },
 
 
  response:
   {
 
    list:
     {
      form:
       [
         {
          id: true,
 
          name: true,
 
          time: true,
         },
       ],
 
      query: true,
     },
 
 
    detail:
     {
      form:
       [
         {
          id: true,
 
          name: true,
 
          element: core.form.element.filter.response.element,
 
          time: true,
         },
       ],
     },
 
   },
 };
