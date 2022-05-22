{
 input:
  {
   create:
    {
     hatch:
      [
        {
         // id: core.mongodb.object_id,

         title: String,
         description: String,

         file:
          {
           // Show file upload.
           upload: Boolean,
          },

         media:
          {
           // Allowed media types in 'open file dialog'. Leave empty to accept any type.
           type:
            [
             String,
            ],
          },

         camera:
          {
           // Show "take a photo".
           capture: Boolean,
          },

         image:
          {
           // Image type to convert images to.
           type: String,
           // Maximum image resolution. Hatch UI should try to resize before sending data to the hatch.
           resolution: String,
           // (JPEG) compression level.
           compression: Number,
          },

         minimum: Number,
         maximum: Number,

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
             name: String,
             type: String,
             encoding: String,
             content: String,
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
