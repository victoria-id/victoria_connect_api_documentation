{
 // length:
 //  {
 //   short: 50,   // Names. Compound names are 2 x short = 100.
 //   medium: 255, //
 //   long: 1024,  // Descriptions, URIs, etc.
 //  },

 name:
  {
   human: validation_rule_create('name.human', '^(?:(?![\\d_])[' + core.regex.unicode + '\\w -])*$', 'u', 'Personal names may only contain alphanumeric characters, spaces and dashes.'),
   relaxed: validation_rule_create('name.relaxed', '^(?:(?![_])[' + core.regex.unicode + '\\w !@#$%&()+\',./?-])*$', 'u', 'Names may only contain alphanumeric characters, spaces and dashes.'),
  },

 description: validation_rule_create('description', '^[' + core.regex.unicode + '\\w\\s~!@#%$&*()_=+\';:,./?-]*$', 'u', 'May only contain valid characters.'),

 locale: validation_rule_create('locale', '^[a-z]{2,3}(?:-[a-z]{2,3})?$', 'i', 'Locale must consist of two or three letters, optionally followed by a dash and another two or three letters.'),

 address:
  {
   mail: validation_rule_create('address.mail', '^[\\w+.-]+@[\\w.-]+$', '', 'Must be a valid email address.'),
   uri: validation_rule_create('address.uri', '^[\\w~!@#%$&*()_=+\';:,./?-]*$', '', 'Must be a valid URI.'),
   tele: validation_rule_create('address.tele', '^\\+?[0-9\\s/.-]*$', '', 'Must be a valid telephone number.'),
   fqdn: validation_rule_create('address.fqdn', '^[\\w\\d.-]*$', '', 'Must be a fully qualified domain name.'),
  },

 css:
  {
   color: validation_rule_create('css.color', '^#[0-9a-f]{6}$', 'i', 'May only contain a valid hexadecimal HTML color expression (e.g. `#aabbcc`).'),

   font:
    {
     size: validation_rule_create('css.font.size', '^[\\d.]+\\w*$', '', 'May only contain a valid HTML font size expression.'),
    },
  },

 file:
  {
   name: validation_rule_create('file.name', '^[\\w.-]+/[\\w.+-]+$', 'i', 'Must contain a valid file name.'),

   // extension:

   get type()
    {
     return core.mongodb.validate.media.type;
    },
  },

 media:
  {
   type: validation_rule_create('media.type', '^[\\w.-]+/[\\w.+-]+$', 'i', 'Must fit the media type format.'),
  },

 image:
  {
   resolution: validation_rule_create('image.resolution', '^[0-9]+x[0-9]+$', 'i', 'Must match `<n>x<n>`; e.g. \'1920x1080\'.'),
   resolution_multiple: validation_rule_create('image.resolution', '^[0-9]+x[0-9]+(\\s+[0-9]+x[0-9]+)*$', 'i', 'Must match `<n>x<n>[ <n>x<n>]`; e.g. \'1920x1080\' or \'1280x720 1920x1080\'.'),
  },

 tag: validation_rule_create('tag', '^[\\w-]*$', 'i', 'May only contain alphanumeric characters, dashes and underscore.'),

 code:
  {
   alphanumeric: validation_rule_create('code.alphanumeric', '^[a-z0-9]*$', 'i', 'May only contain alphanumeric characters.'),
  },

 resource:
  {
   identifier: validation_rule_create('resource.identifier', '^[\\w/.+-]*$', 'i', 'May only contain alphanumeric characters, dots, dashes, a plus sign, underscore, and forward slashes.'),
  },

 event:
  {
   name: validation_rule_create('event.name', '^[\\w.-]*$', 'i', 'May only contain alphanumeric characters, dots, dashes and underscore.'),
  },

 country:
  {
   code:
    {
     alpha_2: validation_rule_create('country.code.alpha.2', '^[A-Z]{2}$', '', 'Must be a 2 letter ISO-3166 country code.'),
     alpha_3: validation_rule_create('country.code.alpha.3', '^[A-Z]{3}$', 'i', 'Must be a 3 letter ISO-3166 country code.'),
    },
  },

}
