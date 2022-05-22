{
 input:
  {
   create:
    {
     screening:
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

         profile:
          {
           id: core.mongodb.object_id,
          },

         country: String,

         title: String,
         description: String,

         time:
          {
           from: dtValue => new Date(dtValue),
           to: dtValue => new Date(dtValue),
          },
        },
      ],

    },

   update:
    {
     screening:
      [
        {
         // id: core.mongodb.object_id,

         // group:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         // profile:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         title: String,
         description: String,

         state: String,

         time:
          {
           from: dtValue => new Date(dtValue),
           to: dtValue => new Date(dtValue),
          },
        },
      ],

    },

  },

 output:
  {
   list:
    {
     screening:
      [
        {
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         profile:
          {
           id: true,
          },

         country: true,

         title: true,
         description: true,

         state: true,

         check:
          [
            {
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
     screening:
      [
        {
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         profile:
          {
           id: true,
          },

         country: true,

         title: true,
         description: true,

         state: true,

         check:
          [
            {
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
