# Victoria-ID - SAML2 - Integration guide

This document provides a step-by-step guide to integrating user authentication and authorization in your Victoria-ID screening portal using SAML2 Identity Providers (IdP). SAML2 is an XML-based framework for exchanging authentication and authorization data between security domains.


## Table of contents

1. [Victoria-ID - SAML2 - Integration guide](#victoria-id---saml2---integration-guide)
   1. [Table of contents](#table-of-contents)
   2. [Prerequisites](#prerequisites)
   3. [Step-by-step integration](#step-by-step-integration)
      1. [Step 1: Sign in to the Victoria-ID portal and create a SAML2 configuration](#step-1-sign-in-to-the-victoria-id-portal-and-create-a-saml2-configuration)
      2. [Step 2: Export the federation metadata from the Victoria-ID screening portal](#step-2-export-the-federation-metadata-from-the-victoria-id-screening-portal)
      3. [Step 3: Configure the IdP using the exported metadata](#step-3-configure-the-idp-using-the-exported-metadata)
      4. [Step 4: Configure the Victoria-ID screening portal using the IdP information](#step-4-configure-the-victoria-id-screening-portal-using-the-idp-information)
      5. [Step 5: Test the integration](#step-5-test-the-integration)
      6. [Step 6: Enable SAML2 for all users](#step-6-enable-saml2-for-all-users)
   4. [Advanced options](#advanced-options)
      1. [Encrypt SAML2 assertions](#encrypt-saml2-assertions)
   5. [Additional resources](#additional-resources)


---


## Prerequisites

Before you begin, ensure that you have the following:

* Administrative access to your Victoria-ID screening portal (`portal.full` permission).

* Access to the details of your SAML2 Identity Provider (IdP).

* A basic understanding of SAML2 concepts.


---


## Step-by-step integration

### Step 1: Sign in to the Victoria-ID portal and create a SAML2 configuration

Navigate to **Portal settings → Single Sign-On → SAML2 configuration**.

To create a new configuration, enter the email address of a technical contact and click **Create SAML2 configuration**.


### Step 2: Export the federation metadata from the Victoria-ID screening portal

1. **In the Victoria-ID SAML2 configuration**: Go to the SAML2 configuration page as described in step 1.

2. **Export the metadata**

   In the **Service Provider** section, find and download the federation metadata XML file. This file contains the information required to configure the IdP.


### Step 3: Configure the IdP using the exported metadata

1. **Login to IDP administration console**

   Sign in to the administration console of your Identity Provider.

2. **Import metadata**

   Import the federation metadata file exported from the Victoria-ID screening portal. This process typically involves uploading the metadata file and verifying the imported details.

3. **Verify required information**

   Ensure that the following information from the metadata is correctly configured in the IdP:

   * **SP Entity ID**

     The unique identifier of your Victoria-ID screening portal, for example:
     `https://sp.victoria-id.com/64b84c794f9892e4629e0487/metadata.xml`

   * **Assertion Consumer Service (ACS) URL**

     The URL at which the Victoria-ID screening portal receives SAML2 assertions, for example:
     `https://api.victoria-id.com/saml2/64b84c794f9892e4629e0487/assert/`

   * **Single Logout Service (SLS) URL**

     Optional. The URL for handling logout requests.

   * **X.509 certificate**

     The certificate used to sign SAML2 assertions.

Alternatively, all required properties are displayed in the **Service Provider (this application)** section of the Victoria-ID SAML2 configuration interface. These properties can be copied using the copy button to the right of each attribute, allowing the IdP to be configured manually.


### Step 4: Configure the Victoria-ID screening portal using the IdP information

1. **Collect IdP information**

   Collect the following details from your IdP:

   * **IdP Entity ID:** The unique identifier of your IdP.

   * **SSO URL:** The Single Sign-On URL to which authentication requests are sent.

   * **Logout URL:** Optional. The URL for handling logout requests.

   * **X.509 certificate:** The certificate used to sign SAML2 assertions.


2. **Enter IdP Information**

   Manually enter the IdP details in the Victoria-ID screening portal:

   * **IdP Entity ID:** Enter the IdP Entity ID.

   * **SSO sign-in URL:** Enter the SSO sign-in URL.

   * **SSO sign-out URL:** Enter the SSO sign-out URL, if provided. Otherwise, enter the same URL as the sign-in URL.

   * **X.509 certificate:** Upload the IdP’s X.509 certificate.


3. **Register claims**

   Manually enter the required claims (user attributes) exactly as they are sent by your IdP:

   * **First name claim:** The claim containing the user’s first name.

   * **Last name claim:** The claim containing the user’s last name.

   * **Display name claim (optional):** The claim containing the user’s display name. A display name is generated automatically if this field is left blank.

   * **Groups claim:** The claim containing the groups assigned to the user.

   * **Gender claim (optional):** The claim containing the user’s gender. Allowed values are `female` or `f`, `male` or `m`, and `unknown`.

   * **Locale claim (optional):** The claim containing the user’s locale, for example `en_us` or `nl_nl`.


4. **Define group mappings**:

   Ensure that the IdP sends a groups claim, and then create the required group mappings:

   * **External group:** A group defined in and sent by the IdP.

   * **Portal group:** The corresponding group in your Victoria-ID screening portal.

   * **Roles:** The roles to assign the user within the group.

   Multiple mappings can be created by clicking **Add group assignment mapping**.


5. **Save settings**

   Save the configuration by clicking **Save SAML2 configuration**.


### Step 5: Test the integration

1. **Initiate SSO**

   Sign out of the Victoria-ID screening portal and sign in again. A new **Single sign-on** button should be displayed. Click this button to be redirected to the IdP for authentication.

2. **Complete authentication**

   Sign in using your IdP credentials. After successful authentication, you should be redirected to the Victoria-ID screening portal and logged in as the authenticated user.

3. **Verify your access**

   Verify that the groups are correctly mapped and displayed in the Victoria-ID screening portal.


### Step 6: Enable SAML2 for all users

1. **Grant users access in the IdP**

   Ensure that your Identity Provider grants all applicable users access to the Victoria-ID screening portal.

2. **Notify users**

   Inform users about the new SSO method and provide any necessary instructions.

3. **Monitor the rollout**

   Monitor login attempts and resolve any issues encountered during the initial rollout.


---


## Advanced options

### Encrypt SAML2 assertions

SAML2 assertions can be sent in encrypted form. This is optional. Because the transport protocol uses SSL/TLS (`https`), this additional security measure is not required by Victoria-ID.

If your organisation requires encrypted assertions, select the relevant option on the Victoria-ID SAML2 configuration page. The IdP must also be configured to encrypt the SAML2 assertions.

The Service Provider certificate is displayed and can be downloaded from the **Service Provider certificate details** section of the Victoria-ID SAML2 configuration page.


---


## Additional resources

- [SAML2 overview](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)

- [Common SAML2 errors and solutions](https://www.samltool.com/generic_sso_error.php)
