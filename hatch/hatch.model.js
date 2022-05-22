{
 portal:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 user:
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'user' },
  },

 token: { type: String, required: true, default: core.cryptography.code },

 // Hatch UI title.
 title: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.relaxed },
 // Hatch UI description.
 description: { type: String, trim: true, maxlength: 100, default: '', validate: core.mongodb.validate.description },

 file:
  {
   // Show file upload.
   upload: { type: Boolean, required: true, default: core.configuration.hatch.file.upload },
  },

 media:
  {
   // Allowed media types in 'open file dialog'. Leave empty to accept any type.
   type: { type: [String], trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.media.type },
  },

 camera:
  {
   // Show "take a photo".
   capture: { type: Boolean, required: true, default: core.configuration.hatch.camera.capture },
  },

 image:
  {
   // Image type to convert images to.
   type: { type: String, trim: true, maxlength: 50, required: true, default: core.configuration.hatch.image.type, validate: core.mongodb.validate.media.type },

   // Maximum image resolution. Hatch UI should try to resize before sending data to the hatch.
   resolution: { type: String, trim: true, maxlength: 50, default: core.configuration.hatch.image.resolution, validate: core.mongodb.validate.image.resolution },

   // (JPEG) compression level.
   compression: { type: Number, min: 50, max: 100, required: true, default: core.configuration.hatch.image.compression },
  },

 minimum: { type: Number, min: 1, max: 10, required: true, default: 1 },
 maximum: { type: Number, min: 1, max: 10, required: true, default: 1 },

 data:
  [
    {
     name: { type: String, trim: true, maxlength: 50, required: true },
     type: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.media.type },
     encoding: { type: String, trim: true, maxlength: 50, required: true, default: 'base64' },
     content: { type: String, maxlength: core.configuration.hatch.file.size, required: true },
    },
  ],

 time:
  {
   update: { type: Date, required: true, default: Date.now, expires: core.configuration.hatch.session.expire },
  },

}
