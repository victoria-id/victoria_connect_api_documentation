export default /* check..skj_nl.filter.js */
 {
 
  request:
   {
 
    update:
     {
      // Bracket notation required: `core.validation.rule.number` is a function and `Function.length` is a non-writable built-in, so the deep path `number.length.range` cannot be set by lodash `_.set`.
      registration_number: core.validate('number', core.validation.rule['number.length.range'](9, 10)),
     },
 
   },
 };
