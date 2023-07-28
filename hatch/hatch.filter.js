{
 input:
  {
   create:
    {
     hatch:
      [
        {
         // id: core.mongodb.object_id,

         title: core.validate('required', 'name.relaxed'),
         description: core.validate('description'),

         file:
          {
           // Show file upload.
           upload: core.validate('boolean'),
          },

         media:
          {
           // Allowed media types in 'open file dialog'. Leave empty to accept any type.
           type:
            [
             core.validate('media.type', 'media.type.image.raster.common'),
            ],
          },

         camera:
          {
           // Show "take a photo".
           capture: core.validate('boolean'),
          },

         image:
          {
           // Image type to convert images to.
           type: core.validate('media.type', 'media.type.image.raster.common'),
           // Maximum image resolution. Hatch UI should try to resize before sending data to the hatch.
           resolution: core.validate('image.resolution.single'),
           // (JPEG) compression level.
           compression: core.validate('number.round', core.validation.rule.range([80, 100])),
          },

         minimum: core.validate('number.round', core.validation.rule.range([1, 10])),
         maximum: core.validate('number.round', core.validation.rule.range([1, 10])),

        },
      ],

    },

   update:
    {
     hatch:
      [
        {
         // id: core.mongodb.object_id,

         data:
          [
            {
             name: core.validate('required', 'file.name.strict'),
             type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
             encoding: core.validate('required', core.validation.rule.enum(['base64'])),
             content: core.validate('required', 'encoding.base64'),
            },
          ],

        },
      ],

    },

  },

 output:
  {
   detail:
    {
     hatch:
      [
        {
         id: true,

         token: true,

         title: true,
         description: true,

         file:
          {
           upload: true,
          },

         media:
          {
           type: true,
          },

         camera:
          {
           capture: true,
          },

         image:
          {
           type: true,
           resolution: true,
           compression: true,
          },

         minimum: true,
         maximum: true,

         // data: false,

         time: true,
        },
      ],

    },

   data:
    {
     hatch:
      [
        {
         id: true,

         data:
          [
            {
             id: true,

             name: true,
             type: true,
             encoding: true,
             content: true,
            },
          ],

         time: true,
        },
      ],

    },

  },
}
