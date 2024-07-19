{

 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 name: { $type: String, trim: true, maxlength: 50, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.name.relaxed] },

 uri: { $type: String, trim: true, maxlength: 1024, required: true, validate: [core.mongodb.validation.rule.required, core_mongodb_validation_rule_address_net_http_secure] },

}
