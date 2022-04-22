{
 input:
  {
   create:
    {
     group:
      [
        {
         // id: core.mongodb.object_id,

         name: String,

         access:
          [
            {
             user:
              {
               id: core.mongodb.object_id,
              },

             permission:
              [
               String,
              ],
            },
          ],

         group:
          {
           id: core.mongodb.object_id,
          },

        },
      ],

    },

   update:
    {
     group:
      [
        {
         // id: core.mongodb.object_id,

         name: String,

         access:
          [
            {
             user:
              {
               id: core.mongodb.object_id,
              },

             permission:
              [
               String,
              ],
            },
          ],

         group:
          {
           id: core.mongodb.object_id,
          },
        },
      ],

    },

  },

 output:
  {
   list:
    {
     group:
      [
        {
         _id: 'id',
         id: true,

         name: true,

         time: true,
        },
      ],

     query: true,
    },

   detail:
    {
     group:
      [
        {
         _id: 'id',
         id: true,

         name: true,
         access:
          [
            {
             _id: 'id',
             id: true,

             user: true,
             permission: true,
            },
          ],

         time: true,
        },
      ],

    },

  },
}
