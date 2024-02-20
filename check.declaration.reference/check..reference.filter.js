export default /* check..reference.filter.js */
 {
 
  request:
   {
 
    update_reference_type:
     {
      reference_type: core.validation.rule.enum(['contact', 'document', 'no_reference']),
      no_reference_explanation: core.validate('string', 'trim'),
     },
 
 
    employment_detail:
     {
      type: core.validation.rule.enum(['employee', 'owner']),
      start: core.validate('required', 'date'),
      end: core.validate('required', 'date'),
 
      job_title: core.validate('required', 'name.relaxed'),
      organization_name: core.validate('required', 'name.relaxed'),
 
      address:
       {
        physical:
         {
          street: core.validate('name.relaxed'),
          house_number: core.validate('string', 'trim'),
          postal_code: core.validate('description'),
          city: core.validate('name.relaxed'),
          country: core.validate('country.code'),
         },
       },
     },
 
 
    reference_document:
     {
      file: core.validation.rule.array({ count: 1 },
        [
          {
           name: core.validate('required', 'file.name.strict'),
           type: core.validate('required', 'media.type', 'media.type.application.pdf'),
           encoding: core.validate('required', core.validation.rule.enum(['base64'])),
           content: core.validate('required', 'encoding.base64'),
          },
       ]),
     },
 
 
    referent_detail:
     {
      name:
       {
        personal: core.validate('required', 'name.human.full'),
        family: core.validate('required', 'name.human.full'),
       },
 
      relation: core.validate('required', 'name.relaxed', 'trim'),
      job_title: core.validate('required', 'name.relaxed', 'trim'),
 
      address:
       {
        mail: core.validate('required', 'address.mail'),
        tele:
         {
          phone: core.validate('required', 'address.tele'),
         },
       },
 
      message: core.validate('required', 'description'),
     },
 
 
    referent_response:
     {
      status: core.validation.rule.enum(['success', 'declined']),
      fired: core.validate('boolean'),
      fired_reason: core.validate('description'),
      trustworthiness: core.validate('boolean'),
      trustworthiness_reason: core.validate('description'),
      decline_reason: core.validate('description'),
     },
 
   },
 
 
  response:
   {
 
    referent:
     {
      screenee:
       [
         {
          name:
           {
            display: true,
            short: true,
           },
          group:
           {
            name: true,
           },
         },
       ],
 
     },
 
 
    group_name:
     {
      group:
       [
         {
          name: true,
         },
       ],
     },
 
   },
 
 };
