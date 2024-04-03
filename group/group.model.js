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
        {
         $type: String, enum:
          [
           'portal.full',
           'portal.create',
           'portal.delete',
           'portal.write',
           'portal.read',

           'group.full',
           'group.create',
           'group.delete',
           'group.write',
           'group.read',

           'profile.full',
           'profile.create',
           'profile.delete',
           'profile.write',
           'profile.read',

           'screening.full',
           'screening.create',
           'screening.delete',
           'screening.write',
           'screening.read',

           'check.full',
           'check.create',
           'check.delete',
           'check.write',
           'check.read',

           'user.full',
           'user.create',
           'user.delete',
           'user.write',
           'user.read',

           'screenee.full',
           'screenee.create',
           'screenee.delete',
           'screenee.write',
           'screenee.read',
          ],
        },
      ],
    },
  ],

}
