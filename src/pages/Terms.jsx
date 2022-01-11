import { motion } from "framer-motion";
import React from "react";
import aboutstyles from "../styles/about.module.css";
import styles from "../styles/terms.module.css";
const Terms = () => {
  return (
    <div className={`${aboutstyles.container}  fluid-container`}>
      <div className={aboutstyles.headerSection}>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Terms & Conditions
        </motion.h1>
        <img src="/svg/wave.svg" alt="wave" className={aboutstyles.waveImg} />
      </div>
      <div className={styles.innerContainer}>
        <div>
          <p>
            {`Welcome to Milo Live Entertainment (MILO LIVE , "we", "our" or "us") a company with its registered address at H-57,Najafgarh,New Delhi, INDIA (110043), These Terms of Use (together with Our Privacy Policy, and Community Guidelines, the “Terms”) govern your access and use of (the “Site”) and all other products, services, features, content or applications that link to these Terms (together with the Site, the “Services” “Service”) offered by Milo Live Entertainment.

​Please read these Terms fully and carefully before using the Services, because these Terms form a legally binding contract between you and MILO LIVE for your use of the Services

​By using the Services, you agree to be bound by these Terms. From time to time, we may modify or update these Terms, which would become effective upon posting through our Services. If you use the Services after any such change, you accept these Terms as modified.

​In other words: By using anything offered by MILO LIVE, you automatically agree to this legal agreement. You also accept any updated version of this agreement by continuing to use the Services.

​IF AT ANY TIME YOU DO NOT AGREE TO ANY OF THE TERMS, YOU MAY NOT USE THE SERVICES AND MUST IMMEDIATELY TERMINATE YOUR USE OF ALL SERVICES.`}
          </p>
          <h4>1. Acknowledgment.</h4>
          1.1 This paragraph is intended to apply to you if you have downloaded
          the Services from the Android Play Store. MILO LIVE and you
          acknowledge that these Terms are agreed between MILO LIVE and you
          only, and not between you and Google Inc. (“Google”), or between MILO
          LIVE and Google. MILO LIVE, not Google, is solely responsible for the
          Services and the content thereof. These Terms are not intended to
          provide for usage rules for the Services that are less restrictive
          than (or otherwise be in conflict with) the Usage Rules set forth for
          Licensed Applications in the Play Store Terms of Service as of the
          date hereof (which you further acknowledge you have had the
          opportunity to review).
          <h4>2. License Grant.</h4>
          2.1 Subject to your compliance with the Terms, MILO LIVE grants you a
          personal, limited, non-commercial, non-exclusive, non-sub licensable,
          non-assignable, non-transferable, freely revocable license to
          download, install and use one (1) copy of the Service, in object code
          format, only on your personal computer or personal mobile device (if
          you have downloaded the Service from the Android Play Store as
          permitted by the Usage Rules set forth in the Play Store Terms of
          Service as of the date hereof, then only on your “Device”) for the
          sole purpose of personally using the MILO LIVE application and any
          other applications that may be explicitly authorized by MILO LIVE for
          use through the Service.
          <h4>3. Ownership.</h4>
          3.1 The Service is protected by copyright laws and international
          copyright treaties, as well as other intellectual property laws and
          treaties. The Service includes trade secrets and information that is
          confidential and proprietary to MILO LIVE and you agree to take all
          necessary actions to protect the confidentiality of such information.
          All ownership rights in the Services, including any related
          documentation and any new releases, modifications, and enhancements
          thereto belong solely to MILO LIVE and its licensors, if any,
          including all intellectual property rights therein. The Services are
          licensed, not sold. Title does not pass to you. There is no implied
          license, right or interest granted in any copyright, patent, trade
          secret, trademark, invention or other intellectual property right.
          MILO LIVE hereby expressly reserves all rights in the Services which
          are not expressly granted to you hereunder.
          <h4>4. Restrictions.</h4>
          {`4.1 You may use the Services solely for purposes of enabling you to use and enjoy the Services, and as permitted by the Terms. You only obtain a license to use the object code version of the Services.
   4.2 You shall not:
   4.2.1 copy, modify, adapt, translate into any language, distribute, or create derivative works based on any of the Services;
   4.2.2 incorporate any portion of the Services into your own programs or compile any portion of it in combination with your own programs or transfer it for use with another service or program;
   4.2.3 sublicense, sublease, lease, lend, assign, sell, license, distribute, rent, export, re-export or grant other rights in the Services;
   4.2.4 decompile, disassemble, reverse engineer, or attempt to reconstruct, identify, or discover any source code, underlying ideas, underlying user interface techniques, or algorithms of the Services by any means whatsoever;
   4.2.5 remove, obscure or alter any copyright and/or other proprietary notices contained on or in or otherwise connected to the Services;
   or 4.2.6 use the Services to create or proliferate a virus or to circumvent any copy protection or other digital rights management mechanism.`}
          <h4>5. Additional Restrictions.</h4>
          {`5.1 You further represent that you shall not: 5.1.1 use any of the Services in violation of any applicable law or for any illegal or unauthorized purpose;
              5.1.2 use any of the Services in any manner which could damage, disable, overburden or impair any of the Services;
              5.1.3 use any automated system, including without limitation “robots,” “spiders,” “offline readers,” etc., to access any of the Services in a manner that sends more request messages to the MILO LIVE servers than a human can reasonably produce in the same period of time manually;
              5.1.4 transmit invalid data, worms, viruses or any code of a destructive nature;
              5.1.5 transmit spam, chain letters, materials related to any political campaigns, commercial solicitations, mass mailings, or any other form of unsolicited texts or emails;
              5.1.6 display, transmit or share any content consisting of data, text, sounds, audio, pictures, photos, video, sound recordings, musical works, narration, Broadcast Content (as defined in Section 13 below), works of authorship and/or any type of materials, information or communications (“Content”) deemed unlawful, harmful, threatening, pornographic, obscene, sexually explicit, abusive, racially or ethnically or otherwise offensive, libelous or defamatory, infringing, invasive of personal privacy or publicity rights, harassing, bullying, depicting or inciting violence (including suicide), hate speech, humiliating to other people (publicly or otherwise), profane, injurious or otherwise objectionable, or any Content that encourages conduct that would be considered a criminal offense or bring forth civil liability;
              5.1.7 attempt to hack, destabilize, adapt or otherwise interfere with MILO LIVE ’s website, or any of the Services, or alter another website or mobile app so as to falsely imply that it is affiliated with MILO LIVE ;
              5.1.8 collect or harvest any personally identifiable information, including account names, from any of the Services;
              5.1.9 use a false phone number or email, or impersonate another person or entity, or otherwise misrepresent your affiliation with a person or entity, conduct fraud, hide or attempt to hide your identity; or
              5.1.10 use or access any of the Services by any means other than through the interface provided by MILO LIVE .`}
          <h4>6. Sanctions.</h4>
          {`6.1 Users are required to comply with all applicable laws. 
            6.2 Users may only access the Services in compliance with these laws. 
            6.3 Persons who are from, located in, or ordinarily resident in countries or regions subject to sanctions banning such services are prohibited from accessing or using the Services absent a license or other government approval or authorization. 
            6.4 MILO LIVE has the right to deny access to, or terminate its relationship with, any person that fails to comply with these laws.`}
          <h4>7. Eligibility.</h4>
          {`7.1 The license to use the Services is not valid in any jurisdiction where prohibited. The Services are intended solely for users who are eighteen (18) years of age or older, and if you are not subject to statutory age limit to enter into this Agreement according to the applicable laws and regulations in your country, and any registration, use or access to the Services by anyone under eighteen (18) is unauthorized, unlicensed, and in violation of these Terms.
7.2 You may not falsely claim you have reached the minimum age.
7.3 MILO LIVE may terminate your account, delete any content or information that you have posted on the Services, and/or prohibit you from using or accessing the Services (or any portion, aspect or feature of the Services) for any reason or for no reason, at any time at its sole discretion, with or without notice, including without limitation if it believes that you are under the required age as defined in the prior clauses. If you are under the age of majority in your jurisdiction you may use the Software and Services only if you either are an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into and abide by the provisions set forth in the Terms. The Software and Services are not intended for use by any user previously removed from any of the Services by MILO LIVE.
7.4 Do not use the Services if it would mean breaking the law in the jurisdiction of your domicile.`}
          <h4>8. Your Utilization of Your Device.</h4>
          {`8.1 If your use of the Services is dependent upon the use of bandwidth owned or controlled by a third party, you acknowledge and agree that your license to use the Services is subject to your obtaining consent from the relevant third party for such use and by using the Services you warrant that you have obtained such consent. 
          8.2 In addition, you warrant that you own the Device to which you are downloading the Services, or that you have the legal right to control the use of that Device. 
          8.3 You further agree to ensure that any other person whom you permit to use the Services on your Device will do so in accordance with these Terms. 8.4 You must delete any Services from the Device if you sell the Device, or if you cease to have the legal right to control use of the Device.`}
          <h4>9. Your Account.</h4>
          {`9.1 You may need to sign up for a MILO LIVE account in order to use parts of the Services. You must provide accurate and up to date information for your account.
9.2 You promise not to:
9.2.1 intentionally impersonate another person by using their name or email address;
9.2.2use an offensive name or email address;
9.2.3 use a name or email address for which you do not have proper authorization.
9.3 We reserve the right to require that you change your username or use another email address.
9.4 You are prohibited from using another person’s account or registration information for the Services without their permission.
9.5 You are responsible for all activity that occurs on your account, and for keeping your password secure. We encourage you to use “strong” passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account and with other accounts you may connect to your MILO LIVE account.
9.6 You promise to immediately let us know if there is any unauthorized use of your account.
9.7 MILO LIVE cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
9.8 You can delete your account at any time, either directly or through a request to us.`}
          <h4>10. Content.</h4>
          {`10.1 Content transmitted by the use of the Services is entirely the responsibility of the person from whom such Content originated.
10.2 You use the Services at your own risk and understand that by using the Services, you may be exposed to Content that is offensive, harmful to minors, indecent or otherwise objectionable.
10.3 Any use or reliance on any Content is solely at your own risk. MILO LIVE does not endorse any Content and expressly disclaims any and all liability in connection with any and all Content transmitted or displayed using the Software and/or Services.
10.4 You hereby release and discharge the MILO LIVE Parties (as defined below) from any and all claims and demands arising out of or relating to any Content.
10.5 The Services enable you to create, transmit, and view live stream audiovisual content (“Broadcast Content”). You acknowledge and agree that MILO LIVE does not pre-screen any Broadcast Content transmitted by any user.`}
          <h4>11. Content You Contribute, Your Content.</h4>
          {`11.1 You acknowledge and agree that you are solely responsible for your Content and any Content that you transmit or display through the Services (“User Content”) and that MILO LIVE (and Googleif you downloaded the Service from the Android Play Store) is not responsible to you or any third party in connection with any Content.
11.2 You are solely responsible for all of the content you contribute to the Services (“User Content”) and you (not MILO LIVE ) own your User Content.
11.3 You hereby do and shall grant us a non-exclusive, worldwide, perpetual, royalty-free, fully paid, transferable, sublicensable right to use, modify, reproduce, distribute, prepare derivative works of, display, perform and otherwise fully exploit such User Content (including all related intellectual property rights) in connection with the Services and our business. You promise that you have all rights to grant such license to us without infringement or violation of any third party rights.
11.4 If you contribute User Content through a public part of the Services, you acknowledge that such User Content will be accessible to other users.
11.5 Please do not publicly post or submit any User Content that you do not want publicly accessible or viewable, or that you do not have rights to post.
11.6 MILO LIVE reserves the right (but not the obligation) to remove, edit or refuse to transmit any Content for the purpose of enforcing the Terms, or for any other reason in MILO LIVE ’s sole discretion without committing to regularly reviewing Content.
11.7 You further agree to pay for all royalties, fees, and any other monies owing any person by reason of any of your Content. In addition, you represent and warrant that: 11.7.1 you are the creator and owner of or have the necessary rights to transmit or display the Content; and
11.7.2 the Content you transmit or you display does not and will not:
11.7.2.1 infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, mask work right, moral right, privacy right, right of publicity, trade dress and service mark right, goodwill, or any other intellectual property or proprietary right as may now exist or hereafter come into existence;
11.7.2.2 require MILO LIVE to obtain any further licenses from or pay any royalties, fees, compensation or other amounts or provide any attribution to any third parties;
11.7.2.3 result in a breach of contract between you and a third party or be in violation of any applicable law or regulation;
11.7.2.4 contain any information that is confidential or proprietary to a third party; or
11.7.2.5 slander, defame, libel, or invade the right of privacy, publicity or other property rights of any other person.
11.8 VIOLATORS OF THESE THIRD-PARTY RIGHTS MAY BE SUBJECT TO CRIMINAL AND CIVIL LIABILITY. MILO LIVE RESERVES ALL RIGHTS AND REMEDIES AGAINST ANYONE WHO VIOLATES ANY OF THE PROVISIONS OF THE TERMS.`}
          <h4>12. Grant of Rights to MILO LIVE.</h4>
          {`12.1 If you transmit or share your Content in the Services or otherwise share your Content with or link your Content to the Services, for example, through Reference Sites or other third-party applications connected to your MILO LIVE account, you represent and warrant that you have all rights necessary to grant, and you hereby expressly grant, to MILO LIVE , its licensors and other MILO LIVE partners a royalty-free, sub licensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, host, store, reproduce, modify, adapt, publish, list information regarding, edit, translate, distribute, syndicate, publicly perform, publicly display, transmit, communicate to the public, make available, make derivative works of, and otherwise exploit and use, all such Content and any name, voice, image and/or likeness as contained in your Content, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Services and MILO LIVE ’s (and its successors’ and affiliates’) businesses, including without limitation for promoting and redistributing part or all of the Services (and derivative works thereof) in any media formats and through any media channels. For clarity, the rights granted by you in this Section to MILO LIVE include the right to reproduce your Content on a royalty-free basis and that MILO LIVE will have no obligation to pay royalties to you or any third party involved in the creation of your Content. Further, you understand that the license granted by you to MILO LIVE here under will survive any termination of your use of the Services.
12.2 Any Content transmitted by you or through the Service or to MILO LIVE will be considered non-confidential and non-proprietary, and treated as such by MILO LIVE , and may be used by MILO LIVE in accordance with these Terms without notice to you and without any liability to MILO LIVE . You waive any rights to prior inspection or approval of any marketing or promotional materials related to any Content. You also waive any and all rights of privacy, publicity, or any other rights of a similar nature in connection with your Content, or any portion thereof. To the extent any moral rights are not transferable or assignable, you hereby waive and agree never to assert any and all moral rights, or to support, maintain or permit any action based on any moral rights that you may have in or with respect to any Content you transmit or display through the Services.
12.3 You agree and acknowledge that Content you transmit through the Services may be distributed, viewed and accessed and commented upon by other users of the Services and that MILO LIVE will not be held liable for any unauthorized use of Content or comment thereon by any person.
12.4 You acknowledge and agree that MILO LIVE may collect, use and share information related to your use of the Services as described in the Privacy Policy, including certain information contained in the Devices to which you have downloaded the Software for purposes of your use of the Services, such as the address books and unique phone identifiers (IMEI, Google Advertisements ID or others) contained in such Devices.
12.5 You hereby acknowledge and agree that MILO LIVE may contact you via email, SMS or otherwise for the purpose of informing you about new products, services or promotions offered by MILO LIVE (you can opt-out of such emails by clicking on the unsubscribe link or of such SMSs by replying stop). Please see our Privacy Policy for additional information on how we may contact you.`}
          <h4>13. Live Streaming.</h4>
          {`
          13.2 The Services may offer Virtual Items related features allowing you to: 13.2.1 “Purchase” virtual currency (“Coins”) for use in the Service, the total balance of which is visible in your “Coin Balance”;
          13.2.2 “Purchase” virtual in-Service items (“Gifts”). You acknowledge and agree that the purchase of any Gifts by you must be made lawfully and with actual currency. Any Gifts that are gifted to another user in the Services (or received by you) are converted in the receiving user’s account “Withdraw Balance”;
          13.2.3 “Diamonds” are rewarded to users when they carry out various activities and cannot be converted to Coins or Gifts. The reward diamonds are non-refundable, non-exchangeable and can only be used within the Services;
          13.2.4 Coins, Gifts and Diamonds are referred to herein collectively as “Virtual Items.” Notwithstanding your purchase or possession of Virtual Items, you acknowledge and agree that you do not in fact own the Virtual Items, and the amounts of any Virtual Items in your MILO LIVE account do not refer to any credit balance of real currency or its equivalent. Instead, you understand that the license to you from MILO LIVE hereunder to use the Services includes the right to use certain software programs included in the Services that may manifest themselves as these virtual items.
          13.3 Any distribution of Gifts by you is made solely at your discretion. Once you have made a distribution of a Gift to another user, such action cannot be refunded or undone, and the Gift cannot be withdrawn.
          13.4 You acknowledge and agree that your distribution of Gifts may result in some revenue to a “Receiving User” of the Services:
          13.4.1 MILO LIVE makes no representation or guarantee that the amount or value in your MILO LIVE account of any Gift you distribute to a Receiving User will correlate in any way to the revenue such Receiving User may receive from MILO LIVE ;
          13.4.2 The amount of revenue delivered to a Receiving User is in USD and is determined by MILO LIVE at its sole discretion;
          13.4.3 Additional Bonuses may be awarded to Receiving Users when certain targets are met.
          13.5 The purchase of a Gift is considered a completed transaction when MILO LIVE provides confirmation of receipt of an electronic payment from you via the online application store from which you downloaded the Services (the “Application Store”). The purchase of Gifts requires actual money. If you disagree with any part of, or do not fully understand MILO LIVE’s exchange rate policy as described below, please refrain from purchasing or using any Virtual Items.
          13.6 The value (i.e. the exchange rate) of Virtual Items is determined by MILO LIVE in its sole discretion, and MILO LIVE further reserves the right to modify the exchange rate between actual currency and Virtual Products from time to time, with or without reason, in its sole discretion. By your use of the Services, you confirm your understanding of and accept the then-current exchange rate of any Virtual Items at the time of your purchase.
          13.7 Any virtual currency balance shown in your MILO LIVE account does not constitute a real world balance or reflect any stored value. You will not be able to sell Virtual Items, whether in exchange for virtual or real currency credited back to your MILO LIVE account or otherwise, nor will you be able to receive a refund of virtual or real currency for Virtual Items (including any virtual currency), including if your access to the Services has been suspended, limited or terminated by you or by MILO LIVE.
          13.8 In the event your MILO LIVE account balance with respect to Virtual Items is incorrect due to system maintenance or other technical failures as determined by MILO LIVE in its sole discretion, MILO LIVE will employ commercially reasonable efforts to correct your MILO LIVE account balance. You may contact us regarding your MILO LIVE account balance, purchases of Virtual Items and/or distributions of Gifts at.
          13.9 Your use of any Virtual Items must be solely for legitimate purposes within the Services, and must comply with these Terms and with all applicable laws at all times. You acknowledge and agree that MILO LIVE may change, modify or update the terms of sale in connection with Virtual Items from time to time, and that such revised terms will apply to all subsequent purchases of any Virtual Items, and you further agree that you will review these Terms and any terms regarding the sale of Virtual Items prior to making any purchase.
          13.10 PERMANENT REMOVAL OF VIRTUAL ITEMS FROM MILO LIVE ACCOUNT: Please note that in addition to taking any desirable or necessary legal action, MILO LIVE reserves the right to terminate your use of the Services and/or to permanently confiscate any Virtual Items from your MILO LIVE account that it determines, in its sole discretion, were acquired using fraudulent or otherwise improper means. MILO LIVE will notify you prior to such confiscation in order to provide an opportunity for you to make an appeal via the Services; provided, however, that MILO LIVE ’s determination, in its sole discretion, shall be final and binding upon you.
          13.11 In addition, any diamonds and coins received to your MILO LIVE account that have not been redeemed within 365 days (366 days) from the date of such receiving will permanently expire from your account.
          `}
          <h4>14. Premium Services.</h4>
          {`
            14.1 From time to time in its sole discretion, MILO LIVE may provide additional features and/or Services that you pay for (“Premium Services”). MILO LIVE may also offer from time to time in its sole discretion, certain Premium Services for free, whether on a limited basis, for a trial period or otherwise. If you purchase any Premium Services, you hereby agree to pay all charges to your account, including applicable taxes, in accordance with billing terms in effect at the time the charges are payable and whether charged by MILO LIVE or the Application Store. You agree to abide by any relevant terms of service or other legal agreement that governs your use of a given payment processing service and/or method. If you purchase Premium Services on a subscription basis, you acknowledge and agree that this is a recurring payment and payments shall be made by the payment method and payment intervals you have selected, until the subscription for the Premium Services is terminated. You agree that if you purchase Premium Services through an Application Store, all payment related questions, issues, disagreements and/or disputes shall be handled in accordance with the terms of service or other legal agreement that governs your use of the given payment processing service and/or method, and in no event will MILO LIVE have any responsibility in connection with any of the foregoing.
14.2 You may request a full refund for any Premium Service purchased from an Application Store if permitted by, and pursuant to the refund rules of, the Application Store. MILO LIVE has no responsibility in this connection.
            `}
          <h4>15. Third Parties.</h4>
          {`
          15.1 The Software may be incorporated into, and may incorporate itself with software and other technology owned and controlled by third parties. Any such third party software or technology that is incorporated in the Software falls under the scope of these Terms. 17. Availability and New Versions of the Services.
         `}
          <h4>16. Third-Party Sites, Products and Services; Links.</h4>
          {`
            16.1 The Services may include links or references to third-party web sites or applications offering products or services, including games, applications, third party shopping merchants, images, special offers, or other events or activities, that are operated and maintained by other persons and/or that are not owned by MILO LIVE (“Reference Sites“). The Terms do not apply to Reference Sites. Please be aware when you visit or use any Reference Sites, and we encourage you to read the terms and conditions and privacy policies of any Reference Sites that you visit or use.
16.2 MILO LIVE does not assume any responsibility for Reference Sites. Access and use of Reference Sites, including the information, materials, products, and services on or available through reference sites is solely at your own risk. You expressly relieve MILO LIVE from any and all liability arising from your use of any Reference Sites. MILO LIVE is not responsible for and does not control or guarantee:
16.2.1 The pricing, quality, performance, availability or terms and conditions of purchase of products or services provided by Reference Sites; 16.2.2 Any payment transactions, shipping charges, deliveries, returns or after sales activities related to the products or services purchased on Reference Sites; 16.2.3 The availability of Reference Sites;
16.2.4 The completeness, truth or accuracy of any advertising or other materials on, or available from, Reference Sites, nor any listing or other content about such products or services displayed on Reference Sites;
16.2.5 Any questions, complaints, or claims related to any product or service provided by a Reference Site should be directed to the applicable third party responsible for the Reference Site.
            `}
          <h4>17. Services</h4>
          {`
             17.1 MILO LIVE may, without prior notice, stop providing the Services, features of the Services, and/or any of the Services, to you or to users generally, or create usage limits for the Services.
             17.2 MILO LIVE , in its sole discretion, reserves the right to add additional features or functions, or to modify or provide programming fixes, updates and upgrades, to the Services without notice.
             17.3 MILO LIVE has no obligation to make available to you any additional features or functions or any modifications, updates, support, maintenance or subsequent versions of the Services.
             17.4 You may have to agree to a renewed version of some or all of the Terms in the event you want to download, install or use any additional features or functions or any modifications, updates or new versions of the Services.
             17.5 You acknowledge that MILO LIVE may automatically issue any additional features or functions or modifications, updates or upgraded versions of the Services and, accordingly, may modify, update or upgrade the version of the Services that you are using or have installed on your Device.
             17.6 You hereby agree that your Device may automatically request and/or receive such modifications, upgrades or updates.
             `}
          <h4>18. Withdrawals.</h4>
          {`18.1 Users can raise immediate cash out withdrawal requests via the Redeem section of the services provided:
18.1.1 The immediate withdrawal facility is available in their respective region; 18.1.2 They have a minimum withdrawable balance greater than fifty four hundred (5400) INR; and
18.1.3 They have not exceeded the daily withdrawal limit of ten lakhs eighty thousands (1080000) INR
18.2 Users are liable to pay any levies / taxes in the jurisdiction they reside in, including but not limited to payment gateway processing charges.
18.3 In situations where the servicing of immediate cash out requests is not possible users can send an email to support@Milolives.com with details to process a wire transfer. The minimum amount for a wire transfer is forty thousand (40,000) INR, less bank transfer charges.`}
          <h4>19. Refunds.</h4>
          {`19.1 MILO LIVE does not entertain an official refunds policy. Due to the nature of the app, if any virtual coins are purchased and subsequently a refund is requested, then a loss will be incurred by any users who have received virtual gifts or other items from the user who requested the refund.
19.2 In the event, that there is an error in the Services provided by us, we may refund the amount in question, provided the reasons are genuine and proved after investigation by MILO LIVE .
19.3 We will try our best to create the best user experience for you. However, in situations where it is necessary for MILO LIVE to issue a refund then said refund amount will be credited to the appropriate User Account.`}
          <h4>20. Third Party Fees.</h4>
          20.1 For particular Devices, MILO LIVE may ask your permission to use
          your native SMS application to deliver messages or invitations to
          people who are not registered users of the Services and with whom you
          choose to communicate. Some of these services may charge additional
          fees.
          <h4>21. No Access to Emergency Services.</h4>
          {`21.1 The Services are not intended to support or carry emergency calls to any type of hospitals, law enforcement agencies, medical care units or any other kind of services that connect a user to emergency services personnel or public safety answering points (“Emergency Services”) pursuant to applicable local and or national regulatory requirements.
21.2 There are important differences between traditional telephone services and the Services provided by MILO LIVE. You acknowledge and agree that:
21.2.1 MILO LIVE is not required to offer access to Emergency Services under any applicable local and/or national rules, regulations or law;
21.2.2 it is your responsibility to purchase, separately from the Software, traditional wireless (cellular) or fixed line telephone services that offer access to Emergency Services; and
21.2.3 MILO LIVE is not a replacement for your primary telephone service.`}
          <h4>22. Prevention of Unauthorized Use.</h4>
          22.1 MILO LIVE reserves the right to exercise whatever lawful means it
          deems necessary to prevent unauthorized use of the Services,
          including, but not limited to, technological barriers, IP mapping, and
          directly contacting your wireless (cellular) carrier regarding such
          unauthorized use.
          <h4>23. Mobile Alerts.</h4>
          23.1 MILO LIVE may use carrier distributed mobile messaging (SMS) to
          verify ownership of a registered mobile phone number.
          <h4>24. Termination by You.</h4>
          {`24.1 You may terminate your use of the Services at any time by uninstalling and deleting the Software from all of your Devices.
24.2 If you have subscribed to any Premium Services, you agree that you are solely responsible for directly terminating all payment obligations you may have with any Application Store and/or payment processing service in connection with the Premium Services.
`}
          <h4>25. Termination by MILO LIVE.</h4>
          {`25.1 Without limiting any other remedies, MILO LIVE may modify, limit, suspend, discontinue or terminate any of the Terms and/or your use of all or any part of the Services, with immediate effect, automatically, with or without notice and without recourse to the courts or other tribunals, for any reason or for no reason, without limitation, if MILO LIVE believes that you are:
25.1.1 in breach of any of the Terms;
25.1.2 Creating problems or legal liabilities (actual or potential);
25.1.3 Delinquent with respect to any charges due for a Premium Service;
25.1.4 Infringing a third party’s intellectual property rights; or
23.1.5 Engaging in fraudulent, immoral or illegal activities.
25.2 You agree that MILO LIVE is under no obligation to provide the Services, including without limitation any Premium Services, and that no MILO LIVE Party shall be liable to you or to any other party for any limitation, suspension, discontinuance, termination or modification of the Services.`}
          <h4>26. Storage of Content.</h4>
          {`26.1 Storage space is inherently limited and as a result we are careful not to overload our servers.
26.2 Accordingly, you acknowledge and agree that no MILO LIVE Party is under any obligation to preserve, provide access to or return to you any Content and that MILO LIVE shall have no responsibility for the modification, loss, deletion or destruction of any Content, including any stored Content.
26.3 You further understand and agree that MILO LIVE may remove certain Content from its storage systems periodically at its discretion without notice to you.`}
          <h4>27. Indemnification.</h4>
          {`27.1 You hereby agree to indemnify, defend and hold harmless, MILO LIVE, its licensors, its agents, its partners, and its and their respective affiliates, officers, directors, employees, contractors and suppliers (collectively the “MILO LIVE parties”), from and against any and all claims, obligations, actions, losses, liability, damages and costs, including but not limited to reasonable attorneys’ fees incurred by such parties, in connection with or arising out of:
27.1.1 Your violation or breach of any term of the terms and conditions or any applicable law, rule or regulation, whether or not referenced herein;
27.1.2 Your violation of any rights of any third party;
27.1.3 Your use or misuse of the software and/or any of the services;
27.1.4 Your content or other communication displayed or transmitted by means of the software and/or any of the services;
27.1.5 Any other party’s access and use/misuse of the software, services and/or content with your phone number or username; or
27.1.6 Dispute on any taxes related to your purchase and/or use of any of the services (other than taxes based on the income of MILO LIVE ).
27.2 If you downloaded the Services from the Android Play Store, you acknowledge that, in the event of any third party claim that the Services or your possession and use of the Services infringes any third party’s intellectual property rights, between MILO LIVE and Google, MILO LIVE , not Google, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim.
27.3 MILO LIVE reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify MILO LIVE , and you agree to cooperate with MILO LIVE ’s defense of these claims.
27.4 You agree not to settle any matter without the prior written consent of MILO LIVE.`}
          <h4>28. NO WARRANTIES.</h4>
          {`28.1 The Services are provided to you “AS IS” and “AS AVAILABLE” with no warranties. To the maximum extent permitted by law, the MILO LIVE Parties hereby disclaim all warranties, terms, and conditions, express or implied, either in fact or by operation of law, statutory or otherwise, including, without limitation, warranties, terms or conditions of merchantability, fitness for a particular purpose, satisfactory quality, correspondence with description, title, non-infringement, and accuracy of information generated. You further acknowledge that the MILO LIVE Parties (and if you downloaded the Services from the Android Play Store, Google) have no obligation whatsoever to furnish any maintenance or support services with respect to the Services.
28.2 The MILO LIVE parties do not warrant that the services or the content displayed or transmitted on or through any of the services, will be uninterrupted, up-to-date, complete or free of errors, viruses or other harmful components, and do not warrant that any of the foregoing will be corrected. The MILO LIVE parties do not warrant or make any representations regarding the use of, or the results from the use of, the services.
28.3 Harm to your device: you understand and agree that you transmit, display, store, view or receive content through the service at your own discretion and risk and that you will be solely responsible for any damage that results from the service or any content, including any loss of data or damage to your property (including your device and computer system).
28.4 Limitations of liability: To the maximum extent permitted by applicable law, in no event shall the MILO LIVE parties be liable, whether based in contract, tort (including negligence), or any other legal theory, for any indirect, incidental, consequential, exemplary or punitive damages or losses of any nature, including without limitation any damages or losses for lost revenue or profits, loss of business, loss of goodwill, loss of data, work stoppage, accuracy of results or device or computer failure or malfunction arising out of or in connection with the software and/or any of the services, the terms and conditions or the performance, suspension, termination or breach hereof, even if MILO LIVE or any other MILO LIVE party has been advised of or should have known of the possibility thereof. In no event shall the aggregate liability of the MILO LIVE parties exceed the amount you paid to MILO LIVE for any products or services purchased from MILO LIVE on any of the services during the six (6) month period immediately preceding any claim. The foregoing limitations will apply even if the above stated remedy fails of its essential purpose. As some jurisdictions do not allow some of the exclusions or limitations set forth above, some of these exclusions or limitations may not apply to you. in such an event the liability of the MILO LIVE parties will be limited to the maximum extent possible under applicable law. These limitations of liability also apply with respect to damages incurred by you by reason of any products, software, services or content sold or provided by third parties and received through or advertised on any of the services.
28.4 Claims: you and MILO LIVE agree that any cause of action arising out of or related to any of the services must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred. If you downloaded the service from the Android Play store, you further acknowledge that Google has no responsibility for addressing any claims relating to the services or your possession and/or use of the services, including, but not limited to:
28.4.1 product liability claims;
28.4.2 any claim that the Services fail to conform to any applicable legal or regulatory requirement; and
28.4.3 claims arising under consumer protection or similar legislation.
28.5 MILO LIVE makes no representations that the Services are appropriate or available for use in any location outside of India. Those who access or use the Services from other jurisdictions are entirely responsible for compliance with all local laws.
28.6 Basis of the bargain: You acknowledge and agree that MILO LIVE has offered its services and set its prices in reliance upon the warranty disclaimers and the limitations of liability set forth herein, that the warranty disclaimers and the limitations of liability set forth herein reflect a reasonable and fair allocation of risk between you and MILO LIVE , and that the warranty disclaimers and the limitations of liability set forth herein form an essential basis of the bargain between you and MILO LIVE . MILO LIVE would not be able to provide the services to you on an economically reasonable basis without these limitations.`}
          <h4>29. Feedback.</h4>
          {`29.1 You acknowledge and agree that any comments, suggestions, or feedback relating to the Services (“Feedback“) submitted to MILO LIVE are gratuitous, unsolicited and without restriction, and shall become the property of MILO LIVE . MILO LIVE will have exclusive ownership of all rights to the Feedback. MILO LIVE will be entitled to use the Feedback for any commercial or other purpose whatsoever, without any compensation to you or any other person. MILO LIVE will not be required to treat any Feedback as confidential.
29.2 You agree that you do not acquire any right in or to the Services (or any changes, modifications or corrections thereto) by virtue of any Feedback.
29.3 You acknowledge that you are responsible for whatever material is submitted by you, including its legality, reliability, appropriateness, originality, and copyright.`}
          <h4>30. Export.</h4>
          {`30.1 The Services may only be operated, exported or re-exported in compliance with all applicable laws and export regulations of India and the country in which you obtained them. 30.2 The Services are specifically subject to the Regulations of India; diversion contrary to India law is prohibited.
30.3 You may not export, directly or indirectly, the Services or technical data licensed here under or the direct product thereof to any country, individual or entity for which the Government of India or any agency thereof, at the time of export, requires an export license or other government approval, without first obtaining such license or approval.
31.1 International Users.
31.1.1 The Services are hosted in India and by using any of the Services, if you are located in the European Union, Asia or any other region with laws or regulations governing personal data collection, use and disclosure that differ from India laws, then you understand and consent to the processing of personal information in India.`}
          <h4>31. General.</h4>
          {`31.2 Notices.
31.2.1 MILO LIVE may provide you with notices, including those regarding changes to terms and conditions, by email, or postings on the MILO LIVE website. Notice will be deemed given twenty-four (24) hours after email is sent, unless MILO LIVE is notified that the email address is invalid. Notice posted on the MILO LIVE website is deemed given ten (10) days following the initial posting.
31.2.2 MILO LIVE reserves the right to determine the form and means of providing notifications to our users.
31.3 Amendments.
31.3.1 MILO LIVE reserves the right to amend any of the Terms at any time by publishing the revised Terms on the MILO LIVE website or by otherwise providing notice of such amendment pursuant to the notice provisions above.
31.3.2 The revised Terms shall become effective following the applicable notice period, unless you expressly accept the revised Terms earlier by clicking on the accept button. Your express acceptance or continued use of the Services after the applicable notice period shall constitute your acceptance to be bound by the revised Terms.
31.4 Ability to Contract.
31.4.1 You hereby affirm that you are fully able and competent to enter into the Terms, conditions, obligations, affirmations, representations and warranties set forth in the Terms, and to abide by and comply with the Terms.
31.5 Entire Agreement.
31.5.1 The Terms (consisting of the Terms Of Use, Privacy Policy and Community Guidelines) represent the complete agreement between you and MILO LIVE and may only be amended as set forth under Amendments above or as otherwise expressly provided therein.
31.5.2 If any provision of the Terms is held to be unenforceable, such provision shall be modified only to the extent necessary to make it enforceable and shall not affect the enforceability or validity of the remaining provisions, which shall remain in full force and effect.
31.6 Assignment.
31.6.1 You are not allowed to assign any of the Terms or any rights or obligations there under.
31.6.2 Any attempted transfer or assignment in violation thereof shall be null and void. 31.6.3 MILO LIVE is allowed at its sole discretion to assign any of the Terms and any rights there under to any third party, without giving notice.
31.7 Waiver.
31.7.1 The failure of any MILO LIVE Party to exercise or enforce any right or provision of the Terms will not constitute a waiver of such right or provision.
31.7.2 Any waiver of any provision of the Terms will be effective only if in writing and signed by MILO LIVE.
31.8 Headings.
31.8.1 The heading references herein are for convenience purposes only. They do not constitute a part of the Terms, and will not be deemed to limit or affect any of the provisions hereof.
31.9 Governing Law and Disputes.
31.9.1 The Terms are governed by the laws of India as such laws are applied to agreements entered into and to be performed entirely in India. The United Nations Convention on Contracts for the International Sale of Goods (1980) is hereby excluded in its entirety from application to the Terms.
31.9.2 You agree that the Services shall be deemed solely based in India and each is a passive Service that does not give rise to personal jurisdiction over MILO LIVE , either specific or general, in jurisdictions other than India.
31.9.3 Any dispute, claim or controversy arising out of or relating to any of the Terms, or the breach, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of any of the Terms to arbitrate, shall be determined by arbitration. The arbitration shall be conducted with a single arbitrator. Furthermore, you agree that neither you nor MILO LIVE will join any claim with the claim of any other person or entity in arbitration; that no claim will be resolved on a class-wide basis; and that neither you nor MILO LIVE will assert any claim in a representative capacity on behalf of anyone else. Notwithstanding the foregoing, you agree that MILO LIVE shall be allowed to apply for injunctive remedies (or an equivalent type of urgent legal relief) in any jurisdiction. The parties will share the costs of arbitration equally. You agree not to commence or prosecute any action against any MILO LIVE Party other than by filing an arbitration complaint in accordance with this paragraph.
31.9.4 IMPORTANTLY, BY AGREEING TO BE BOUND BY THE TERMS, YOU ARE WAIVING ANY RIGHT YOU HAVE TO SEEK RELIEF IN A COURT OF LAW AND ANY RIGHTS TO A TRIAL BY JURY.
31.10 Injunctive Relief.
31.10.1 You acknowledge that the obligations made hereunder to MILO LIVE are of a unique and irreplaceable nature, the loss of which shall irreparably harm MILO LIVE and which cannot be replaced by monetary damages alone so that MILO LIVE shall be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. You irrevocably waive all rights to seek injunctive or other equitable relief.
31.11 Third Party Beneficiaries and Agreements.
31.11.1 If you downloaded the Services from the Android Play Store, you acknowledge and agree that Google, and Google’s subsidiaries, are third party beneficiaries of the Terms, and that, upon your acceptance of the Terms, Google will have the right (and will be deemed to have accepted the right) to enforce the Terms against you as a third party beneficiary hereof. 31.11.2 You agree to comply with, and your license to use the Services is conditioned upon your compliance with, all applicable third-party terms of agreement, including those of any Application Store, as may be applicable, when using the Services.
31.12 No Partnership, Agency, Joint Venture.
31.12.1 The Terms do not create or imply any partnership, agency or joint venture.
31.13 Severability.
31.13.1 If any of the provisions of the Terms shall be deemed invalid, void, or for any reason unenforceable, that provision shall be deemed severable and shall not affect the validity or enforceability of any remaining provisions.
31.14 Fraud.
31.14.1 MILO LIVE takes fraud seriously and will take any necessary actions upon the suspicion or discovery of virtual gifts, coins or diamonds acquired in a fraudulent or illegal manner.
31.14.2 We have the right to permanently confiscate virtual items from any user account that we determine were purchased or acquired using fraudulent means. This includes confiscation of any virtual gifts received by you from another user in which such virtual gifts were purchased fraudulently.
31.15 Governing Law.
31.15.1 These Terms shall be governed by and construed in accordance with the laws of India.`}
        </div>
      </div>
    </div>
  );
};

export default Terms;
