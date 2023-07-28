{
 input:
  {
   create:
    {
     screening:
      [
        {
         // id: core.mongodb.object_id,

         // portal:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         // group:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         profile:
          {
           id: core.mongodb.object_id,
          },

         country: core.validate('country.code'),

         title: core.validate('name.relaxed'),
         description: core.validate('description'),

         time:
          {
           from: core.validate('date'),
           to: core.validate('date'),
          },
        },
      ],

    },

   update:
    {
     screening:
      [
        {
         // id: core.mongodb.object_id,

         // group:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         // profile:
         //  {
         //   id: core.mongodb.object_id,
         //  },

         title: core.validate('name.relaxed'),
         description: core.validate('description'),

         state: core.validation.rule.enum(['new', 'pending', 'open', 'closed', 'archived']),

         time:
          {
           from: core.validate('date'),
           to: core.validate('date'),
          },
        },
      ],

    },

  },

 output:
  {
   list:
    {
     screening:
      [
        {
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         profile:
          {
           id: true,
          },

         country: true,

         title: true,
         description: true,

         state: true,

         check:
          [
            {
             id: true,

             code: true,

             // configuration: true,
            },
          ],

         time: true,
        },
      ],

     query: true,
    },

   detail:
    {
     screening:
      [
        {
         id: true,

         // portal:
         //  {
         //   id: true,
         //  },

         group:
          {
           id: true,
          },

         profile:
          {
           id: true,
          },

         country: true,

         title: true,
         description: true,

         state: true,

         check:
          [
            {
             id: true,

             code: true,

             configuration: true,
            },
          ],

         time: true,
        },
      ],

    },

  },
}
