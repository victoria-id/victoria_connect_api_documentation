export default
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

      role:
       [
         { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'role' },
       ],

      // Obsolete: Permissions are determined by `Role.permission[]`.
      // TODO: Remove from version 0.14.
      permission: { $type: core.mongodb.schema.type.mixed },
     },
   ],

 };
