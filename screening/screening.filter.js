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

         profile:
          {
           id: true,
          },

         title: true,
         description: true,

         state: true,

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
     screening:
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

         profile:
          {
           id: true,
          },

         title: true,
         description: true,

         state: true,

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
