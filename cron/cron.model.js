{ // cron.task.unit
 name: { $type: String, required: true },

 function: { $type: String, required: true },
 input:
  [
    { $type: core.mongodb.schema.type.mixed },
  ],
 output: { $type: core.mongodb.schema.type.mixed },

 node:
  [
    {
     state: { $type: String, enum: ['suggested', 'assigned', 'relieved', 'fail', 'success'], required: true, default: 'assigned' },

     node:
      {
       id: { $type: core.mongodb.schema.type.object_id, required: true },
      },

     progress:
      {
       percent: { $type: Number, min: 0, max: 100, required: true, default: 0 },
      },

     exception:
      {
       code: { $type: String, lower: true },
       description: { $type: String },
      },

     time:
      {
       start: { $type: Date },
       end: { $type: Date },
      },

    },
  ],

 time: false,
}

{ // cron.task
 name: { $type: String, required: true },

 type: { $type: String, enum: ['success', 'fail'], required: true, default: 'success' },
 state: { $type: String, enum: ['pending', 'pause', 'active', 'skip', 'fail', 'success'], required: true, default: 'pending' },

 fault:
  {
   tolerance: { $type: Number, min: 0, max: 100, required: true, default: 1 },
  },

 unit:
  [
   schCron_Task_Unit,
  ],

 time: false,
}

{ // cron
 key: { $type: String, trim: true, maxlength: 1024, required: true, index: true },

 name: { $type: String, required: true },

 task:
  [
   schCron_Task,
  ],

 log:
  [
    {
     node:
      {
       id: { $type: core.mongodb.schema.type.object_id, required: true },
      },

     text: { $type: String },

     data: { $type: Object },

     time:
      {
       create: { $type: Date, required: true, default: Date.now },
      },
    },
  ],

 recur: { $type: Number, min: 0 },

 time:
  {
   start: { $type: Date, require: true, index: true, default: Date.now },
   end: { $type: Date, index: true },
  },
}
