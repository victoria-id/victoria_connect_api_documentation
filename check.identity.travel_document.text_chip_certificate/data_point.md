# ID check data points

Passport, ID card, or residence permit.

* Check state
* Check progress (%)

* Individual
  * Citizen Service Number (BSN) / Social Security Number

  * Name
    * Personal name (e.g., 'James Benedict')
    * Family name (e.g., 'Conner')
    * Display name (e.g., 'James Conner')
    * Short name (e.g., 'James')
    * Married (family) name

  * Birth
    * Date of birth
    * Place of birth

  * Gender
  * Nationality (ISO 3166 alpha-3 country code)

  * Photo of individual (portrait)

* Document
  * Type
    * Code (e.g., 'P', 'I', etc)
    * Name (e.g., 'password', 'id_card', 'residence_permit')
  * ID / number
  * Issuing authority (ISO 3166 alpha-3 country code)
  * Date
    * Date of issue
    * Expiration date

  * Photo
    * Front of document
      * OCR

    * Back of document
      * OCR

  * Format (e.g., 'TD1')
  * MRZ

* Chip

  * Hashes
    * Hashing algorithm
    * Calculated hash
    * Expected hash

* Check
  * Chip present
  * Chip valid
  * MRZ present
  * MRZ valid
  * Portrait photo present
  * Portrait photo valid
  * Document ID / number present
  * Document ID / number valid
  * Document expire date present
  * Document expire date valid
  * Date of birth present
  * Date of birth valid

  * Specimen (yes / no)
  * Valid (aggregate value)
  * Violation (aggregate text)
