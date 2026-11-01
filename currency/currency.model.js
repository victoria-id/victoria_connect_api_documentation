export default
 {
  code: { $type: String, trim: true, lowercase: true, maxlength: 20, required: true, unique: true, index: true },

  // Not `required`: a handful of codes returned by the source (mostly crypto/commodity
  //  tickers) have no name.
  name: { $type: String, trim: true, maxlength: 100 },
 };
