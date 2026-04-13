# Form

A form is a collection of form elements stored in `form.element[]`. Each element has a `type` that determines its role — whether it displays static content or collects user input — and which properties are applicable to it.

When a form element is validated, properties that are not applicable to its type are automatically cleared. Setting a non-applicable property will not cause an error; it will simply be removed.


## Numbering

Every form element requires a unique `id` within its form. IDs are numbered sequentially within their type category:

type            | Prefix | Examples
----------------|--------|-----------------
`title`         | `t`    | `t1`, `t2`, `t3`
`heading`       | `h`    | `h1`, `h2`, `h3`
`input.*`       | `q`    | `q1`, `q2`, `q3`
All other types | `e`    | `e1`, `e2`, `e3`

The `id` is a string of maximum 6 characters and must follow variable name formatting (alphanumeric with underscores, starting with a letter — e.g. `q1`, `q2_1`).


## Universal properties

Every form element type carries these properties regardless of type:

property    | Type            | Required | Default | Maximum | Description
------------|-----------------|----------|---------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`id`        | `String`        | Yes      | -       | 6       | Unique identifier within the form; referenced by conditions to read the element's value
`tag`       | `String`        | No       | `''`    | 40      | Persistent identifier for automated systems; unlike `id`, a `tag` does not change when elements are reordered; does not have to be unique (e.g. `date_of_birth`)
`condition` | `Object`        | No       | -       | -       | Expression that controls whether the element is active; when `false`, the element is excluded from result data and input values are reset to `value.default`; see the `condition` module for schema details
`modifier`  | `Array<String>` | No       | `[]`    | -       | Css class names (lowercase alphanumeric snake_case) passed through to the front-end; the api does not interpret these values


## What "reset" means

Several properties are marked **n/a (reset)** for certain element types. This means:

- For `value.default` and `value.current`: the property is explicitly set to `null` (not deleted), so integrations can always expect these keys to be present.
- For all other properties (`label`, `placeholder`, `clarification`, `hint`, `choice`, `validation`, `value.path`): the property is cleared to its schema default (empty string `''` or empty array `[]`).


---


## Display elements

Display elements render static content. They do not collect user input.


### `title`

A large heading, typically the main title of the form or a major section.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------
`text`          | `String`, maximum 10240 | Required
`label`         | -                       | N/a (reset)
`placeholder`   | -                       | N/a (reset)
`clarification` | -                       | N/a (reset)
`hint`          | -                       | N/a (reset)
`choice`        | -                       | N/a (reset)
`value.default` | -                       | N/a (reset → `null`)
`value.current` | -                       | N/a (reset → `null`)
`value.path`    | -                       | N/a (reset)
`validation`    | -                       | N/a (reset)


### `heading`

A sub-heading used to divide a form into named sections. Identical requirements to `title`.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------
`text`          | `String`, maximum 10240 | Required
`label`         | -                       | N/a (reset)
`placeholder`   | -                       | N/a (reset)
`clarification` | -                       | N/a (reset)
`hint`          | -                       | N/a (reset)
`choice`        | -                       | N/a (reset)
`value.default` | -                       | N/a (reset → `null`)
`value.current` | -                       | N/a (reset → `null`)
`value.path`    | -                       | N/a (reset)
`validation`    | -                       | N/a (reset)


### `text`

A paragraph of body text used to provide instructions or contextual information. Identical requirements to `title` and `heading`.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------
`text`          | `String`, maximum 10240 | Required
`label`         | -                       | N/a (reset)
`placeholder`   | -                       | N/a (reset)
`clarification` | -                       | N/a (reset)
`hint`          | -                       | N/a (reset)
`choice`        | -                       | N/a (reset)
`value.default` | -                       | N/a (reset → `null`)
`value.current` | -                       | N/a (reset → `null`)
`value.path`    | -                       | N/a (reset)
`validation`    | -                       | N/a (reset)


### `horizontal_rule`

A decorative horizontal divider between sections. Has no content properties whatsoever.

Property        | Type | Requirement
----------------|------|---------------------
`text`          | -    | N/a (reset)
`label`         | -    | N/a (reset)
`placeholder`   | -    | N/a (reset)
`clarification` | -    | N/a (reset)
`hint`          | -    | N/a (reset)
`choice`        | -    | N/a (reset)
`value.default` | -    | N/a (reset → `null`)
`value.current` | -    | N/a (reset → `null`)
`value.path`    | -    | N/a (reset)
`validation`    | -    | N/a (reset)


### `image`

Displays an image as part of the form structure. Not to be confused with `input.file`, which is a user-facing file upload input.

