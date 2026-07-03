# ID check data points

Passport, ID card, residence permit, or driver's license.

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
    * Country of birth (driver's license)

  * Gender
  * Nationality (ISO 3166 alpha-3 country code)
  * Address (driver's license)

  * Photo of individual (portrait)

* Document
  * Type
    * Code (e.g., 'P', 'I', 'D', etc)
    * Name (e.g., 'passport', 'id_card', 'residence_permit', 'drivers_license')
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

  * Format (e.g., 'TD1', 'EDL')
  * MRZ
  * Driving license categories (driver's license)
  * Type approval (driver's license)

* Chip

  * Data groups (all data groups; for each)
    * Code (e.g., 'dg1') and number
    * Hashing algorithm
    * Calculated hash
    * Expected hash (present only when the data group is referenced in the SOD)

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
