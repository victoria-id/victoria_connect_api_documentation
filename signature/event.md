# Document signing events

Below is a detailed list of events emitted by the document signing module.


## Table of contents

1. [Document signing events](#document-signing-events)
   1. [Table of contents](#table-of-contents)
   2. [Form conversion](#form-conversion)
      1. [`form.convert.pdf`](#formconvertpdf)
   3. [Document signing](#document-signing)
      1. [`check/generic.sign/document.view`](#checkgenericsigndocumentview)
      2. [`check/generic.sign/document.approve`](#checkgenericsigndocumentapprove)
      3. [`check/generic.sign/document.decline`](#checkgenericsigndocumentdecline)
      4. [`check/generic.sign/document.upload`](#checkgenericsigndocumentupload)
      5. [`check/generic.sign/document.cancel`](#checkgenericsigndocumentcancel)
      6. [`check/generic.sign/document.sign`](#checkgenericsigndocumentsign)
      7. [`check/generic.sign/document.release`](#checkgenericsigndocumentrelease)
      8. [`check/generic.sign/release`](#checkgenericsignrelease)
      9. [`signature.envelope.document.approve`](#signatureenvelopedocumentapprove)
      10. [`signature.envelope.document.decline`](#signatureenvelopedocumentdecline)
      11. [`signature.envelope.sign`](#signatureenvelopesign)
      12. [`signature.envelope.complete`](#signatureenvelopecomplete)
   4. [Document signing log](#document-signing-log)
      1. [`signature.envelope.log.generate`](#signatureenvelopeloggenerate)
      2. [`signature.envelope.log.seal`](#signatureenvelopelogseal)
   5. [Screenee reports](#screenee-reports)
      1. [`screenee.report.generate`](#screeneereportgenerate)
      2. [`screenee.report.seal`](#screeneereportseal)


---


## Form conversion

### `form.convert.pdf`

- **Description**: Initiated by the **screenee** when a completed form that requires signatures from the form check (`check.generic.form`) is converted into a PDF to prepare it for the signing process.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope to which the PDF is added.
  - `form_id`: The ID of the form being converted.


---


## Document signing

### `check/generic.sign/document.view`

- **Description**: Initiated by the **screenee** whenever a document is viewed in the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/document.approve`

- **Description**: Initiated by the **screenee** whenever a document is approved in the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/document.decline`

- **Description**: Initiated by the **screenee** whenever a document is declined in the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/document.upload`

- **Description**: Triggered when an extra document to be signed or approved by the screenee was added to the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.

### `check/generic.sign/document.cancel`

- **Description**: Triggered when a **screener** cancels a signature envelope on a screenee in the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/document.sign`

- **Description**: Initiated by the **screenee** whenever a document is signed in the document signing check (`check.generic.sign`).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/document.release`

- **Description**: Triggered when a signature envelope in which a **screenee** is involved is signed or approved by all parties.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope that was signed.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.
  - `form_id`: If the document originated from the form check (`check.generic.form`), the ID of the form.
  - `document_id`: If the document originated from the document upload module, the ID of the document.

### `check/generic.sign/release`

- **Description**: Triggered when all documents in the the document signing check (`check.generic.sign`) are signed and/or approved by all parties, releasing the check.

### `signature.envelope.document.approve`

- **Description**: Initiated by the **screener** whenever a document is approved.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope to which the PDF is added.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.

### `signature.envelope.document.decline`

- **Description**: Initiated by the **screener** whenever a document is declined.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope to which the PDF is added.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.

### `signature.envelope.sign`

- **Description**: Initiated by both the **screener** and the **screenee** whenever a document is signed.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope to which the PDF is added.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.

### `signature.envelope.complete`

- **Description**: Triggered when a signature envelope is signed or approved by all parties, regardless of whether a screenee was involved or not.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope to which the PDF is added.
  - `signature_envelope_action`: The required action of the signature envelope. Either `sign` or `approve`.


## Document signing log

### `signature.envelope.log.generate`

- **Description**: Automatically triggered after the `signature.envelope.sign` event, when all parties have signed the document and a signing log is generated.
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope for which the signing log is generated.

### `signature.envelope.log.seal`

- **Description**: Immediately after the `signature.envelope.log.generate` event, this event is emitted when the generated log is sealed (to ensure its integrity and prevent any further modifications).
- **Audit data and webhook payload**:
  - `signature_envelope_id`: The ID of the signature envelope for which the signing log is sealed.


---


## Screenee reports

### `screenee.report.generate`

- **Description**: Triggered when a screenee report is generated.
- **Audit data**:
  - `format`: The format in which the report is generated (PDF, ZIP, or HTML).

### `screenee.report.seal`

- **Description**: Triggered when the generated screenee report is sealed (to ensure its integrity and prevent any further modifications).