`value.default` and `value.current` hold an image reference object, or `null` when no image is set. Unlike other display elements, these are retained and usable.

Property        | Type               | Requirement
----------------|--------------------|----------------------------
`text`          | -                  | N/a (reset)
`label`         | -                  | N/a (reset)
`placeholder`   | -                  | N/a (reset)
`clarification` | -                  | N/a (reset)
`hint`          | -                  | N/a (reset)
`choice`        | -                  | N/a (reset)
`value.default` | `null` or `Object` | Must be `null` or an object
`value.current` | `null` or `Object` | Must be `null` or an object
`value.path`    | -                  | N/a (reset)
`validation`    | -                  | N/a (reset)


### `error`

Displays an error message. When an `error` element is active (its `condition` evaluates to `true`) during form validation, the validation throws an exception. This allows encoding cross-field validation rules directly into the form structure.

Property        | Type                    | Requirement
----------------|-------------------------|-----------------------------------------------
`text`          | `String`, maximum 10240 | Required — the error message shown to the user
`label`         | -                       | N/a (reset)
`placeholder`   | -                       | N/a (reset)
`clarification` | -                       | N/a (reset)
`hint`          | -                       | N/a (reset)
`choice`        | -                       | N/a (reset)
`value.default` | -                       | N/a (reset → `null`)
`value.current` | -                       | N/a (reset → `null`)
`value.path`    | -                       | N/a (reset)
`validation`    | -                       | N/a (reset)


### `alert`

Displays an alert or notification block. `value.default` carries a variant string interpreted by the front-end (e.g. a style or severity level). An empty string `''` means no variant.

Property        | Type                    | Requirement
----------------|-------------------------|------------------------------------------
`text`          | `String`, maximum 10240 | Required — the alert message
`label`         | -                       | N/a (reset)
`placeholder`   | -                       | N/a (reset)
`clarification` | -                       | N/a (reset)
`hint`          | -                       | N/a (reset)
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string; use `''` for no variant
`value.current` | -                       | N/a (reset → `null`)
`value.path`    | -                       | N/a (reset)
`validation`    | -                       | N/a (reset)


---


## Input elements

Input elements collect data from the user.

### Shared behavior

**`value.default`** must always be provided and must match the required type for that element. An empty string `''` or empty array `[]` is acceptable.

**`value.current`** may be omitted. If it is `undefined` at validation time, it is automatically initialized from `value.default`, provided `value.default` is of the correct type.

**`value.path`** (optional, `String`, maximum 256, dot-notation) — when a data object is passed to the form validator, `value.current` is read from `value.path` in that object at the start of validation and written back to `value.path` in the result data object at the end.

**`validation`** (optional, `Array<String>`) — validation rule codes applied to both `value.default` (if set) and `value.current`. Rules may also perform transforms such as trimming or normalization, in which case the transformed value is written back.

**conditions** — when an input element's `condition` evaluates to `false`, its `value.current` is reset to `value.default` and the element is excluded from the result data object.

### `choice` item structure

For elements that require a `choice` list, each item must be an object:

property | Type     | Required | Max
---------|----------|----------|----
`label`  | `String` | Yes      | 256
`value`  | `String` | Yes      | 256


---


### `input.text`

A single-line free-text input.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.password`

A password input rendered as a masked text field. Values are handled identically to `input.text`.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.number`

A numeric input. Values are `null` when empty or a `Number` when set.

Property        | Type                    | Requirement
----------------|-------------------------|-----------------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `null` or `Number`      | Must be `null` or a number
`value.current` | `null` or `Number`      | Must be `null` or a number; auto-initialized from `value.default` if omitted.


### `input.tele`

A telephone number input. Values are stored as strings to preserve formatting (leading zeros, `+` country codes, etc.).

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.calendar`

A calendar date picker. The type name refers to the ui component (a calendar drop-down), not the data type. Values are date strings.

> The type is `input.calendar`, not `input.date`. A hypothetical `input.date` would be a plain `<input type="date">` without a calendar component, which is why the naming distinction exists.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string (date string)
`value.current` | `String`, maximum 1024  | Must be a string (date string); auto-initialized from `value.default` if omitted.


### `input.textarea`

A multi-line free-text input.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.checkbox`

