{
 // The `key` is the (shorter) thing that will be indexed.
 key: { $type: String, trim: true, required: true, unique: true, index: true },
 // The `description` is the part that surves as a (human readable) double checked once the record is found,
 //  effectively countering a potential hash collision.
 description: { $type: String, required: true },

 value: { $type: Object },

 time:
  {
   expire: { $type: Date, required: true, default: Date.now, expires: 0, index: true },
  },
}
