export default /* reminder.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      reminder: core.validation.rule.array({ count: 1 },
       [
         {
          title: core.validate('required', 'name.relaxed'),
 
          check: core.validation.rule.array({ range: [1, 10000] },
           [
             {
              code: core.validate('required', 'resource.identifier'),
              first: core.validate('required', 'number.round', core.validation.rule.range([1, 100])),
              interval: core.validate('required', 'number.round', core.validation.rule.range([1, 100])),
              note:
               [
                 {
                  locale: core.validate('required', 'locale'),
                  value: core.validate('name.relaxed', 'trim'),
                 },
               ],
             },
           ]),
         },
       ]),
 
     }, // create
 
   }, // request
 
 
  response:
   {
 
    list:
     {
 
      reminder:
       [
         {
          title: true,
         },
       ],
 
     }, // list
 
 
    detail:
     {
 
      reminder:
       [
         {
 
          title: true,
 
          check:
           [
             {
              code: true,
              first: true,
              interval: true,
              note:
               [
                 {
                  locale: true,
                  value: true,
                 },
               ],
             },
           ],
 
         },
       ],
 
     }, // detail
 
   }, // response
 
 };
