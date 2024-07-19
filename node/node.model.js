{
 _id: false,

 name: { $type: String, maxlength: 256 },

 use: { $type: Number, min: 0, required: true },
 free: { $type: Number, min: 0, required: true },

 time: false,
}

{
 _id: false,

 unit:
  [
   schNode_Unit,
  ],

 time:
  {
   update: false,
  },
}

{
 name: { $type: String, required: true, unique: true, index: true },

 order: { $type: Number, min: 0, required: true, index: true },

 processor:
  [
   schNode_Load,
  ],

 time:
  {
   update: { $type: Date, required: true, default: Date.now, expires: core._.get(core, 'configuration.node.time.expire', 600), index: true },
  },
}
