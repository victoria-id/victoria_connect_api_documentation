export default
 {

  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
    title: { $type: String, trim: true, maxlength: 100 },
   },

  // The requesting user.
  request:
   {
    user:
     {
      id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'user' },
      name: { $type: Object },
     },
   },

  // The (subjected) user being created, updated, deleted, etc.
  user:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'user' },
    name: { $type: Object },
   },

  group:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'group' },
    name: { $type: String, trim: true },
   },

  role:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'role' },
    name: { $type: String, trim: true },
   },

  profile:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'profile' },
    title: { $type: String, trim: true },
   },

  reminder:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'reminder' },
    title: { $type: String, trim: true },
   },

  form:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'form' },
    name: { $type: String, trim: true },
   },

  document:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'document' },
    name: { $type: String, trim: true },
   },

  screening:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'screening' },
    title: { $type: String, trim: true, maxlength: 100 },
   },

  screenee:
   {
    id: { $type: core.mongodb.schema.type.object_id, index: true, ref: 'screenee' },
    name: { $type: Object },
    address: { $type: Object },
   },


  code: { $type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validation.rule.resource.identifier },

  data: { $type: Object },


  time:
   {
    update: false,
   },
 };
