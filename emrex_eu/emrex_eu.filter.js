export default /* emrex_eu.filter.js */
 {
 
  response:
   {
 
    ewp_registry:
     {
      emp:
       [
         {
          url: true,
          name: true,
          organization: true,
          country_code: true,
          country: true,
          institution: true,
         },
       ],
     },
 
   },
 
 
  request:
   {
 
    emp_response:
     {
      elmo: core.validate('string'),
      sessionId: core.validate('required', 'resource.identifier'),
      returnCode: core.validation.rule.enum(['EMP_OK', 'EMP_ERROR', 'EMP_NO_RESULTS', 'EMP_CANCEL', 'NCP_OK', 'NCP_ERROR', 'NCP_NO_RESULTS', 'NCP_CANCEL']),
      returnMessage: core.validate('string'),
     },
 
   },
 };
