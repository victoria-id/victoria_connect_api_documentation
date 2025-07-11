export default /* check..chamber_of_commerce.placeholder.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      base:
       {
        coc_number: core.validate('required', 'resource.identifier'),
 
        name: core.validate('required', 'name.relaxed'),
 
        trade_name: core.validation.rule.array({ range: [0, 10] },
         [
          core.validate('name.relaxed'),
         ]),
 
        website: core.validation.rule.array({ range: [0, 10] },
         [
          core.validate('address.net.http.insecure'),
         ]),
       },
 
      branch:
       {
        name: core.validate('name.relaxed'),
 
        trade_name: core.validation.rule.array({ range: [0, 10] },
         [
          core.validate('name.relaxed'),
         ]),
 
        website: core.validation.rule.array({ range: [0, 10] },
         [
          core.validate('address.net.http.insecure'),
         ]),
       },
 
     },
 
   },
 };
