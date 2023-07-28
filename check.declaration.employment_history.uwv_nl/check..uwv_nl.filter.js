{
 input:
  {
   update:
    {

     file: core.validation.rule.array({ count: 1 },
      [
        {
         name: core.validate('required', 'file.name.strict'),
         type: core.validate('required', 'media.type', 'media.type.application.pdf'),
         encoding: core.validate('required', core.validation.rule.enum(['base64'])),
         content: core.validate('required', 'encoding.base64'),
        },
      ]),

    },
  },

}
