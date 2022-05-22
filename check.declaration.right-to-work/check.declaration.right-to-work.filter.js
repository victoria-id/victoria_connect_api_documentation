{
 input:
  {
   update:
    {
     right_to_work:
      {
       type: String,

       date:
        {
         expire: strDate => strDate ? new Date(strDate) : undefined,
        },

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

     work_permit:
      {
       date:
        {
         expire: strDate => strDate ? new Date(strDate) : undefined,
        },

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

});
}
