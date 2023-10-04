# Insolvency check data points

* Check state
* Check progress (%)

* Insolvency check on natural person (when combined with ID check)
  * Court case ID
  * Court case reference
  * Title / summary / conclusion of session (can be a judgement)
  * Date of session
  * SSR number

  * Person (defendant)
    * Type (e.g., 'natural' person instead of 'legal')

    * Name
      * Initials name (e.g., 'J.')
      * Personal name (e.g., 'James Benedict')
      * Family name (e.g., 'Conner')
      * Display name (e.g., 'James Conner')

    * Birth
      * Date of birth
      * Place of birth

    * Death
      * Date of death

    * Addresses
      * Street
      * House number
      * House number suffix
      * Postal code
      * Place (city, district, etc.)
      * Address type (e.g., 'residence', 'correspondence', etc)
      * Date since

  * Undertakings (multiple)

  * Authority (court)
    * Code (e.g., '40')
    * Name (e.g., 'Rechtbank Amsterdam')

  * Venue
    * Code (e.g., '3256')
    * Name (e.g., 'Amsterdam')

  * Judges
    * Type (e.g., 'supervisor')
    * Name (display name)
    * Current judge (yes / no)

  * Counselor
    * Type (e.g., 'receiver')
    * Date start
    * Name
      * Title
      * Initials (e.g., 'N.')
      * Family name (e.g., 'Langelaar')
      * Display name (e.g., 'N. Langelaar')

    * Addresses
      * Street
      * House number
      * House number suffix
      * Postal code
      * Place (city, district, etc)
      * Telephone number

  * Publications
    * Reference
    * Date of publication
    * Publication code
    * Description of judgement
    * Authority (court) code

  * Reports
    * Reference
    * Title (e.g., 'Financieel verslag 12-01-2023.')
    * Date
    * Is final (yes / no)

* Insolvency check on legal person (when combined with KvK check)

  Similar to an insolvency check on a natural person but with the following differences:

  * Person (defendant)
    * Type (e.g., 'legal' person instead of 'natural')

    * Name
      * Display name (e.g., 'De Bruijn B.V.')

    * Chamber of Commerce (KvK)
      * Chamber of Commerce registration number
      * Chamber of Commerce district

    * Death
      * Date of death

    * Addresses
      * Street
      * House number
      * House number suffix
      * Postal code
      * Place (city, district, etc.)
      * Address type (e.g., 'residence', 'correspondence', etc)
      * Date since

  * Undertakings (multiple)
    * Chamber of Commerce registration number
    * Chamber of Commerce district
    * Name of undertaking
    * Is a former undertaking (yes / no)

    * Addresses
      * Street
      * House number
      * House number suffix
      * Postal code
      * Place (city, district, etc.)
      * Address type (e.g., 'residence', 'correspondence', etc)
      * Date since
