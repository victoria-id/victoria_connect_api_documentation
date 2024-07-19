{
 portal:
  {
   id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
  },

 name: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.name.relaxed },

 access:
  [
    {
     _id: false,

     user:
      {
       id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'user' },
      },

     permission:
      [
        /*
         portal.full         Portal admin (special privileges)
         portal.read         View portal
         portal.write        Modify portal

         group.full          Group admin
         group.create        Create group
         group.read          View group
         group.write         Modify group
         group.delete        Delete group

         profile.full        Full access to screening profiles
         profile.create      Create screening profile
         profile.read        View screening profile
         profile.write       Modify screening profile
         profile.delete      Delete screening profile

         screening.full      Full access to screenings
         screening.create    Create screening
         screening.read      View screening
         screening.write     Modify screening
         screening.delete    Delete screening

         screenee.full       Full access to screenees
         screenee.create     Add screenee
         screenee.read       View screenee
         screenee.write      Modify screenee
         screenee.delete     Remove screenee

         user.full           User admin
         user.create         Add user
         user.read           View user
         user.write          Modify user
         user.delete         Delete user
        */
        { $type: String, validate: [core.mongodb.validation.rule.required, core.mongodb.validation.rule.permission] },
      ],
    },
  ],

}
