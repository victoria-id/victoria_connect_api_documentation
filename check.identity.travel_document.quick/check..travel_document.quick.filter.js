export default /* check..travel_document.quick.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      document:
       {
        image:
         [
           {
            name: core.validate('required', 'file.name.strict'),
            type: core.validate('required', 'media.type', 'media.type.image.jpeg'),
            encoding: core.validate('required', core.validation.rule.enum(['base64'])),
            content: core.validate('required', 'encoding.base64'),
           },
         ],
       },
 
     }, // create
 
   }, // input
 
 };
