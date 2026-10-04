export default /* oauth2.filter.js */
 {
 
  request:
   {
 
 
    // Legacy oauth2 token endpoints require `domain` in request body instead of
    //  it being present in the URL.
    portal_load_from_body:
     {
      // Not `required`: the `refresh_token`/`authorization_code` grants resolve the portal from
      //  the token document itself, so `domain` is legitimately absent for those.
      domain: core.validate('string'),
     },
 
 
    token:
     {
 
      password:
       {
        username: core.validate('required', 'string'),
        password: core.validate('required', 'string'),
       },
 
      client_credentials:
       {
        client_id: core.validate('required', 'string'),
        client_secret: core.validate('required', 'string'),
       },
 
      refresh_token:
       {
        refresh_token: core.validate('required', 'string'),
       },
 
      authorization_code:
       {
        authorization_code: core.validate('required', 'string'),
       },
 
     },
 
   },
 
 };
