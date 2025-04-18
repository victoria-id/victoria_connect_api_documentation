export default /* check..right_to_work.filter.js */
 {
 
  request:
   {
 
    update:
     {
 
      right_to_work:
       {
        type: String,
 
        date:
         {
          expire: strDate => strDate ? new Date(strDate) : undefined,
         },
 
        image:
         [
          core.validation.rule.file.object(
           {
            name: core.validate('required', 'file.name.strict'),
            type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
            encoding: core.validate('required', core.validation.rule.enum(['base64'])),
            content: core.validate('required', 'encoding.base64'),
           }),
         ],
 
       },
 
 
      work_permit:
       {
        date:
         {
          expire: strDate => strDate ? new Date(strDate) : undefined,
         },
 
        image:
         [
          core.validation.rule.file.object(
           {
            name: core.validate('required', 'file.name.strict'),
            type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
            encoding: core.validate('required', core.validation.rule.enum(['base64'])),
            content: core.validate('required', 'encoding.base64'),
           }),
         ],
 
       },
 
     },
   },
 
 };
