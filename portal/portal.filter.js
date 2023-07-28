{
 input:
  {

   create:
    {
     portal:
      [
        {
         // id: core.mongodb.object_id,

         title: core.validate('name.relaxed'),
         domain: core.validation.rule.array({ range: [1, 10] },
          [
           core.validate('address.fqdn'),
          ]),

         style:
          {
           global:
            {
             color:
              {
               primary: core.validate('html.color.hexadecimal'),
               secondary: core.validate('html.color.hexadecimal'),
               tertiary: core.validate('html.color.hexadecimal'),
              },
            },

           html: // Portal + e-mail.
            {
             body:
              {
               background:
                {
                 color: core.validate('html.color.hexadecimal'),
                },

               font:
                {
                 color: core.validate('html.color.hexadecimal'),
                 family: core.validate('name.relaxed'),
                 size: core.validate('html.font.size'),
                },
              },

             body_layout_center:
              {
               background:
                {
                 image: core.validate('address.http.path.relaxed'),
                },
              },
            },
          },

         brand:
          {
           name: core.validate('name.relaxed'),
           logo:
            {
             uri: core.validate('address.http.path.relaxed'),
            },
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

         title: core.validate('name.relaxed'),
         domain: core.validation.rule.array({ range: [1, 10] },
          [
           core.validate('address.fqdn'),
          ]),

          style:
          {
           global:
            {
             color:
              {
               primary: core.validate('html.color.hexadecimal'),
               secondary: core.validate('html.color.hexadecimal'),
               tertiary: core.validate('html.color.hexadecimal'),
              },
            },

           html: // Portal + e-mail.
            {
             body:
              {
               background:
                {
                 color: core.validate('html.color.hexadecimal'),
                },

               font:
                {
                 color: core.validate('html.color.hexadecimal'),
                 family: core.validate('name.relaxed'),
                 size: core.validate('html.font.size'),
                },
              },

             body_layout_center:
              {
               background:
                {
                 image: core.validate('address.http.path.relaxed'),
                },
              },
            },
          },

         brand:
          {
           name: core.validate('name.relaxed'),
           logo:
            {
             uri: core.validate('address.http.path.relaxed'),
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
