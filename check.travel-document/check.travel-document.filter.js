{
 input:
  {
   create:
    {
     'check.travel-document':
      [
        {
         // id: core.mongodb.object_id,

         title: String,
        },
      ],

    },

   update:
    {
     'check.travel-document':
      [
        {
         // id: core.mongodb.object_id,

         title: String,
        },
      ],

    },

  },

 output:
  {
   list:
    {
     'check.travel-document':
      [
        {
         _id: 'id',
         id: true,

         title: true,

         time: true,
        },
      ],

     query: true,
    },

   detail:
    {
     'check.travel-document':
      [
        {
         _id: 'id',
         id: true,

         title: true,

         time: true,
        },
      ],

    },

  },
});
}
