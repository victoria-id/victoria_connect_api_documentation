export default
 {
  portal:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'portal' },
   },

  group:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'group' },
   },

  screening:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'screening' },
   },

  screenee:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'screenee' },
   },

  check:
   {
    code: { $type: String, maxlength: 100, index: true, validate: core.mongodb.validation.rule.resource.identifier },
   },

  user:
   {
    id: { $type: core.mongodb.schema.type.object_id, required: true, index: true, ref: 'user' },
   },

  author: { $type: String, enum: ['screenee', 'screener'], index: true, required: true, default: 'screenee' },

  type: { $type: String, enum: ['normal', 'approve', 'reject'], index: true, required: true, default: 'normal' },

  scope: { $type: String, enum: ['internal', 'client', 'screenee'], index: true, required: true, default: 'screenee' },

  content: { $type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validation.rule.description },
 };
