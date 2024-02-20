{
 url: { $type: String, required: true, trim: true, maxlength: 100, validate: validation_rule_address_http_secure },
 name: { $type: String, required: true, trim: true, maxlength: 100, index: true },
 organization: { $type: String, required: false, trim: true, maxlength: 100, index: true },
 country:
  {
   code: { $type: String, required: true, trim: true, maxlength: 2, index: true },
   name: { $type: String, required: true, trim: true, maxlength: 250 },
  },
 institution: { $type: String, required: false, trim: true, maxlength: 250 },
 certificate: { $type: String, required: true },

 time:
  {
   create: { $type: Date, default: Date.now, required: true },
   update: { $type: Date, default: Date.now, required: true },
  },
}
