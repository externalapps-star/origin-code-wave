import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-10 mb-3 text-lg">{children}</div>
);

const TermsOfUse: React.FC = () => {
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
      {/* Static Terms of Use Content */}
      <main className="min-h-screen bg-slate-50 py-6 px-4 flex justify-center">
        <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
              TERMS OF USE
            </h1>
            <p>
              <em><strong>Applicable from:</strong></em> <time>10-17-2025</time>
            </p>
          </header>
          <section className="space-y-4">
            <p>Boss Works LLC thanks you for your interest in Boss Works (Hereafter referred to as <strong>"BW"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>). These Terms of Use (the <strong>"Terms"</strong>) constitute a legally binding agreement between you and BW upon your acceptance. The Terms govern your access to and use of the BW website located at bossworks.ai (the <strong>"Site"</strong>) and the BW app (the <strong>"App"</strong>) (jointly referred to as <strong>"the Application"</strong>) and the products and services offered on the Application (the <strong>"Services"</strong>). PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APPLICATION AND/OR THE SERVICES. THESE TERMS CONTAIN A BINDING ARBITRATION PROVISION THAT INCLUDES A JURY TRIAL WAIVER AND CLASS ACTION WAIVER AND A CLAUSE THAT LIMITS OUR LIABILITY AND GOVERNS THE JURISDICTION AND VENUE FOR ANY DISPUTES.</p>
            <p>By entering into these Terms, and/or by accessing or using the Services, you expressly acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms apply to all visitors and others who access or use the Services (<strong>"you"</strong>, or <strong>"your"</strong>). If you agree to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on behalf of your organization or entity and to bind them to these Terms (in which case, references to <strong>"you"</strong> and <strong>"your"</strong> in these Terms refer to that organization or entity). The Application and the Services are AI-driven and there are extensive terms governing your interaction with and usage of the AI components of the Application (<strong>"AI"</strong>) and Services which you also expressly acknowledge as having read, understood and agreed to.</p>
          </section>
          <ol className="list-decimal list-outside space-y-6 ml-6">
            <li>
              <SectionTitle>PRIVACY POLICY AND ADDITIONAL TERMS</SectionTitle>
              <section className="space-y-5">
                <p>Our Privacy Policy and Data Protection Addendum explains how we collect, use, and share your information and is hereby incorporated into these Terms. You agree that your access to and use of the Services is governed by our Privacy Policy.</p>
                <p>Your use of the Services is subject to all additional terms, policies, rules, or guidelines referenced in these Terms or that we may post on or link from the Services (the <strong>"Additional Terms"</strong>), such as rules applicable to a particular feature or content on the Services. All Additional Terms are incorporated by reference into and made a part of these Terms.</p>
              </section>
            </li>
            <li>
              <SectionTitle>ACCOUNTS</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>Account Creation:</div>
                      <p>In order to use certain features of the Services, you must create an account (<strong>"Account"</strong>) and provide certain information about yourself as prompted by the form. For certain features, you will also be required to purchase a paid subscription (<strong>"Subscription"</strong>). There may be various tiers of subscriptions, and the range of Services that are included in each subscription will be detailed at the time of such purchase. Please go through the details thoroughly before you consent to creating an Account or purchasing a Subscription.</p>
                      <p>You represent and warrant that:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>all required registration information you submit is truthful and accurate;</li>
                        <li>You will maintain the accuracy of such information.</li>
                      </ol>
                    </section>
                  </li>
                  <li>You may delete your account at any time, for any reason, by contacting us at support@bossworks.ai.</li>
                  <li>You must be at least 18 years old to create an Account or use the Services. We may suspend or terminate your account in accordance with Clause 8 of the Terms.</li>
                  <li>
                    <section className="space-y-4">
                      <div>Account Responsibilities:</div>
                      <p>You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify BW of any unauthorized use or suspected unauthorized use of your Account or any other breach of security.</p>
                      <p>BW cannot and will not be liable for any loss or damage to you or any third party arising from your failure to comply with the above requirements.</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>ACCESS TO THE SITE AND SERVICES</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>License. Subject to these Terms, BW grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Services solely for your own internal business purposes and use.</li>
                  <li>
                    <section className="space-y-4">
                      <div>Certain Restrictions:</div>
                      <p>The rights granted to you in these Terms are subject to the following restrictions:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Services, whether in whole or in part, or any content displayed on the Services;</li>
                        <li>you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Services;</li>
                        <li>you shall not access the Services in order to build a similar or competitive website, product, or service;</li>
                        <li>you shall not post information or interact with the Services in in a manner which is fraudulent, libellous, abusive, obscene, profane, harassing, or illegal;</li>
                        <li>you shall not use the Services for any illegal purpose or in violation of any law, statute, rule, permit, ordinance or regulation;</li>
                        <li>you shall not use the Services in any way that infringes or misappropriates any third party's rights, including intellectual property rights, copyright, patent, trademark, trade secret, or other proprietary rights, or rights of publicity or privacy; and</li>
                        <li>except as expressly stated herein, no part of the Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Unless otherwise indicated, any future release, update, or other addition to functionality of the Services shall be subject to these Terms. All copyright and other proprietary notices on the Services (or on any content displayed on the Services) must be retained on all copies thereof.</li>
                      </ol>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Modification:</div>
                      <p>BW reserves the right, at any time, to modify, suspend, or discontinue the Services (in whole or in part) with or without notice to you. Any list of available Services provided for reference at the time of Subscription or thereafter on the Application is merely indicative and applies only for that time period. You agree that BW will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Services or any part thereof.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>No Support or Maintenance:</div>
                      <p>We will use commercially reasonable efforts to provide you with support and maintenance services in our sole discretion. However, you acknowledge and agree that BW will have no obligation to provide you with any support or maintenance in connection with the Services.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Ownership:</div>
                      <p>You acknowledge that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Services and its content are owned by BW or BW's suppliers/service providers, if any. Neither these Terms (nor your access to the Services) transfers to you or any third party any rights, title, or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in this Clause. BW and its suppliers/service providers, as the case may be, reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.</p>
                    </section>
                  </li>
                  <li>
                    <p>You acknowledge that while we provide estimates for how long the process takes to effectively provide the Services, that the timeline might take longer than the estimates we provide for a number of reasons, such as if there are bottlenecks in the process by other parties involved such as the state where the entity is being formed, the Internal Revenue Service, our banking partners, or any other third party who may be involved in the process of providing the Services or through delays at your end in providing information/coordination or for any other reason.</p>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Feedback:</div>
                      <p>You acknowledge and agree that any feedback, comments, or suggestions you may provide regarding the Services (<strong>"Feedback"</strong>) will be the sole and exclusive property of BW and you hereby irrevocably assign to us all of your right, title, and interest in and to all Feedback. Any data that we generate from your usage of the Services will be owned by BW and handled subject to the terms of our Privacy Policy, as applicable.</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>YOUR CONTENT</SectionTitle>
                <p>You are solely responsible for the accuracy, content, and legality of all data and information you provide to BW and/or transmit through the Services (<strong>"Your Content"</strong>). As between BW and you, you own all Your Content, and you represent and warrant that any Your Content does not and will not violate third-party rights of any kind, including without limitation any intellectual property rights or rights of privacy. We reserve the right (but not the obligation) to reject and/or remove any of Your Content that we believe, in our sole discretion, violates these Terms. You hereby grant to BW: (i) a non-exclusive, worldwide, fully-paid, royalty-free right and license to download, receive, collect, access, modify, copy, store, retain, and otherwise use Your Content in order to provide and support the Services or otherwise upon your consent or direction, and to develop and improve the Services; and (ii) a nonexclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free right and license to collect, retain, store, use, modify, distribute, and disclose Your Content in aggregated and anonymized form and any inferred insight relating to Your Content for any purpose whatsoever, provided that any such disclosure does not identify you or any third party by name or description sufficient to identify you or such third party as the source or subject of such information, in whole or in part.</p>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>PAYMENT</SectionTitle>
                <p>When you purchase the Services, you agree to the applicable pricing and payment terms on the Services or as otherwise agreed upon in writing between you and BW. BW may add new features for additional fees and charges, or amend fees and charges for existing features at any time in its sole discretion. Any change to our pricing or payment terms shall become effective in the billing cycle following notice of such change to you as provided in these Terms. Your continued use of the applicable Services after any price change becomes effective constitutes your Agreement to pay the changed amount.</p>
                <p>All fees, including any applicable taxes and transaction fees, are in U.S. Dollars. You must provide a valid credit card at the time you purchase the Services, and you will promptly update us if there is any change to your payment information. Any recurring fees will automatically renew at the rates then in effect, are automatically charged to your credit card, and will continue until canceled in accordance with these Terms. We use a third-party payment processor, and you must agree to their terms when entering your payment information, if applicable. By providing your payment information, you agree that we may invoice and charge you for all fees when they become due to us without additional notice or consent.</p>
                <p>BW is not responsible for any charges or expenses you incur resulting from charges billed by BW in accordance with these Terms. By providing a credit card number or other payment method with advance authorization features, you authorize BW to continue charging the payment method for all charges due to BW until your account is settled and your Services are terminated in accordance with these Terms.</p>
                <p>All payments are non-refundable, and there are no refunds or credits for partially used periods in the event of a subscription. Following any cancellation, however, your use of the Services will be valid until your paid period is complete, if applicable.</p>
              </section>
            </li>
            <li>
              <SectionTitle>THIRD-PARTY LINKS & ADS; OTHER USERS</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>Third-Party Links & Ads. The Services may contain links to third-party websites and services and/or display advertisements for third-parties (collectively, <strong>"Third-Party Links & Ads"</strong>). Such Third-Party Links & Ads are not under the control of BW, and BW is not responsible for any Third-Party Links & Ads. BW provides access to these Third-Party Links & Ads only as a convenience to you and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party's terms and policies apply, including the third party's privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-Party Links & Ads.</li>
                  <li>Other Users. Your interactions with other users on the Application are solely between you and such users. You agree that BW will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Services user, we are under no obligation to become involved.</li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>DISCLAIMERS</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <p>Standard Disclaimers. THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, AND BW (AND OUR SUPPLIERS AND/OR SERVICE PROVIDERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS AND/OR SRVICE PROVIDERS) MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE. IF APPLICABLE LAW REQUIRES ANY WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM THE DATE OF FIRST USE.</p>
                      <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</p>
                    </section>
                  </li>
                  <li>Services Disclaimers. You acknowledge and agree that BW is not a law firm or a qualified financial/tax advisor. What you see on the Application, and any of our communications over e-mail, WhatsApp, Slack, SMS, Zoom, Intercom, or any other form of online communication should not be taken as official legal advice, official tax advice or official financial advice. If you need legal advice, please consult with an attorney. If you need tax advice, you should consult with a tax professional. If you need financial advice, please consult with a financial professional.</li>
                  <li>
                    <section className="space-y-4">
                      <p>LIMITATION ON LIABILITY TO THE MAXIMUM EXTENT PERMITTED BY LAW: IN NO EVENT SHALL BW (OR OUR SUPPLIERS AND/OR SERVICE PROVIDERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SERVICES, EVEN IF BWHAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM OR LOSS OF DATA RESULTING THEREFROM.</p>
                      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF FIFTY US DOLLARS (U.S. $50). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY KIND ARISING FROM OR RELATING TO THIS AGREEMENT.</p>
                      <p>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>TERM AND TERMINATION</SectionTitle>
                <p>Subject to this Clause, these Terms will remain in full force and effect while you use the Services. We may suspend or terminate your rights to use the Services (including your Account) at any time for any reason at our sole discretion, including for any use of the Services in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Services will terminate immediately. BW will not have any liability whatsoever to you for any termination of your rights under these Terms, including for termination of your account. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Clauses 1, 4, 5, and 7 – 13.</p>
              </section>
            </li>
            <li>
              <SectionTitle>INDEMNIFICATION AND RELEASE</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>Indemnification:</div>
                      <p>You agree to indemnify and hold BW (and its officers, employees, contractors and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Services, (b) your violation of these Terms, (c) your violation of applicable laws or regulations, (d) the nature and content of all of Your Content processed by the Services, and (e) your violation of any third-party right.</p>
                      <p>BW reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of BW. BW will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it. You will also use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Release:</div>
                      <p>You hereby release and forever discharge BW (and our officers, employees, contractors, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present, and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), known or unknown, suspected or unsuspected, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Services (including any interactions with, or act or omission of, other Services users or any Third-Party Links & Ads), whether now existing or hereafter arising.</p>
                      <p>IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR."</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>CHANGES</SectionTitle>
                <p>These Terms are subject to periodic revision at our discretion, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any) and/or by prominently posting notice of the changes on our Services. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Any changes to these Terms will be effective upon the earlier of 7 calendar days following our dispatch of an e-mail notice to you (if applicable) or 7 calendar days following our posting of notice of the changes on our Services. These changes will be effective immediately for new users of our Services. Continued use of our Services following notice of such changes shall indicate your acknowledgment of such changes and Agreement to be bound by the terms and conditions of such changes.</p>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>ARBITRATION AGREEMENT AND DISPUTE RESOLUTION.</SectionTitle>
                <p>Please read this Arbitration Agreement carefully. It is part of your contract with BW and affects your rights. It contains procedures for mandatory binding arbitration and a class action waiver.‍</p>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <section className="space-y-4">
                    <li>
                      <section className="space-y-4">
                        <div>Applicability of Arbitration Agreement:</div>
                        <p>All claims and disputes (excluding claims for injunctive or other equitable relief as set forth below) in connection with the Terms or the use of any product or service provided by BW that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement. Unless otherwise agreed to, all arbitration proceedings shall be held in English. This Arbitration Agreement applies to you and BW, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Notice Requirement and Informal Dispute Resolution:</div>
                        <p>Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute (<strong>"Notice"</strong>) describing the nature and basis of the claim or dispute and the requested relief. A Notice to BW should be sent to Four Tower Bridge, 200 Barr Harbor Drive, Suite 400 West Conshohocken, PA 19428. After the notice is received, you and BW shall attempt to resolve the claim or dispute informally. If you and BW do not resolve the claim or dispute within thirty (30) days after the notice is received, either party may begin an arbitration proceeding. The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Arbitration Rules:</div>
                        <p>The arbitration shall be initiated through the American Arbitration Association ("AAA"), an established alternative dispute resolution provider (<strong>"ADR Provider"</strong>) that offers arbitration as set forth in this Section. If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider. The rules of the ADR Provider shall govern all aspects of the arbitration, including but not limited to the method of initiating and/or demanding arbitration, except to the extent such rules are in conflict with the Terms. The AAA Consumer Arbitration Rules ("Arbitration Rules") governing the arbitration are available online at www.adr.org. The arbitration shall be conducted by a single, neutral arbitrator. Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (U.S. $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief. For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (U.S. $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules. Any hearing will be held in a location within 100 miles of your residence unless you reside outside of the United States and unless the parties agree otherwise. If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time, and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. If the arbitrator grants you an award that is greater than the last settlement offer that BW made to you prior to the initiation of arbitration, BW will pay you the greater of the award or $2,500.00. Each party shall bear its own costs (including attorney's fees) and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Additional Rules for Non-Appearance Based Arbitration:</div>
                        <p>If non-appearance-based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration. The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Time Limits:</div>
                        <p>If you or BW pursue arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the AAA Rules for the pertinent claim.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Authority of Arbitrator:</div>
                        <p>If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of you and BW, and the dispute will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms. The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and BW.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Waiver of Jury Trial:</div>
                        <p>The parties hereby waive their constitutional and statutory rights to go to court and have a trial in front of a judge or a jury, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement. Arbitration procedures are typically more limited, more efficient, and less costly than rules applicable in a court and are subject to very limited review by a court. In the event any litigation should arise between you and BW in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND BW WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Waiver of Class or Consolidated Actions:</div>
                        <p>ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Confidentiality:</div>
                        <p>All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law. This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Severability:</div>
                        <p>If any part or parts of this Arbitration Agreement or the Terms are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed, and the remainder of the Agreement shall continue in full force and effect.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Right to Waive:</div>
                        <p>Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted. Such waiver shall not waave or affect any other portion of this Arbitration Agreement.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Survival of Agreement:</div>
                        <p>This Arbitration Agreement will survive the termination of your relationship with BW.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Small Claims Court:</div>
                        <p>Notwithstanding the foregoing, either you or BW may bring an individual action in small claims court.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Emergency Equitable Relief:</div>
                        <p>Notwithstanding the foregoing, either party may seek equitable emergency relief before a state or federal court in order to maintain the status quo pending arbitration. A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Claims Not Subject to Arbitration:</div>
                        <p>Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party's patent, copyright, trademark, or trade secrets shall not be subject to this Arbitration Agreement.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Courts:</div>
                        <p>In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Philadelphia City, Pennsylvania, for such purpose.</p>
                      </section>
                    </li>
                  </section>
                </ol>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>GENERAL</SectionTitle>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <section className="space-y-4">
                    <li>
                      <section className="space-y-4">
                        <div>Export:</div>
                        <p>The Services may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from BW, or any products utilizing such data, in violation of the United States export laws or regulations.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Disclosures:</div>
                        <p>BW is located at the address Four Tower Bridge, 200 Barr Harbor Drive, Suite 400 West Conshohocken, PA 19428. If you are a Pennsylvania resident, you may report consumer complaints to the Pennsylvania Office of Attorney General's Bureau of Consumer Protection by  calling them at <a target="_blank" href="tel:18667226675" className="text-[rgb(241,95,34)] font-bold underline">1-866-PA-COMPLAINT</a>, visiting their website at <a target="_blank" href="https://www.pa.gov/consumer-complaints.html" className="text-[rgb(241,95,34)] font-bold underline">pa.gov/consumer</a>, or emailing them at <a target="_blank" href="mailto:consumer@pa.gov" className="text-[rgb(241,95,34)] font-bold underline">consumer@pa.gov</a>.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Electronic Communications:</div>
                        <p>The communications between you and BW use electronic means, whether you use the Services or send us e-mails, or whether BW posts notices on the Services or communicates with you via e-mail. For contractual purposes, you (a) consent to receive communications from BW in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that BW provides to you electronically satisfy any legal requirement that such communications would satisfy if it were in a hardcopy writing. The foregoing does not affect your non-waivable rights.</p>
                      </section>
                    </li>
                    <li>
                      <section className="space-y-4">
                        <div>Entire Terms:</div>
                        <p>These Terms constitute the entire agreement between you and us regarding the use of the Application and/ or Services. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation." If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to BW is that of an independent contractor, and neither party is an agent or partner of the other. These Terms and your rights and obligations herein may not be assigned, subcontracted, delegated, or otherwise transferred by you without BW's prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. BW may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees.</p>
                      </section>
                    </li>
                  </section>
                </ol>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>PAYMENT SERVICES</SectionTitle>
                <p>The payment services in the USA is powered by Stripe. BW is not licensed to, nor exempt from provide any payment services in the USA.</p>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>TERMS GOVERNINGTHE USAGE AND INTERACTIONS WITH AI</SectionTitle>
                <p>The Application and Services are completely AI-driven. One of the components available for your convenience and extensive usage is an AI-powered assistant that provides guidance, insights, and automation for business formation, compliance, and e-commerce operations, among others, which is known as BB AI. All the AI including BB AI are governed by the below terms.</p>
                <ol className="list-[lower-alpha] pl-6 space-y-1">
                  <section className="space-y-4">
                    <li>The AI is not a human and is not certified to provide legal, tax, financial, or investment advice. All decisions based on its outputs are solely your responsibility.</li>
                    <li>The AI may generate incomplete, incorrect, or outdated information. You agree to use the Services with this understanding and acknowledge that reliance on AI responses is at your own risk.</li>
                    <li>BW may update, modify, or discontinue any features of the Application or any Services at any time, with or without notice.</li>
                    <li>BW, its directors, employees, affiliates, and partners disclaim all liability for any actions taken or losses incurred based on use of the AI.</li>
                    <div className="space-y-4">
                      <div><strong>User Eligibility & Responsibilities with respect to the AI</strong></div>
                      <li>Eligibility: You must be at least 18 years old or have the consent and supervision of a parent or legal guardian to use this service.</li>
                      <li>
                        <section className="space-y-4">
                          <p>Acceptable Use: You agree not to use the AI:</p>
                          <ol className="list-[lower-roman] pl-6 space-y-1">
                            <li>For any unlawful, harmful, or deceptive purpose.</li>
                            <li>To transmit confidential, proprietary, or personal data that you are not authorized to share.</li>
                            <li>To develop, train, or benchmark competing AI models or technologies.</li>
                            <li>To reverse-engineer, scrape, or otherwise exploit the underlying systems.</li>
                          </ol>
                        </section>
                      </li>
                      <li>You are responsible for all data and content you input into the system and any consequences of your use.</li>                    
                    </div>
                    <div className="space-y-4">
                      <div><strong>Data Usage & Privacy</strong></div>
                      <li>We collect usage data (e.g., queries, interactions, metadata) to improve the AI and the related user experience.</li>
                      <li>We process data in accordance with our Privacy Policy.</li>
                      <li>Do not submit personal or sensitive information unless necessary and authorized.</li>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Intellectual Property</strong></div>
                      <li>All intellectual property rights in the AI, including its models, code, documentation, and interfaces, are owned by BW and its licensors, if any.</li>
                      <li>By using the AI you grant BW a non-exclusive, worldwide, royalty-free license to use, reproduce, and process your content solely to operate, improve, and maintain the AI.</li>
                      <li>This license does not grant us ownership of your content, and it ends when you delete your account or stop using the service.</li>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Subscriptions, Fees, and Payment</strong></div>
                      <li>As stated earlier, access to certain Features may require a paid subscription.</li>
                      <li>Payments are non-refundable except where required by BW's Terms and Conditions and Refund Policy.</li>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Termination</strong></div>
                      <li>You may, at your discretion, stop using the AI at any time.</li>
                      <li>We are entitled to suspend or terminate your access to AI for violations of these Terms or applicable law. Upon termination, your access will cease and any licenses granted will be revoked.</li>
                      <li>We may retain data as required for legal or operational reasons, consistent with our Privacy Policy.</li>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Disclaimer of Warranties</strong></div>
                      <li>The AI and all associated features and the Services are provided "as is" and "as available."</li>
                      <li>We make no warranties or guarantees about accuracy, reliability, suitability, or availability.</li>
                      <li>We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</li>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Limitation of Liability</strong></div>
                      <p>To the maximum extent permitted by law:</p>
                      <p>BW and its affiliates will not be liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits or data, arising out of or related to your use of the AI.</p>
                    </div>
                    <div className="space-y-4">
                      <div><strong>Relationship to BW's Broader Terms of Service</strong></div>
                      <p>These terms in the present Clause govern your use of the AI specifically and are incorporated into and made a part of BW's broader Terms.</p>
                      <p>By using the AI, you agree to be bound by both:</p>
                      <p>These terms; and</p>
                      <p>The broader Terms governing your use of the Application and Services.</p>
                      <p>In the event of any conflict between these terms and the Terms, the Terms will control except where these terms specifically govern the use of the AI.</p>
                      <p>All defined terms used but not defined here have the meanings given in the General Terms.</p>
                    </div>
                  </section>
                </ol>
              </section>
            </li>
            <li>
              <section className="space-y-4">
                <SectionTitle>CONTACT US</SectionTitle>
                <p>You can contact the Company at the email id support@bossworks.ai.</p>
              </section>
            </li>
          </ol>
        </article>
      </main>
    </div>
  );
};

export default TermsOfUse;