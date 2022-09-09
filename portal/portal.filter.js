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
           'color-primary': String,
           'color-secondary': String,
           'color-tertiary': String,

           body:
            {
             'background-color': String,
             'font-color': String,
             'font-family': String,
             'font-size': String,
            },

           body_layout_center:
            {
             'background-image': String,
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
           'color-primary': String,
           'color-secondary': String,
           'color-tertiary': String,

           body:
            {
             'background-color': String,
             'font-color': String,
             'font-family': String,
             'font-size': String,
            },

           body_layout_center:
            {
             'background-image': String,
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
