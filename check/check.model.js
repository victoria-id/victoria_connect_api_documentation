{
 code: { $type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validation.rule.resource.identifier },
 path: { $type: String, trim: true, maxlength: 255, required: true, unique: true, validate: core.mongodb.validation.rule.address.http.path.strict },

 name: { $type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validation.rule.name.relaxed },

 description: { $type: String, trim: true, maxlength: 1024, required: true, default: '', validate: core.mongodb.validation.rule.description },

 state: { $type: String, enum: ['unknown', 'fail', 'ready'], required: true, default: 'unknown' },
 message: { $type: String, trim: true, maxlength: 1024, default: 'Service temporarily unavailable.', validate: core.mongodb.validation.rule.description },
}
