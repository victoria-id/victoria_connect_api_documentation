# Victoria Connect API documentation




## Table of contents

1. [Victoria Connect API documentation](#victoria-connect-api-documentation)
   1. [Table of contents](#table-of-contents)
   2. [Postman](#postman)
   3. [Schemas and filters](#schemas-and-filters)
      1. [Database schemas](#database-schemas)
      2. [Input / output filters](#input--output-filters)


---


## Postman

This repository contains 1 Postman collection, and 2 Postman environments, which you can import into your Postman application. The Postman collection depends on a Postman environment, so we recommend importing at least `victoria-connect-api.postman_collection.json` and `api.victoria-id.com.postman_environment.json`.

You can [download Postman here](https://www.postman.com/downloads/).

> The Postman environment defined in `localhost.victoria-id.com.postman_environment.json` is used for API development on a local machine and --in general-- is not needed.

Documentation based on the Postman collection is [published online here](https://documenter.getpostman.com/view/121742/UyrAFHAA).


---


## Schemas and filters

Each folder within this repository contain database schemas and input / output filters for an API end-point or module.

For the validation rules references by the database schemas, check [validation-rules.js](validation-rules.js);


### Database schemas

Database schemas show field length, type, validation rules, etc. and look similar to the example below.

Schema excerpt for `screenee`:

```javascript
{
 type: { type: String, trim: true, lowercase: true, enum: ['screenee', 'candidate', 'employee', 'client', 'customer'], required: true, default: 'candidate' },

 name:
  {
   personal: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },

   family: { type: String, trim: true, maxlength: 50, required: true, validate: core.mongodb.validate.name.human },

   display: { type: String, trim: true, maxlength: 100, required: true, validate: core.mongodb.validate.name.human },
  },

 description: { type: String, trim: true, maxlength: 1024, default: '', validate: core.mongodb.validate.name.relaxed },

 locale: { type: String, trim: true, maxlength: 7, lowercase: true, required: true, validate: core.mongodb.validate.locale },

 address:
  {
   mail: { type: String, trim: true, maxlength: 100, lowercase: true, required: true, index: true, validate: core.mongodb.validate.address.mail },

   tele:
    {
     phone: { type: String, trim: true, maxlength: 50, validate: core.mongodb.validate.address.tele },
    },
  },
}
```


### Input / output filters

Input and output filters are applied to every API request / response, and define which parts of the JSON data is allowed in or out.

Here's an example of a filter definition:

```javascript
{
 input: // Input filters section.
  {

   update: // Filter applied during a request to update.
    {
     screenee: // Data section expected in the body of the API request.
      [
        {
         name:
          {
           display: String, // `name.display` is allowed and expected to be a `String`.
          },
        },
      ],
    },

  },


 output: // Output filters section. Applied to the body of an API response.
  {

   minimal: // Filter definition "minimal". Outputs minimal data.
    {
     screenee: // Data section in the API response.
      [
        {
         id: true,  // `id` is allowed.

         name:
          {
           display: true, // Only `name.display` is allowed, while `name.personal` and `name.family` are filtered out.
          },
        },
      ],
    },


   list: // Filter definition "list". Used for overview pages.
    {
     screenee:
      [
        {
         id: true,

         name: true,
         gender: true,
         address: true,

         time: true,
        },
      ],

     query: true,
    },


   detail:
    {
     screenee:
      [
        {
         id: true,

         name: true,
         gender: true,
         address: true,

         check:
          [
            {
             code: true,

             state: true,
             progress: true,

             data:
              {
               shared: true,

               screenee: true,

               // screener: false,
              },
            },
          ],

         time: true,
        },
      ],

    },

  },
}
```
