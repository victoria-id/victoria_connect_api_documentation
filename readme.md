# Victoria Connect API documentation

The primary API documentation is [published here](https://documenter.getpostman.com/view/29541604/2s9YBxZGWS).

This repository only contains:

* Database schemas.
* Request / response filters.
* Validation rules.
* Extra documentation (in Markdown format) otherwise not covered by the primary API documenation.


## Table of contents

1. [Victoria Connect API documentation](#victoria-connect-api-documentation)
   1. [Table of contents](#table-of-contents)
   2. [Schemas, filters, and validation rules](#schemas-filters-and-validation-rules)
      1. [Database schemas](#database-schemas)
      2. [Request / response filters](#request--response-filters)
   3. [Webhooks](#webhooks)


---


## Schemas, filters, and validation rules

Each folder within this repository contain database schemas and request / response filters for API end-points and modules.

Validation rules referenced by the schemas and filters can be found in [validation_rules.json](validation_rules.json);


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


### Request / response filters

Request and response filters are applied to every API request / response, and define which parts of the JSON data is allowed in or out.

Here's an example of a filter definition:

```javascript
{
 input: // Request filters section.
  {

   update: // Filter applied during a request to update.
    {
     screenee: // Data section expected in the body of the API request.
      [
        {
         name:
          {
           display: core.validate('required', 'name.human'), // `name.display` is required and expected to match name format. See `validation_rules.json`.
          },
        },
      ],
    },

  },


 output: // Response filters section. Applied to the body of an API response.
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


---


## Webhooks

Information about webhooks you can find here:

[Webhooks](webhook/webhook_receiver.md)
