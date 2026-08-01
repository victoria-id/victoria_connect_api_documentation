# Quick identity check data points

A lightweight identity check that reads the machine readable zone (MRZ) of a passport, ID card, residence permit, or driver's license. Unlike the full ID check, it does not read the document's chip; validity is based on the MRZ (and its checksums) only.

* Check state
* Check progress (%)

* Individual
  * Name
    * Personal name (e.g., 'Willeke Liselotte')
    * Family name (e.g., 'de Bruijn')
    * Married (family) name

  * Birth
    * Date of birth
    * Place of birth

  * Gender
  * Nationality (ISO 3166 alpha-3 country code)
  * ID / number

* Document
  * Type
    * Code (e.g., 'P', 'I', 'D', etc)
    * Name (e.g., 'passport', 'id_card', 'residence_permit', 'drivers_license')
  * ID / number
  * Issuing authority (ISO 3166 alpha-3 country code)
  * Date
    * Expiration date

  * Format (e.g., 'TD1', 'TD3', 'EDL')
  * MRZ

  * Photo (for each uploaded image)
    * OCR
    * QR code

* Check (assertion)
  * Composite checksum present
  * Composite checksum valid
  * Document ID / number present
  * Document ID / number valid
  * Document ID / number checksum present
  * Document ID / number checksum valid
  * Document expire date present
  * Document expire date valid
  * Document expire date checksum present
  * Document expire date checksum valid
  * Date of birth present
  * Date of birth valid
  * Date of birth checksum present
  * Date of birth checksum valid
  * Entity ID / number present
  * Entity ID / number valid
  * Entity ID / number checksum present
  * Entity ID / number checksum valid

  * Specimen (yes / no)
  * Valid (aggregate value)
  * Violation (aggregate text)

* Badge (simplified conclusion)
  * MRZ (valid / inconclusive / invalid)
  * Valid (valid / inconclusive / invalid)

* Description (localized conclusion)
  * Code (e.g., 'information.valid', 'document.date.expire.invalid', 'entity.date.birth.invalid', 'mrz.checksum.invalid')
  * Level (success / warning / error)

* Score
  * Current
  * Maximum

* Date
  * Start of existence (date of birth)
  * End of document validity (expiration date)
