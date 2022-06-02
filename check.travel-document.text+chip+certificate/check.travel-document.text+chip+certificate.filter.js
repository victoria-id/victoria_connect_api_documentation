{
 input:
  {
   create:
    {
     chip:
      {
       lds1:
        {
         dg1: String,
         dg2: String,
         dg3: String,
         dg4: String,
         dg5: String,
         dg6: String,
         dg7: String,
         dg8: String,
         dg9: String,
         dg10: String,
         dg11: String,
         dg12: String,
         dg13: String,
         dg14: String,
         sod: String,
        },

       // authentication:
       //  {
       //   passive:
       //    {
       //     status: String,
       //    },
       //   active:
       //    {
       //     status: String,
       //    },
       //  },

      },

     document:
      {
       // id: String,

       // type: String,

       mrz: String,

       // issuer:
       //  {
       //   state: String,
       //  },

       // date:
       //  {
       //   expire: String,
       //  },

       image:
        [
          {
           name: String,
           type: String,
           encoding: String,
           content: String,
          },
        ],
      },

     entity:
      {
       id: String, // BSN for example.

       // name:
       //  {
       //   personal: String,
       //   family: String,
       //  },

       // date:
       //  {
       //   birth: String,
       //  },

       // gender: String,
       // nationality: String,

       image:
        [
          {
           name: String,
           type: String,
           encoding: String,
           content: String,
          },
        ],

      },
    },

  },
}
