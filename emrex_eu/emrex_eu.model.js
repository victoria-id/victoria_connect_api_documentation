export default
 {
  url: { $type: String, required: true, trim: true, maxlength: 100, validate: core_mongodb_validation_rule_address_net_http_secure },
  name: { $type: String, required: true, trim: true, maxlength: 100, index: true },
  organization: { $type: String, trim: true, maxlength: 100, index: true },
  country:
   {
    code: { $type: String, required: true, trim: true, maxlength: 2, index: true },
    name: { $type: String, required: true, trim: true, maxlength: 256 },
   },
  institution: { $type: String, trim: true, maxlength: 256 },
  certificate: { $type: String, required: true },

  time:
   {
    create: { $type: Date, default: Date.now, required: true },
    update: { $type: Date, default: Date.now, required: true },
   },
 };
