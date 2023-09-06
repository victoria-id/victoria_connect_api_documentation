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
           personal: core.validate('name.relaxed'),
           family: core.validate('name.relaxed'),
           display: core.validate('name.relaxed'),
           short: core.validate('name.relaxed'),
          },

         locale: core.validate('locale'),
         gender: core.validate('gender'),

         address:
          {
           mail: core.validation.rule.array({ range: [1, 5] },
            [
              {
               uri: core.validate('address.mail'),
               primary: core.validate('boolean'),
              },
            ]),

           net:
            [
              {
               type: core.validation.rule.enum(['http', 'tel']),
               uri: core.validate('address.uri'),
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
           personal: core.validate('name.relaxed'),
           family: core.validate('name.relaxed'),
           display: core.validate('name.relaxed'),
           short: core.validate('name.relaxed'),
          },

          locale: core.validate('locale'),
          gender: core.validate('gender'),

          address:
           {
            mail: core.validation.rule.array({ range: [1, 5] },
             [
               {
                uri: core.validate('address.mail'),
                primary: core.validate('boolean'),
               },
             ]),

            net:
             [
               {
                type: core.validation.rule.enum(['http', 'tel']),
                uri: core.validate('address.uri'),
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
           personal: core.validate('name.relaxed'),
           family: core.validate('name.relaxed'),
           display: core.validate('name.relaxed'),
           short: core.validate('name.relaxed'),
          },

         locale: core.validate('locale'),
         gender: core.validate('gender'),

         address:
          {
           mail: core.validation.rule.array({ required: false, range: [1, 5] },
            [
              {
               uri: core.validate('address.mail'),
               primary: core.validate('boolean'),
              },
            ]),

           net:
            [
              {
               type: core.validation.rule.enum(['http', 'tel']),
               uri: core.validate('address.uri'),
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
