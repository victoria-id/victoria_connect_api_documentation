export default
 {
  currency:
   {
    from: { $type: String, trim: true, lowercase: true, maxlength: 20, required: true },
    to: { $type: String, trim: true, lowercase: true, maxlength: 20, required: true },
   },

  exchange:
   {
    rate: { $type: Number, required: true },
   },

  // The source's own "as of" date for the rates, from the fetched payload.
  // `time.update` (used to decide whether this snapshot is fresh enough to reuse
  //  without reaching out to the external source again) is added automatically by
  //  `core.mongodb.schema()`.
  time:
   {
    source: { $type: Date, required: true },
   },
 };
