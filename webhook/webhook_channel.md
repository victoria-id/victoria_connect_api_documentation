# Webhook channels

This document contains a non-exhaustive list of webhook events for the purpose of illustrating the webhook channels they belong to.

Click the following link if you are searching for a [complete list of webhook events](https://github.com/victoria-id/victoria_connect_api_documentation/blob/master/webhook/webhook.events.list.txt).


## Table of contents

1. [Webhook channels](#webhook-channels)
   1. [Table of contents](#table-of-contents)
   2. [Portal events](#portal-events)
   3. [User, group, role (CUD) events](#user-group-role-cud-events)
   4. [Communication (mail and SMS send events)](#communication-mail-and-sms-send-events)
   5. [Profile, reminder, form, document (CUD) events](#profile-reminder-form-document-cud-events)
   6. [Screening (CUD) events](#screening-cud-events)
   7. [Screenee](#screenee)
   8. [Screening report](#screening-report)
   9. [Base check events](#base-check-events)
   10. [Check other](#check-other)
   11. [Signature envelope events](#signature-envelope-events)
   12. [Group contact](#group-contact)
   13. [Mail template (CUD) events](#mail-template-cud-events)
   14. [SSO (CUD) events](#sso-cud-events)
   15. [Webhook (CUD) events](#webhook-cud-events)


---


## Portal events

Channel: `portal`

Events:

* `portal.update`


## User, group, role (CUD) events

Channel: `group`

Events:

* `group.create`
* `group.update`
* `group.delete`


Channel: `role`

Events:

* `role.create`
* `role.update`
* `role.permission.escalation.attempt`
* `role.delete`


Channel: `user`

Events:

* `user.create`
* `user.update`
* `user.merge`
* `user.delete`

* `user.consent`


Channel: `group.user`

Events:

* `group.user.remove`
* `group.user.remove.all`
* `group.user.role.add`
* `group.user.role.remove`

* `user.group.remove.all`


## Communication (mail and SMS send events)

Channel: `communication.send`

Events:

* `sms.send`
* `group.mail.send`
* `user.mail.send`
* `screenee.mail.send`


## Profile, reminder, form, document (CUD) events

Channel: `profile`

Events:

* `profile.create`
* `profile.update`
* `profile.delete`


Channel: `reminder`

Events:

* `reminder.create`
* `reminder.update`
* `reminder.delete`


Channel: `form`

Events:

* `form.create`
* `form.duplicate`
* `form.update`
* `form.delete`

* `form.convert.pdf`


Channel: `document`

Events:

* `document.create`
* `document.update`
* `document.delete`


## Screening (CUD) events

Channel: `screening`

Events:

* `screening.create`
* `screening.update`
* `screening.delete`


## Screenee

Channel: `screenee`

Events:

* `screenee.create`
* `screenee.update`
* `screenee.invite.send`
* `screenee.invite.accept`
* `screenee.reminder.send`
* `screenee.subscription.unsubscribe`
* `screenee.delete`



## Screening report

Channel: `screenee.report`

Events:

* `screenee.report.generate`
* `screenee.report.seal`


## Base check events

Channel: `check.create`

Events:

* `check/business.chamber_of_commerce.kvk_nl/create`
* `check/company_info.adverse_media/create`
* `check/company_info.criminal_record/create`
* `check/company_info.pep/create`
* `check/company_info.person/create`
* `check/company_info.sanction/create`
* `check/declaration.employment_history.uwv_nl/create`
* `check/declaration.reference.form/item.create`
* `check/declaration.reference/item.create`
* `check/declaration.right_to_work/create`
* `check/education.diploma.emrex_eu/create`
* `check/education.diploma/item.create`
* `check/finance.bank_account.iban/create`
* `check/finance.insolvency.cir_nl/create`
* `check/health.practitioner.big_nl/create`
* `check/health.practitioner.skj_nl/create`
* `check/identity.travel_document.quick/create`
* `check/identity.travel_document.quick/token.create`
* `check/identity.travel_document.quick/uri.create`
* `check/identity.travel_document.text_chip_certificate/create`


Channel: `check.release`

Events:

* `check/business.chamber_of_commerce.kvk_nl/release`
* `check/business.chamber_of_commerce.placeholder/release`
* `check/business.waadi_nl/release`
* `check/company_info.adverse_media/release`
* `check/company_info.criminal_record/release`
* `check/company_info.pep/release`
* `check/company_info.person/release`
* `check/company_info.sanction/release`
* `check/declaration.conduct.vog_nl/release`
* `check/declaration.employment_history.uwv_nl/release`
* `check/declaration.reference.form/item.release`
* `check/declaration.reference.form/release`
* `check/declaration.reference/release`
* `check/declaration.right_to_work/release`
* `check/education.diploma.emrex_eu/release`
* `check/education.diploma/release`
* `check/finance.bank_account.iban/release`
* `check/finance.insolvency.cir_nl/release`
* `check/generic.finish/release`
* `check/generic.form/form.release`
* `check/generic.form/release`
* `check/generic.sign/document.release`
* `check/generic.sign/release`
* `check/health.practitioner.big_nl/release`
* `check/health.practitioner.skj_nl/release`
* `check/identity.travel_document.placeholder/release`
* `check/identity.travel_document.quick/release`
* `check/identity.travel_document.text_chip_certificate/release`


Channel: `check.evaluation`

Events:

* `check/business.chamber_of_commerce.kvk_nl/evaluation.fail`
* `check/business.chamber_of_commerce.kvk_nl/evaluation.success`
* `check/business.chamber_of_commerce.placeholder/evaluation.fail`
* `check/business.chamber_of_commerce.placeholder/evaluation.success`
* `check/business.waadi_nl/evaluation.fail`
* `check/business.waadi_nl/evaluation.success`
* `check/company_info.adverse_media/evaluation.fail`
* `check/company_info.adverse_media/evaluation.success`
* `check/company_info.criminal_record/evaluation.fail`
* `check/company_info.criminal_record/evaluation.success`
* `check/company_info.pep/evaluation.fail`
* `check/company_info.pep/evaluation.success`
* `check/company_info.person/evaluation.fail`
* `check/company_info.person/evaluation.success`
* `check/company_info.sanction/evaluation.fail`
* `check/company_info.sanction/evaluation.success`
* `check/declaration.conduct.vog_nl/evaluation.fail`
* `check/declaration.conduct.vog_nl/evaluation.success`
* `check/declaration.employment_history.uwv_nl/evaluation.fail`
* `check/declaration.employment_history.uwv_nl/evaluation.success`
* `check/declaration.reference.form/evaluation.fail`
* `check/declaration.reference.form/evaluation.success`
* `check/declaration.reference/evaluation.fail`
* `check/declaration.reference/evaluation.success`
* `check/declaration.right_to_work/evaluation.fail`
* `check/declaration.right_to_work/evaluation.success`
* `check/education.diploma.emrex_eu/evaluation.fail`
* `check/education.diploma.emrex_eu/evaluation.success`
* `check/education.diploma/evaluation.fail`
* `check/education.diploma/evaluation.success`
* `check/finance.bank_account.iban/evaluation.fail`
* `check/finance.bank_account.iban/evaluation.success`
* `check/finance.insolvency.cir_nl/evaluation.fail`
* `check/finance.insolvency.cir_nl/evaluation.success`
* `check/generic.finish/evaluation.fail`
* `check/generic.finish/evaluation.success`
* `check/generic.form/evaluation.fail`
* `check/generic.form/evaluation.success`
* `check/generic.sign/evaluation.fail`
* `check/generic.sign/evaluation.success`
* `check/health.practitioner.big_nl/evaluation.fail`
* `check/health.practitioner.big_nl/evaluation.success`
* `check/health.practitioner.skj_nl/evaluation.fail`
* `check/health.practitioner.skj_nl/evaluation.success`
* `check/identity.travel_document.placeholder/evaluation.fail`
* `check/identity.travel_document.placeholder/evaluation.success`
* `check/identity.travel_document.quick/evaluation.fail`
* `check/identity.travel_document.quick/evaluation.success`
* `check/identity.travel_document.text_chip_certificate/evaluation.fail`
* `check/identity.travel_document.text_chip_certificate/evaluation.success`


Channel: `check.delete`

Events:

* `check/business.chamber_of_commerce.kvk_nl/delete`
* `check/business.chamber_of_commerce.placeholder/delete`
* `check/business.waadi_nl/delete`
* `check/company_info.adverse_media/delete`
* `check/company_info.criminal_record/delete`
* `check/company_info.pep/delete`
* `check/company_info.person/delete`
* `check/company_info.sanction/delete`
* `check/declaration.conduct.vog_nl/delete`
* `check/declaration.employment_history.uwv_nl/delete`
* `check/declaration.reference.form/delete`
* `check/declaration.reference.form/item.delete`
* `check/declaration.reference/delete`
* `check/declaration.right_to_work/delete`
* `check/education.diploma.emrex_eu/delete`
* `check/education.diploma/delete`
* `check/education.diploma/item.delete`
* `check/finance.bank_account.iban/delete`
* `check/finance.insolvency.cir_nl/delete`
* `check/generic.form/delete`
* `check/generic.form/form.delete`
* `check/health.practitioner.big_nl/delete`
* `check/health.practitioner.skj_nl/delete`
* `check/identity.travel_document.placeholder/delete`
* `check/identity.travel_document.quick/delete`
* `check/identity.travel_document.text_chip_certificate/delete`


## Check other

Channel: `check.other`

Events:

* `check/declaration.conduct.vog_nl/requested`

* `check/business.waadi_nl/update`
* `check/company_info.person/update`
* `check/declaration.conduct.vog_nl/certificate.upload`
* `check/declaration.conduct.vog_nl/flow`
* `check/declaration.conduct.vog_nl/pending`
* `check/declaration.conduct.vog_nl/receipt.upload`
* `check/declaration.conduct.vog_nl/request`
* `check/declaration.employment_history.uwv_nl/skip`
* `check/declaration.reference.form/item.document.upload`
* `check/declaration.reference.form/item.referent.approach`
* `check/declaration.reference.form/item.referent.mail`
* `check/declaration.reference.form/item.referent.response`
* `check/declaration.reference.form/item.referent.seen`
* `check/declaration.reference/item.document.upload`
* `check/declaration.reference/item.referent.mail`
* `check/declaration.reference/item.referent.response`
* `check/declaration.reference/item.referent.seen`
* `check/education.diploma.emrex_eu/update`
* `check/education.diploma/item.update`
* `check/education.diploma/update`
* `check/finance.bank_account.iban/update.image`
* `check/finance.bank_account.iban/update.information`
* `check/generic.finish/update`
* `check/generic.form/form.view`

* `check/generic.sign/document.approve`
* `check/generic.sign/document.cancel`
* `check/generic.sign/document.decline`
* `check/generic.sign/document.sign`

* `check/generic.sign/document.upload`
* `check/generic.sign/document.view`
* `check/identity.travel_document.text_chip_certificate/liveness.failure`
* `check/identity.travel_document.text_chip_certificate/liveness.start`
* `check/identity.travel_document.text_chip_certificate/liveness.success`
* `check/identity.travel_document.text_chip_certificate/start`


## Signature envelope events

Channel: `signature.envelope`

Events:

* `signature.envelope.create`
* `signature.envelope.document.approve`
* `signature.envelope.document.decline`
* `signature.envelope.document.sign`
* `signature.envelope.sign`
* `signature.envelope.log.generate`
* `signature.envelope.log.seal`
* `signature.envelope.complete`


## Group contact

Channel: `group.contact`

Events:

* `group.contact.create`
* `group.contact.update`
* `group.contact.delete`


## Mail template (CUD) events

Channel: `mail.template`

Events:

* `mail.template.create`
* `mail.template.update`
* `mail.template.reset`
* `mail.template.delete`


## SSO (CUD) events

Channel: `sso`

Events:

* `sso.create`
* `sso.update`
* `sso.delete`

* `saml2.create`
* `saml2.update`
* `saml2.delete`


## Webhook (CUD) events

Channel: `webhook`

Events:

* `webhook.create`
* `webhook.update`
* `webhook.delete`
