{
 input:
  {
   create:
    {
     screenee:
      [
        {
         // id: core.mongodb.object_id,

         type: String,

         name:
          {
           personal: String,
           family: String,
          },
         description: String,

         locale: String,
         gender: String,

         address:
          {
           mail: String,
           tele:
            {
             phone: String,
            },
          },

        },
      ],

    },

   update:
    {
     screenee:
      [
        {
         // id: core.mongodb.object_id,

         type: String,

         name:
          {
           personal: String,
           family: String,
          },
         description: String,

         locale: String,
         gender: String,

         address:
          {
           mail: String,
           tele:
            {
             phone: String,
            },
          },
        },
      ],

    },

  },

 output:
  {
   list:
    {
     screenee:
      [
        {
         id: true,

         group:
          {
           id: true,
          },

         screening:
          {
           id: true,
          },

         user:
          {
           id: true,
          },

         type: true,

         name: true,
         // description: false,

         locale: true,
         gender: true,

         address: true,

         check:
          [
            {
             code: true,

             state: true,
             progress: true,

             // data:
             //  {
             //   shared: true,

             //   // screenee: false,

             //   screener: true,
             //  },
            },
          ],

         time: true,
        },
      ],

     query: true,
    },

   detail:
    {
     screenee:
      [
        {
         id: true,

         group:
          {
           id: true,
          },

         screening:
          {
           id: true,
          },

         user:
          {
           id: true,
          },

         type: true,

         name: true,
         description: true,

         locale: true,
         gender: true,

         address: true,

         check:
          [
            {
             code: true,

             state: true,
             progress: true,

             data:
              {
               shared: true,

               // screenee: false,

               screener: true,
              },
            },
          ],

         time: true,
        },
      ],

    },

  },
}
