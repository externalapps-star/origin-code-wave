import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-10 mb-3 text-lg">{children}</div>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 mb-2 italic">{children}</h3>
);

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      {/* Static Privacy Policy Content */}
      <main className="min-h-screen bg-slate-50 py-6 px-4 flex justify-center">
        <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
              PRIVACY POLICY
            </h1>
            <p>
              <em><strong>Applicable from:</strong></em> <time>10-17-2025</time>
            </p>
          </header>
          <section className="space-y-4">
            <p>We at Boss Works LLC (<strong>"BW"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>) value the privacy of individuals/entities who use the BW website located at bossworks.ai (the <strong>"Site"</strong>) and the BW app (the <strong>"App"</strong>) (jointly referred to as <strong>"the Application"</strong>) and the products and services offered on the Application (the <strong>"Services"</strong>).</p>
            <p>This Privacy Policy (the <strong>"Policy"</strong>) describes the information that we gather from visitors, users, and others who access the Application or use the Services (<strong>"you"</strong> or <strong>"your"</strong>), how we use and disclose such information, and the steps we take to protect such information.</p>
            <p>By visiting the Application and/or using the Services, you have provided your informed consent to the privacy practices described in this Policy.</p>
            <p>This Policy is incorporated into and is subject to the Terms of Use. Capitalized terms used but not defined in this Policy have the meaning given to them in the Terms of Use.</p>
          </section>
          <ol className="list-decimal list-outside space-y-6 ml-6">
            <li>
              <SectionTitle>INFORMATION WE COLLECT</SectionTitle>
              <section className="space-y-5">
                <SubTitle>Personal Information</SubTitle>
                <p>While using the Services, we will ask you to provide us with certain personally identifiable information that can be used to contact or identify you (<strong>"Personal Information"</strong>). Personal information may include, but is not limited to, your name, address, email address, location, payment information, governmental identification information, and other contact and identifying information that we request and you provide or that you otherwise volunteer. You may provide us with Personal Information when you register for an account, use the Services, contact customer support, sign up for marketing material, or otherwise communicate with us. Please note that if you choose not to share certain Personal Information with us, or refuse certain contact permissions, we might not be able to provide certain parts of the Services.</p>
                <SubTitle>Usage Information</SubTitle>
                <p>We collect information about how you interact with the Services, which may include device type, I.P. address, operating system, browser type, address of a referring website, activity on our website, device I.D., access dates and times, location, information related to your transactions on the Services, and other system activity. We may collect certain information by automated means using technologies such as cookies, web beacons, pixels, browser analysis tools, server logs, and mobile identifiers. In many cases, the information we collect using cookies and other tools is only used in a non-identifiable manner without reference to Personal Information. For example, we may use the information we collect to better understand website traffic patterns and to optimize your experience. In some cases, we associate the information we collect using cookies and other technology with Personal Information in order to provide you with the Services or improve your experience on our Site. We track users' use of the Services, but we do not track users across third-party websites. We do not process or respond to web browsers' "do not track" signals or other similar transmissions that indicate a request to disable online tracking of users who visit or use the Services.</p>
                <SubTitle>Third-Party Cookies</SubTitle>
                <p>When you use and visit the Services, we may also use third-party services, such as Google, Facebook, Intercom, and others, which use cookies to collect information about you. Third parties may also use cookies, web beacons, or other devices to collect information when you use the Services. BW does not control any cookies or other data collection tools that may be placed on the Site by a third party, and this Policy does not cover the use of such cookies and/or other data collection tools by any third party. We encourage you to read the privacy policies of such third parties to find out more about the information that may be collected by them and the choices you have regarding the collection, use, and sharing of such information. You may be able to "opt-out" of the collection of information through cookies or other tracking technology by actively managing the settings on your browser or mobile device.</p>
              </section>
            </li>
            <li>
              <SectionTitle>HOW WE USE YOUR INFORMATION</SectionTitle>
              <section className="space-y-4">
                <SubTitle>Provide, Maintain, and Improve the Services</SubTitle>
                <p>We may use your information to:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <li>communicate with you if you contact us directly, purchase the Services or sign up for marketing material;</li>
                  <li>perform our obligations under the contract we have entered into with you;</li>
                  <li>provide customer service and process any transactions;</li>
                  <li>send you confirmations, updates, security alerts, and support and administrative messages;</li>
                  <li>detect and prevent fraud;</li>
                  <li>operate, protect, and optimize the Services and your experience, such as by performing analytics and conducting research;</li>
                  <li>troubleshoot and protect against errors;</li>
                  <li>personalize and improve the Services, including recognizing and contact you across multiple devices;</li>
                  <li>monitor and analyze usage and trends and otherwise measure the effectiveness of the Services; and</li>
                  <li>develop new features</li>
                </ol>
                <SubTitle>Sharing Your Information</SubTitle>
                <p>If you use the Services, you are authorizing us to share information:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <li>that you direct us to disclose to others;</li>
                  <li>with our third-party business partners, vendors, and consultants who perform services on our behalf or who help us provide the Services or that you have indicated you are interested in being introduced or working with, such as accounting, tax, legal, technical, marketing, or other services;</li>
                  <li>if required to do so by law or in the good-faith belief that such action is necessary to comply with local, state, federal, or international laws, or to respond to a court order, judicial or other government subpoena or warrant, or in the event of bankruptcy proceedings;</li>
                  <li>if we believe in good faith that doing so is reasonably necessary or appropriate to protect the rights, property, or safety of BW, our users, our employees, copyright owners, third parties, or the public, including without limitation to protect BW or our users from fraudulent, abusive, inappropriate, or unlawful use of the Services;</li>
                  <li>to enforce or apply this Policy, our Terms of Service, or our other policies or agreements; and</li>
                  <li>in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition, or in any other situation where information may be disclosed or transferred as one of the business assets of BW</li>
                </ol>
                <p>Nothing herein restricts the sharing of aggregated or anonymized information, which may be shared with third parties without your consent. This Policy in no way restricts or limits our collection and use of aggregate or de-identified information.</p>
                <SubTitle>Links to Third-Party Sites and Services</SubTitle>
                <p>The Services may contain links to other websites. We are not responsible for the practices employed by websites or services linked to or from the Services, nor the information or content provided to or contained therein. Please remember that when you use a link to go from the Services to another website, this Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on the Services, are subject to that third party's own rules and policies. Please read those rules and policies before proceeding. In such case, if you wish to exercise any of your rights with respect to your Personal Information, please contact the applicable third party directly.</p>
              </section>
            </li>
            <li>
              <SectionTitle>HOW WE PROTECT YOUR INFORMATION</SectionTitle>
              <section className="space-y-4">
                <p>We take measures designed to protect Personal Information in an effort to prevent the loss, misuse, unauthorized access, disclosure, alteration, and destruction, such as the use of firewalls, password protection, secure socket layer, encryption, and other security measures. We will only keep your Personal Information for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To comply with applicable laws and regulations that govern our provision of the Services, we may retain certain Personal Information for seven years after receipt. We may also retain and use your Personal Information for as long as necessary to resolve disputes and/or enforce our rights. Where we rely on your consent to process your Personal Information, you have the right to decline consent and/or, if provided, to withdraw consent at any time. This will not affect the lawfulness of the processing prior to the withdrawal of your consent. Additionally, in some circumstances, you can ask us to delete your Personal Information. Please note that if you withdraw consent or ask us to delete your Personal Information, we may not be able to provide certain aspects of the Services.</p>
                <p>We limit access to Personal Information to our employees, agents, contractors, and other third parties who have a business need to know. They will only process Personal Information on our instructions, and they are subject to a duty of confidentiality. We have implemented procedures to handle any suspected Personal Information breach and will notify you and any applicable regulator of a breach as legally required. </p>
                <p>Please be aware, however, that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. To protect the confidentiality of information maintained in your account, you must keep your password confidential and not disclose it to any other person. You are responsible for all uses of the Services by any person using your password. Please advise us immediately if you believe your password has been misused.</p>
              </section>
            </li>
            <li>
              <SectionTitle>INTERNATIONAL TRANSFERS AND YOUR RIGHTS</SectionTitle>
              <section className="space-y-4">
                <SubTitle>European Users</SubTitle>
                <p>If you choose to use the Services from the European Economic Area (the <strong>"EEA"</strong>), the United Kingdom, Switzerland, or other regions of the world with laws governing data collection and use that may differ from U.S. law, please note that you are transferring your Personal Information outside of those regions to the United States of America for storage and processing. By providing any information, including Personal Information, on or to the Services, you consent to such transfer, storage, and processing.</p>
                <p>We offer the European Union Model Clauses, also known as Standard Contractual Clauses, to meet the adequacy and security requirements for our customers that operate in the EEA, the United Kingdom, Switzerland, and other international transfers of Personal Information (the <strong>"Model Clauses"</strong>). These Model Clauses are included and incorporated into our Data Protection Addendum.</p>
                <p>As described in this Policy, we may share Personal Information with third parties and may be required to disclose information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.</p>
                <p>The legal grounds for our processing your Personal Information for the purposes in this Policy are as follows:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <li>you provided your consent by agreeing to this Policy, which you may withdraw at any time by emailing us at the email address below;</li>
                  <li>it is necessary for our contractual relationship;</li>
                  <li>the processing is necessary for us to comply with our legal or regulatory obligations; and</li>
                  <li>the processing is in our legitimate interest as a provider of the Services (for example, to protect the security and integrity of our systems and to provide you with customer service and the core functionality of the Services).</li>
                </ol>
              </section>
              <section className="space-y-4">
                <SubTitle>Other International Transfers</SubTitle>
                <p>If you are located outside the U.S., the EEA, the U.K., and Switzerland, and you choose to provide Personal Information to us, we may transfer your Personal Information to the U.S. and process it there (or any other country where we operate or may have co-locations) and in accordance with our Data Protection Addendum. When you provide Personal Information, it may be sent to servers located in the U.S. and other countries around the world.</p>
                <SubTitle>Your Rights</SubTitle>
                <p>Individuals located in certain countries, including the EEA, the United Kingdom, and Switzerland, have certain statutory rights in relation to their personal data. Subject to any exemptions provided by law, you may have the right to request access to information, as well as to seek to update, delete or correct this information. You can usually do this using the settings and tools provided in your Services account. If you cannot use the settings and tools, contact us at the email address below.</p>
              </section>
            </li>
            <li>
              <SectionTitle>CHILDREN'S PRIVACY</SectionTitle>
              <p>The Services are not directed to children under 18, and we do not knowingly collect Personal Information from children under 18. If we learn that we have collected the Personal Information of a child under 18, we will take steps to delete such information from our files as soon as possible.</p>
            </li>
            <li>
              <SectionTitle>ACCESSING AND MODIFYING YOUR INFORMATION</SectionTitle>
              <p>If you have an account on the Services, you can access and modify your Personal Information associated with your account in your profile settings or by emailing us at the email address below. We will take steps to delete your Personal Information as soon as it is practicable, but we may not be able to modify or delete your Personal Information in all circumstances, and some information may remain in archived/backup copies for our records and as otherwise required by law. You may "opt-out" of receiving marketing or promotional emails from us by following the instructions in those emails or by emailing us at the email address below. If you opt-out, we may still send you non-promotional emails, such as emails about your account or our ongoing business relations (i.e., account verification, transactional communications, changes/updates to features of the Services, and technical and security notices).</p>
            </li>
            <li>
              <SectionTitle>CHANGES AND UPDATES TO THE POLICY</SectionTitle>
              <p>We reserve the right to change the provisions of this Policy at any time. Please revisit this page periodically to stay aware of any changes. If we modify this Policy, we will make it available through the Services and indicate the date of the latest revision. Your continued use of the Services after the revised Policy has become effective indicates that you have read, understood, and agreed to the current version of this Policy.</p>
            </li>
            <li>
              <SectionTitle>CONTACT</SectionTitle>
              <p>Please contact us with any questions regarding this Policy at support@bossworks.ai.</p>
            </li>
          </ol>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicy;