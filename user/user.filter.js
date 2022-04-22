{
 input:
  {
   register:
    {
     user:
      [
        {
         // id: core.mongodb.object_id,

         password: String,

         name:
          {
           personal: String,
           family: String,
           display: String,
          },

         locale: String,
         gender: String,

         address:
          {
           mail:
            [
              {
               uri: String,
               primary: Boolean.parse,
              },
            ],

           net:
            [
              {
               type: String,
               uri: String, // core.validate(core.validate.mongodb(core.mongodb.validate.address.uri)),
              },
            ],
          },
        },
      ],

    },


   create:
    {
     user:
      [
        {
         // id: core.mongodb.object_id,

         name:
          {
           personal: String,
           family: String,
           display: String,
          },

         locale: String,
         gender: String,

         address:
          {
           mail:
            [
              {
               uri: String,
               primary: Boolean.parse,
              },
            ],

           net:
            [
              {
               type: String,
               uri: String, // core.validate(core.validate.mongodb(core.mongodb.validate.address.uri)),
              },
            ],
          },
        },
      ],

    },


   update:
    {
     user:
      [
        {
         // id: core.mongodb.object_id,

         name:
          {
           personal: String,
           family: String,
           display: String,
          },

         locale: String,
         gender: String,

         address:
          {
           mail:
            [
              {
               uri: String,
               primary: Boolean.parse,
              },
            ],

           net:
            [
              {
               type: String,
               uri: String, // core.validate(core.validate.mongodb(core.mongodb.validate.address.uri)),
              },
            ],
          },
        },
      ],

    },

   password:
    {
     user:
      [
        {
         // id: core.mongodb.object_id,

         password:
          {
           current: String,
           new: String,
          },

         reset:
          {
           token: String,
          },

        },
      ],

    },

  },

 output:
  {
   minimal:
    {
     user:
      [
        {
         _id: 'id',
         id: true,

         name: true,

         // locale: true,
         // gender: true,
        },
      ],

    },

   list:
    {
     user:
      [
        {
         _id: 'id',
         id: true,

         name: true,

         locale: true,
         gender: true,
        },
      ],

    },

   detail:
    {
     user:
      [
        {
         _id: 'id',
         id: true,

         name: true,

         locale: true,
         gender: true,

         address:
          {
           mail:
            [
              {
               uri: true,

               primary: true,
               confirmed: true,
              },
            ],

           net: true,
          },

         time: true,
        },
      ],

    },

  },
}
