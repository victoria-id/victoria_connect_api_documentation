export default /* saml2.filter.js */
 {
 
  request:
   {
 
    create:
     {
 
      saml2:
       [
         {
          // id: core.mongodb.object_id,
 
          name: core.validate('required', 'name.relaxed'),
 
          technical_contact_mail: core.validate('required', 'address.net.mail'),
         },
       ],
 
     }, // create
 
 
    update:
     {
      saml2:
       [
         {
          // id: core.mongodb.object_id,
 
          name: core.validate('required', 'name.relaxed'),
 
          technical_contact_mail: core.validate('required', 'address.net.mail'),
 
          // We don't allow for update of the SP at this moment, we can add a function to rebuild / update the private key later.
          // sp: false,
 
          sp:
           {
            sign_get_request: core.validate('required', 'boolean'),
 
            allow_unencrypted_assertion: core.validate('required', 'boolean'),
           },
 
 
          idp:
           {
            sign_in_url: core.validate('required', 'address.net.http.secure'),
            sign_out_url: core.validate('required', 'address.net.http.secure'),
 
            certificate: core.validation.rule.array({ range: [1, 2] },
             [
              core.validate('required', 'pem.certificate'),
             ]),
 
            claim:
             {
              name_personal: core.validate('required', 'no_space', 'description'),
              name_family: core.validate('required', 'no_space', 'description'),
              name_display: core.validate('no_space', 'description'),
 
              gender: core.validate('no_space', 'description'),
              locale: core.validate('no_space', 'description'),
 
              group: core.validate('required', 'no_space', 'description'),
             },
           }, // idp
 
          group: core.validation.rule.array({ range: [1, 10000] },
           [
             {
              id: core.mongodb.object_id,
 
              reference: core.validate('required', 'description'),
 
              permission:
               [
                core.validate('required', 'permission'),
               ],
             },
           ]), // group
 
         },
       ],
 
     }, // update
 
   }, // request
 
 
  response:
   {
 
    list:
     {
 
      saml2:
       [
         {
          id: true,
 
          name: true,
 
          technical_contact_mail: true,
         },
       ],
 
     }, // list
 
 
    detail:
     {
 
      saml2:
       [
         {
          id: true,
 
          name: true,
 
          technical_contact_mail: true,
 
          sp:
           {
            entity_id: true,
 
            sign_get_request: true,
            allow_unencrypted_assertion: true,
 
            assert_endpoint_url: true,
 
            certificate: true,
           },
 
          idp: true,
 
          group: true,
         },
       ],
 
     }, // detail
 
   }, // response
 
 };
