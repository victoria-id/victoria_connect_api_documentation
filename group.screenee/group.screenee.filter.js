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
           personal: core.validate('name.human.full'),
           family: core.validate('name.human.full'),
           display: core.validate('name.human.full'),
           short: core.validate('name.human.full'),
          },
         description: core.validate('description'),

         locale: core.validate('locale'),
         gender: core.validate('gender'),

         address:
          {
           mail: core.validate('address.mail'),
           tele:
            {
             phone: core.validate('address.tele'),
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
           personal: core.validate('name.human.full'),
           family: core.validate('name.human.full'),
           display: core.validate('name.human.full'),
           short: core.validate('name.human.full'),
          },
         description: core.validate('description'),

         locale: core.validate('locale'),
         gender: core.validate('gender'),

         address:
          {
           mail: core.validate('address.mail'),
           tele:
            {
             phone: core.validate('address.tele'),
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
