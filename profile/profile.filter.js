{
 input:
  {
   create:
    {
     profile:
      [
        {
         // id: core.mongodb.object_id,

         // portal:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         // group:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         title: String,
         description: String,

         check:
          [
            {
             code: String,
             configuration: Object,
            },
          ],

        },
      ],

    },

   update:
    {
     profile:
      [
        {
         // id: core.mongodb.object_id,

         // group:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         title: String,
         description: String,

         check:
          [
            {
             code: String,
             configuration: Object,
            },
          ],

        },
      ],

    },

  },

 output:
  {
   list:
    {
     profile:
      [
        {
         _id: 'id',
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         title: true,
         description: true,

         check:
          [
            {
             _id: 'id',
             id: true,

             code: true,

             // configuration: true,
            },
          ],

         time: true,
        },
      ],

     query: true,
    },

   detail:
    {
     profile:
      [
        {
         _id: 'id',
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         title: true,
         description: true,

         check:
          [
            {
             _id: 'id',
             id: true,

             code: true,

             configuration: true,
            },
          ],

         time: true,
        },
      ],

    },

  },
}
