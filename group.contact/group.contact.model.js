export default
 {
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  group:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
   },

  order: { $type: Number, min: 0, required: true, default: 0 },

  image:
   [
     {
      name: { $type: String, trim: true, maxlength: 50, required: true },
      type: { $type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validation.rule.media.type },
      encoding: { $type: String, trim: true, maxlength: 50, required: true, default: 'base64' },
      content: { $type: String, maxlength: core.configuration.hatch.file.size, required: true },
     },
   ],

  name:
   {
    display: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.human.full },
   },

  job_title: { $type: String, trim: true, maxlength: 100, required: false, validate: core.mongodb.validation.rule.description },

  description: { $type: String, trim: true, maxlength: 500, required: false, validate: core.mongodb.validation.rule.description },

  address:
   {
    tele:
     {
      phone: { $type: String, trim: true, maxlength: 50, validate: core.mongodb.validation.rule.address.net.tele.relaxed },
     },

    mail: { $type: String, trim: true, maxlength: 100, lowercase: true, required: false, validate: core.mongodb.validation.rule.address.net.mail.relaxed },
   },

 };
