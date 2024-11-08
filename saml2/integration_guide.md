# Victoria ID SAML2 integration guide

This document provides a step-by-step guide to integrating user authentication and authorization in your Victoria ID screening portal using SAML2 Identity Providers (IDP). SAML2 is an XML-based framework for exchanging authentication and authorization data between security domains.


## Table of contents

1. [Victoria ID SAML2 integration guide](#victoria-id-saml2-integration-guide)
   1. [Table of contents](#table-of-contents)
   2. [Prerequisites](#prerequisites)
   3. [Step-by-Step Integration](#step-by-step-integration)
      1. [Step 1: Login to the Victoria-id portal and create a new SAML2 configuration](#step-1-login-to-the-victoria-id-portal-and-create-a-new-saml2-configuration)
      2. [Step 2: Export federation metadata from the Victoria ID screening portal](#step-2-export-federation-metadata-from-the-victoria-id-screening-portal)
      3. [Step 3: Configure IDP with exported metadata](#step-3-configure-idp-with-exported-metadata)
      4. [Step 4: Configure Victoria ID screening portal with IDP information](#step-4-configure-victoria-id-screening-portal-with-idp-information)
      5. [Step 5: Test the integration](#step-5-test-the-integration)
      6. [Step 6: Enable SAML2 for all users](#step-6-enable-saml2-for-all-users)
   4. [Advanced options](#advanced-options)
      1. [Encrypt SAML2 assertions](#encrypt-saml2-assertions)
   5. [Additional resources](#additional-resources)


---


## Prerequisites

Before you begin, ensure you have the following:

1. Administrative access to your Victoria ID screening portal (permission `portal.full`).
2. Access to your SAML2 Identity Provider (IDP) details.
3. Basic understanding of SAML2 concepts.


---


## Step-by-Step Integration

### Step 1: Login to the Victoria-id portal and create a new SAML2 configuration

Navigate to **Portal settings -> Single Sign-On --> Go to SAML2 configuration.** For a new configuration we ask for a technical contact email address, enter an email address and click on **Create SAML2 Configuration**.


### Step 2: Export federation metadata from the Victoria ID screening portal

1. **In the Victoria ID SAML2 configuration**: Go to the configuration page, as done in step 1.

2. **Export the metadata**: User the section Service Provider, at the bottom, Find and download the Federation metadata XML file. This file contains information needed for configuring the IDP.


### Step 3: Configure IDP with exported metadata

1. **Login to IDP administration console**: Access the administration console of your Identity Provider.

2. **Import metadata**: Use the federation metadata file exported from your Victoria ID screening portal to configure your IDP. This process typically involves uploading the metadata file and verifying the details.

3. **Verify required information**: Ensure that the following information from the metadata is correctly configured in the IDP:

   - **SP Entity ID**: The unique identifier for your Victoria ID screening portal. (e.g., `https://sp.victoria-id.com/64b84c794f9892e4629e0487/metadata.xml`).

   - **Assertion Consumer Service (ACS) URL**: The URL where your Victoria ID screening portal expects to receive SAML2 assertions (e.g., `https://api.victoria-id.com/saml2/64b84c794f9892e4629e0487/assert/`).

   - **Single Logout Service (SLS) URL**: (Optional) The URL for handling logout requests.

   - **X.509 certificate**: The certificate used to sign SAML2 assertions.

Alternatively all the properties required are show under the **Service Provider (this application)** section in the Victoria ID SAML2 Configuration interface. These properties can be copied using the copy button on the right hand side of each attribute, which allows for a manual configuration.


### Step 4: Configure Victoria ID screening portal with IDP information

1. **Collect IDP information**: Gather the following details from your IDP:

   - **IDP Entity ID**: The unique identifier for your IDP.

   - **SSO URL**: The Single Sign-On URL where authentication requests will be sent.

   - **Logout URL**: (Optional) The URL for handling logout requests.

   - **X.509 certificate**: The certificate used to sign SAML2 assertions.

2. **Enter IDP Information**: Manually enter the IDP details into your Victoria ID screening portal:

   - **IDP Entity ID**: Enter the IDP Entity ID.

   - **SSO sign in URL**: Enter the SSO sign in URL.

   - **SSO sign out URL**: Enter the SSO sign out URL if provided, otherwise enter same URL as login URL.

   - **X.509 certificate**: Upload the IDP's X.509 certificate.

3. **Register claims**: Manually enter the required claims (user attributes) as the are send sent by your IDP

   - **First name claim**: The claim holding the first name of the user.

   - **Last name claim**: The claim holding the last name of the user.

   - **Display name claim** (optional): The claim holding the display name of the user. Will automatically generate display name if left blank.

   - **Groups claim**: The claim holding the groups which are assign to the user.

   - **Gender claim** (optional): The claim holding the gender of the user. Allowed values 'female' / 'f', 'male' / 'm', 'unknown'.

   - **Locale claim** (optional): The claim holding the locale of the user. E.g., 'en_us', 'nl_nl', etc.

4. **Define group mappings**:

Make sure at the IDP that a groups claim is sent and create a mapping for the groups.

 - The external group field is a group as defined in, and sent by the IDP.

 - The portal group is the group in you Victoria ID screening portal.

 - The Permission is the access level of the group.

Multiple mapping can be created by click the **Add group assignment mapping**

5. **Save settings**: Save your SAML2 configuration, by clicking the **Save SAML2 configuration** button.


### Step 5: Test the integration

1. **Initiate SSO**: Attempt to log in using SSO from your Victoria ID screening portal. After the configuration, log yourself out and sign in again. A new button 'Single sign-on' appears. This button should redirect you to the IDP for authentication.

2. **Complete authentication**: Log in with your IDP credentials. Upon successful authentication, you should be redirected back to your Victoria ID screening portal and logged in as the authenticated user.

3. **Verify your access**: Ensure that the groups are correctly mapped and shown in your Victoria ID screening portal.


### Step 6: Enable SAML2 for all users

1. **Grant rights to user at IDP**: Make sure your identity provider is configured so that access for all applicable users is granted to the Victoria ID screening portal.
2. **Notify Users**: Inform your users about the new SSO method and provide them with any necessary instructions.
3. **Monitor**: Monitor the login attempts and resolve any issues users may face during the initial rollout.


---


## Advanced options

### Encrypt SAML2 assertions

We allow for encryption to be sent in an encrypted form. This is not required. Since the transport protocol is SSL (https) we do not required this added security. If your company requires the assertions the be encrypted, check the box **sign login requests** in the Victoria ID SAML2 configuration page.
The IDP should also be configured to encrypt the SAML2 assertion . The certificate used for signing is shown and can be downloaded under the section Service Provider certificate details in the Victoria ID SAML2 configuration page.


---


## Additional resources

- [SAML2 overview](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)

- [Common SAML2 errors and solutions](https://www.samltool.com/generic_sso_error.php)
