{
 input:
  {

   create:
    {
     portal:
      [
        {
         // id: core.mongodb.object_id,

         title: String,
         domain:
          [
           String,
          ],

         style:
          {
           global:
            {
             color:
              {
               primary: String,
               secondary: String,
               tertiary: String,
              },
            },

           html: // Portal + e-mail.
            {
             body:
              {
               background:
                {
                 color: String,
                },

               font:
                {
                 color: String,
                 family: String,
                 size: String,
                },
              },

             body_layout_center:
              {
               background:
                {
                 image: String,
                },
              },
            },
          },

         brand:
          {
           name: String,
           logo: String,
          },

        },
      ],

    },


   update:
    {
     portal:
      [
        {
         // id: core.mongodb.object_id,

         title: String,
         domain:
          [
           String,
          ],

         style:
          {
           global:
            {
             color:
              {
               primary: String,
               secondary: String,
               tertiary: String,
              },
            },

           html: // Portal + e-mail.
            {
             body:
              {
               background:
                {
                 color: String,
                },

               font:
                {
                 color: String,
                 family: String,
                 size: String,
                },
              },

             body_layout_center:
              {
               background:
                {
                 image: String,
                },
              },
            },
          },

         brand:
          {
           name: String,
           logo: String,
          },

        },
      ],

    },

  },

 output:
  {
   list:
    {
     portal:
      [
        {
         id: true,

         title: true,
         domain: true,

         group: true,

         // style: true,
         brand: true,

         time: true,
        },
      ],

    },


   minimal:
    {
     portal:
      [
        {
         id: true,

         title: true,

         domain: true,
         api: true,

         style: true,
         brand: true,

         // check: true,

         // time: true,
        },
      ],

    },


   detail:
    {
     portal:
      [
        {
         id: true,

         title: true,

         domain: true,
         api: true,

         group: true,

         style: true,
         brand: true,

         check: true,

         time: true,
        },
      ],

    },


   mail:
    {
     portal:
      [
        {
         id: true,

         title: true,

         domain: true,

         uri: true,

         // group: true,

         style: true,
         brand: true,

         time: true,
        },
      ],

    },


  },
}
