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
 
          tag: core.validate('alphanumeric.snake_case.mixed_case'),
 
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
 
          tag: core.validate('alphanumeric.snake_case.mixed_case'),
 
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
 
          tag: true,
 
          profile: true,
 
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
 
          tag: true,
 
          profile: true,
 
          element: core.form.element.filter.response.element,
 
          time: true,
         },
       ],
     },
 
   },
 };
