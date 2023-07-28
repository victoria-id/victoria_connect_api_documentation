{
 input:
  {
   update:
    {
     image:
      {

       card:
        {
         image: core.validation.rule.array({ count: [0, 2] }, // Either 0 (none) or 2 (front and back).
          [
            {
             name: core.validate('required', 'file.name.strict'),
             type: core.validate('required', 'media.type', 'media.type.image.photo.common'),
             encoding: core.validate('required', core.validation.rule.enum(['base64'])),
             content: core.validate('required', 'encoding.base64'),
            },
          ]),
        },

      },

     information:
      {

       card:
        {
         name: core.validate('name.human.initial'),
         organization: core.validate('name.relaxed'),
         iban: core.validate('string'),
        },

      },

    },
  },

}
