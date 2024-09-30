export default /* check..form.filter.js */
 {
 
  request:
   {
 
    update:
     {
      form:
       {
        /**
 
        data:
         {
          q1: 'Answer', // Validation rule: `form.element.value`.
          q2: 'Answer', // Validation rule: `form.element.value`.
          ...
         },
 
        */
        data: objForm_Data =>
         {
          // For each answer given..
          for (const strForm_Element_ID in objForm_Data)
           {
            // Validate its value.
            objForm_Data[strForm_Element_ID] = core.validation.rule.form.element.value(objForm_Data[strForm_Element_ID]);
           }
 
          // Return validated form data.
          return objForm_Data;
         },
       },
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
          state: true,
 
          name: true,
 
          tag: true,
         },
       ],
     },
 
 
    detail:
     {
      form:
       [
         {
          id: true,
          state: true,
 
          name: true,
 
          tag: true,
 
          element: core.form.element.filter.response.element,
         },
       ],
     },
 
   },
 };