A group of checkboxes allowing multiple selections. Requires a `choice` list. Values are arrays of selected choice `value` strings.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | -                       | N/a (reset)
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | `Array<Object>`         | Required — see [choice item structure](#choice-item-structure)
`value.default` | `Array`, maximum 1024   | Must be an array
`value.current` | `Array`, maximum 1024   | Must be an array; auto-initialized from `value.default` if omitted.


### `input.radio`

A group of radio buttons allowing a single selection. Requires a `choice` list. Value is the selected choice `value` string.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | -                       | N/a (reset)
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | `Array<Object>`         | Required — see [choice item structure](#choice-item-structure)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.select`

A dropdown allowing a single selection. Requires a `choice` list.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | `Array<Object>`         | Required — see [choice item structure](#choice-item-structure)
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.select.multiple`

A dropdown allowing multiple selections. Requires a `choice` list. Values are arrays of selected choice `value` strings.

Note: `text` is not listed in the structure constraints for this type and is therefore not validated; it follows the schema default (empty string `''`).

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Unconstrained (schema default `''`)
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | `Array<Object>`         | Required — see [choice item structure](#choice-item-structure)
`value.default` | `Array`, maximum 1024   | Must be an array
`value.current` | `Array`, maximum 1024   | Must be an array; auto-initialized from `value.default` if omitted.


### `input.gender`

A gender selection with predefined options rendered by the front-end component. No `choice` list is needed or accepted.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset) — options are built into the component
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.language`

A language selection with predefined options rendered by the front-end component. No `choice` list is needed or accepted.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset) — options are built into the component
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.country`

A country selection with predefined options rendered by the front-end component. No `choice` list is needed or accepted.

Property        | Type                    | Requirement
----------------|-------------------------|-------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | `String`, maximum 256   | Must be a string
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset) — options are built into the component
`value.default` | `String`, maximum 1024  | Must be a string
`value.current` | `String`, maximum 1024  | Must be a string; auto-initialized from `value.default` if omitted.


### `input.color`

A color picker input.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | -                       | N/a (reset)
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `String`, maximum 1024  | Must be a string (color value)
`value.current` | `String`, maximum 1024  | Must be a string (color value); auto-initialized from `value.default` if omitted.


### `input.file`

A file upload input. Values are arrays of file reference objects. Not to be confused with the `image` display element, which renders an image embedded in the form structure.

Property        | Type                    | Requirement
----------------|-------------------------|---------------------------------------------------------------------------------------------
`label`         | `String`, maximum 1024  | Required
`text`          | `String`, maximum 10240 | Must be a string
`placeholder`   | -                       | N/a (reset)
`clarification` | `String`, maximum 10240 | Must be a string
`hint`          | `String`, maximum 1024  | Must be a string
`choice`        | -                       | N/a (reset)
`value.default` | `Array`                 | Must be an array of file reference objects
`value.current` | `Array`                 | Must be an array of file reference objects; auto-initialized from `value.default` if omitted.


---


## Property reference

Quick comparison of `text`, `label`, `placeholder`, `choice`, `value.default`, and `value.current` across all types:

type                    | `text`            | `label`  | `placeholder` | `choice` | `value.default`    | `value.current`
------------------------|-------------------|----------|---------------|----------|--------------------|-------------------
`title`                 | Required `String` | N/a      | N/a           | N/a      | N/a (`null`)       | N/a (`null`)
`heading`               | Required `String` | N/a      | N/a           | N/a      | N/a (`null`)       | N/a (`null`)
`text`                  | Required `String` | N/a      | N/a           | N/a      | N/a (`null`)       | N/a (`null`)
`horizontal_rule`       | N/a               | N/a      | N/a           | N/a      | N/a (`null`)       | N/a (`null`)
`image`                 | N/a               | N/a      | N/a           | N/a      | `null` or `Object` | `null` or `Object`
`error`                 | Required `String` | N/a      | N/a           | N/a      | N/a (`null`)       | N/a (`null`)
`alert`                 | Required `String` | N/a      | N/a           | N/a      | `String`           | N/a (`null`)
`input.text`            | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.password`        | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.number`          | `String`          | Required | `String`      | N/a      | `null` or `Number` | `null` or `Number`
`input.tele`            | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.calendar`        | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.textarea`        | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.checkbox`        | `String`          | Required | N/a           | Required | `Array`            | `Array`
`input.radio`           | `String`          | Required | N/a           | Required | `String`           | `String`
`input.select`          | `String`          | Required | `String`      | Required | `String`           | `String`
`input.select.multiple` | Unconstrained     | Required | `String`      | Required | `Array`            | `Array`
`input.gender`          | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.language`        | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.country`         | `String`          | Required | `String`      | N/a      | `String`           | `String`
`input.color`           | `String`          | Required | N/a           | N/a      | `String`           | `String`
`input.file`            | `String`          | Required | N/a           | N/a      | `Array`            | `Array`
