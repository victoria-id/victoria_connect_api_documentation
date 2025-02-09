export default
 {
  // Portal schema version used for migrations.
  version: { $type: Number, required: true, default: 0 },

  group: // Reference to the root group, which will be used to determine access rights for the portal.
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, ref: 'group' },
   },

  title: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed, unique: true },

  domain:
   [
     { $type: String, trim: true, maxlength: 100, unique: true, required: true, index: true, validate: core.mongodb.validation.rule.address.net.fqdn },
   ],

  api:
   {
    uri: { $type: String, trim: true, maxlength: 100, required: true, default: 'https://api.victoria-id.com/', validate: core.mongodb.validation.rule.address.net.http.secure },
   },

  style:
   {

    global:
     {

      color:
       {
        primary: { $type: String, trim: true, maxlength: 7, required: true, default: '#2196f3', validate: core.mongodb.validation.rule.html.color.hexadecimal },

        secondary: { $type: String, trim: true, maxlength: 7, required: true, default: '#2196f3', validate: core.mongodb.validation.rule.html.color.hexadecimal },

        tertiary: { $type: String, trim: true, maxlength: 7, required: true, default: '#2196f3', validate: core.mongodb.validation.rule.html.color.hexadecimal },
       },

      icon:
       [
         {
          use: { $type: String, enum: ['browser_favorite_icon', 'application_launch_icon', 'apple_touch_icon'], required: true, default: 'browser_favorite_icon' },
          type: { $type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validation.rule.media.type },
          size: { $type: String, trim: true, maxlength: 100, validate: core.mongodb.validation.rule.image.resolution.multiple },
          uri: { $type: String, trim: true, maxlength: 1024, required: true, validate: core.mongodb.validation.rule.address.net.http.path.relaxed },
         },
       ],

     }, // global

    html: // Portal + e-mail.
     {

      body:
       {
        background:
         {
          // image: { $type: String, trim: true, maxlength: 1024, validate: core.mongodb.validation.rule.address.net.http.path.relaxed },
          color: { $type: String, trim: true, maxlength: 7, required: true, default: '#eee', validate: core.mongodb.validation.rule.html.color.hexadecimal },
         },

        font:
         {
          color: { $type: String, trim: true, maxlength: 7, required: true, default: '#333', validate: core.mongodb.validation.rule.html.color.hexadecimal },

          family: { $type: String, trim: true, maxlength: 256, required: true, default: 'Arial', validate: core.mongodb.validation.rule.name.relaxed },

          size: { $type: String, trim: true, maxlength: 50, required: true, default: '12pt', validate: core.mongodb.validation.rule.html.font.size },
         },
       },

      body_layout_center:
       {
        background:
         {
          image: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.address.net.http.path.relaxed },
         },
       },

     }, // html

   }, // style

  brand:
   {
    name: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },

    logo:
     {
      uri: { $type: String, trim: true, maxlength: 1024, required: true, default: 'logo.svg', validate: core.mongodb.validation.rule.address.net.http.path.relaxed },

      caption: { $type: String, trim: true, maxlength: 10, default: '', validate: core.mongodb.validation.rule.name.relaxed },
     },
   },

  check:
   [
     { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },
   ],

 };
