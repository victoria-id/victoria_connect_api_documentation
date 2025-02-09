export default
 {
  // Check code.
  code: { $type: String, trim: true, maxlength: 100, required: true, index: true, validate: core.mongodb.validation.rule.resource.identifier },


  /*
   State, progress and timing.
  */
  state: { $type: String, enum: ['new', 'seen', 'progress', 'removed', 'evaluation', 'fail', 'success'], required: true, index: true, default: 'new' },

  progress: { $type: Number, min: 0, max: 100, required: true, default: 0 },

  time:
   {
    start: { $type: Date, default: null },
    activity: { $type: Date, default: null },
    end: { $type: Date, default: null },

    create: false,
    update: false,
   },


  /*

   Meta data (about `data`).

   Most of the times customer API integrations just want to know:

   * If data is valid,
   * From when it is valid,
   * Until when it is valid.

  */


  // Assertions about the data.
  assertion:
   {
    /*

     This section will contain many assertions about the `data` section. These assertions are different for each check, but often these assertions (property names) will end with `_present` or `_valid`.

     The `valid` assertion

    */

    // valid: Boolean?, // Aggregate conclusion about the validity of the data. This value is set dynamically and can be `null` if the validity is neither `true` or `false`.

    // violation: '',   // A plain English explanation why data is not valid (if invalid). This value is set dynamically and is always of type string.
   },


  // Relevant dates.
  date:
   [
     {
      /*

       API integrations use `date` to recognize a beginning or ending something without parsing the complex internals of the variably structured `Screenee.check[].data.shared.data`. You can still find the original dates inside `Screenee.check[].data.shared.data`, but they are simply copied to `date: []`.

       As a rule of thumb, all date codes should end with a '.start`, '.middle` or '.end' suffix in order for API integrations to recognize a beginning, ending, or middle of something.

       Dates with a relation to each other must have the same date code prefix. For example, a document issued date, and an expiration date both refer to a document's validity. Therefore we should NOT refer to them using keywords `issued` and/or `expire`, but rather refer to a document's validity. The resulting date code for this example would be `document.valid.start` and `document.valid.end`.

       Basically the format comes down to this:

       `<subject>`.`<aspect>`.`<moment>`

       Some examples:

       * document.valid.start   (document.date.issued)
       * document.valid.end     (document.date.expire)
       * entity.existence.start
       * entity.existence.end
       * entity.nationality.start
       * right_to_work.valid.start
       * right_to_work.valid.end
       * work_permit.valid.start
       * work_permit.valid.end

      */
      code: { $type: String, trim: true, lowercase: true, required: true, validator: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.object.property.path.strict] },

      /*
       The `value` of a date object can be `null`. For example, when a document explicitly has no expire date.
       It is expected that integrations will ignore these kind of dates most of the time.
      */
      value: { $type: Date },

      _id: false,
     },
   ],


  // Badges reflecting conclusions about the check / data.
  badge:
   [
     {
      code: { $type: String, trim: true, lowercase: true, required: true, validator: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.object.property.path.strict] },

      value: { $type: String, enum: ['invalid', 'inconclusive', 'valid'], required: true },

      _id: false,
     },
   ],


  // Textual conclusion about the check / data. Uses translation key codes so we can display localized descriptions.
  description:
   [
     {
      code: { $type: String, trim: true, lowercase: true, required: true, validator: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.object.property.path.strict] },

      level: { $type: String, enum: ['information', 'success', 'warning', 'error'], required: true },

      _id: false,
     },
   ],


  // Data validity score / confidence level.
  score:
   {
    current: { $type: Number, min: 0, required: true, default: 0 },
    maximum: { $type: Number, min: 0, required: true, default: 0 },
   },


  /*
   Data structure within `data` is not guaranteed.
   Please refrain from creating dependencies on its data structure as it might change without notice.
  */
  data:
   {
    // Visible only to the API.
    secret: {},

    // Visible to screenee, screener, and API.
    shared: {},

    // Visible only to the screenee.
    screenee: {},

    // Visible only to the screener.
    screener: {},
   },

 };
