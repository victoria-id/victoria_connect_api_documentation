{
 group: // Reference to the root group, which will also be used to determine access rights.
  {
   id: { type: core.mongodb.schema.type.object_id, required: true, ref: 'group' },
  },

 title: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.relaxed, unique: true },

 domain:
  [
    { type: String, trim: true, maxlength: 100, unique: true, required: true, index: true, validate: core.mongodb.validate.address.fqdn },
  ],

 uri: { type: String, get()
  {
   return core.configuration.server.web.uri.base.replace('{portal.domain}', this.domain[0]) + ''; // The addition of ` + ''` prevents detection of `)`+`;` by `./script/schema.export.js`.
  } },

 style:
  {
   // :root

   icon:
    [
      {
       use: { type: String, enum: ['browser-favorite-icon', 'application-launch-icon', 'apple-touch-icon'], required: true, default: 'browser-favorite-icon' },
       type: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.media.type },
       size: { type: String, trim: true, maxlength: 100, validate: core.mongodb.validate.image.resolution_multiple },
       uri: { type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validate.address.uri },
      },
    ],

   'color-primary': { type: String, trim: true, maxlength: 50, required: true, default: '#2196f3', validate: core.mongodb.validate.css.color },
   // 'color-secondary': { type: String, trim: true, maxlength: 50, required: true, default: '#2196f3', validate: core.mongodb.validate.css.color },

   body:
    {
     // 'background-image': { type: String, trim: true, maxlength: 1024, validate: core.mongodb.validate.address.uri },
     'background-color': { type: String, trim: true, maxlength: 50, required: true, default: '#eee', validate: core.mongodb.validate.css.color },
     'font-color': { type: String, trim: true, maxlength: 50, required: true, default: '#333', validate: core.mongodb.validate.css.color },
     'font-family': { type: String, trim: true, maxlength: 255, required: true, default: 'Arial', validate: core.mongodb.validate.name.relaxed },
     'font-size': { type: String, trim: true, maxlength: 50, required: true, default: '12pt', validate: core.mongodb.validate.css.font.size },
    },

   body_layout_center:
    {
     'background-image': { type: String, trim: true, maxlength: 1024, validate: core.mongodb.validate.address.uri },
    },

  },

 brand:
  {
   name: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.relaxed },
   logo: { type: String, trim: true, maxlength: 1024, required: true, default: 'logo.png', validate: core.mongodb.validate.address.uri },
  },

 check:
  [
    { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.resource.identifier },
  ],

}
