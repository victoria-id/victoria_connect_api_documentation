export default
 {

  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  name: { $type: String, trim: true, maxlength: 50, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.name.relaxed] },

  technical_contact_mail: { $type: String, trim: true, maxlength: 256, lowercase: true, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.address.net.mail.relaxed] },


  sp:
   {

    entity_id: { $type: String, trim: true, maxlength: 1024, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.description] },

    // This is required for the metadata generation. We overwrite this in the post assert since Azure does not encrypt assertions.
    allow_unencrypted_assertion: { $type: Boolean, required: true, default: true },

    sign_get_request: { $type: Boolean, required: true, default: true },

    // TODO: Should be removed from the model and inferred from the calling endpoint.
    assert_endpoint_url: { $type: String, trim: true, maxlength: 1024, required: true, validate: [core.mongodb.validation.rule.required, core_mongodb_validation_rule_address_net_http_secure] },

    certificate: { $type: String, trim: true, maxlength: 8192, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.pem.certificate] },

    key:
     {
      private: { $type: String, trim: true, maxlength: 8192, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.pem.key.private] },
     },

   },


  idp:
   {
    sign_in_url: { $type: String, trim: true, maxlength: 2048, default: '', validate: [core_mongodb_validation_rule_address_net_http_secure] },

    sign_out_url: { $type: String, trim: true, maxlength: 2048, default: '', validate: [core_mongodb_validation_rule_address_net_http_secure] },

    certificate:
     [
       { $type: String, trim: true, maxlength: 8192, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.pem.certificate] },
     ],

    claim:
     {
      name_personal: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },

      name_family: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },

      name_display: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },

      gender: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },

      locale: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },

      group: { $type: String, trim: true, maxlength: 1024, default: '', validate: [core.mongodb.validation.rule.no_space, core.mongodb.validation.rule.description] },
     },

   }, // idp

  group:
   [
     {
      _id: false,

      // Group ID of the portal group.
      id: { $type: core.mongodb.schema.type.object_id, required: true, ref: 'group' },

      // Reference of the remote group.
      reference: { $type: String, trim: true, maxlength: 1024, required: true, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.description] },

      // Role to apply to the user during sign in.
      role:
       {
        id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'role' },
       },
     },
   ],

 };
