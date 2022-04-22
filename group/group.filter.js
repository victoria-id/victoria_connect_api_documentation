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
         id: true,

         name: true,
         access:
          [
            {
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
