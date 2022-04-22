{
 code: { type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validate.resource.identifier },

 name: { type: String, trim: true, maxlength: 100, required: true, unique: true, validate: core.mongodb.validate.name.relaxed },

 description: { type: String, trim: true, maxlength: 1024, required: true, default: '', validate: core.mongodb.validate.description },

 state: { type: String, enum: ['unknown', 'fail', 'ready'], required: true, default: 'unknown' },
 message: { type: String, trim: true, maxlength: 1024, default: 'Service temporarily unavailable.', validate: core.mongodb.validate.description },

 module: { type: String, trim: true, maxlength: 255, required: true, validate: core.mongodb.validate.resource.identifier },
 uri: { type: String, trim: true, maxlength: 255, required: true, unique: true, validate: core.mongodb.validate.address.uri },
}
