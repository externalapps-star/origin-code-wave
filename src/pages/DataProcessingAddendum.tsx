import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-10 mb-3 text-lg">{children}</div>
);

const DataProcessingAddendum: React.FC = () => {
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
      {/* Static Data Processing Addendum Content */}
      <main className="min-h-screen bg-slate-50 py-6 px-4 flex justify-center">
        <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
              DATA PROCESSING ADDENDUM
            </h1>
            <p>
              <em><strong>Applicable from:</strong></em> <time>10-17-2025</time>
            </p>
          </header>
          <section className="space-y-4">
            <p>This Data Processing Addendum (<strong>"Addendum"</strong>) forms part of the Terms of Use and Privacy Policy (collectively <strong>"Agreement"</strong>) available between Boss Works LLC (<strong>"BW"</strong>) and you (as defined in the Agreement). BW and you are collectively deemed the "Parties".</p>
          </section>
          <ol className="list-decimal list-outside space-y-6 ml-6">
            <li>
              <SectionTitle>SUBJECT MATTER AND DURATION</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>Subject Matter:</div>
                      <p>This Addendum reflects the Parties' commitment to abide by Applicable Data Protection Laws concerning the Processing of Your Personal Data in connection with BW's execution of the Agreement. All capitalized terms that are not expressly defined in this Data Processing Addendum will have the meanings given to them in the Agreement. If, and to the extent that the language in this Addendum or any of its Exhibits conflicts with the Agreement, this Addendum shall prevail.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Duration and Survival:</div>
                      <p>This Addendum will become legally binding upon the date that you accept and agree to the Agreement. BW will Process Your Personal Data until the relationship terminates as specified in the Agreement. BW's obligations and your rights under this Addendum will continue in effect so long as BW. processes Your Personal Data.</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>DEFINITIONS</SectionTitle>
              <section className="space-y-4">
                <p>For the purposes of this Addendum, the following terms and those defined within the body of this Addendum apply:</p>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li><strong>"Applicable Data Protection Law(s)"</strong> means the relevant data protection and data privacy laws, rules, and regulations to which the Your Personal Data are subject. "Applicable Data Protection Law(s)" shall include, but not be limited to, EU General Data Protection Regulation 2016/679 (<strong>"GDPR"</strong>) principles and requirements. </li>
                  <li><strong>"Your Personal Data"</strong> means personal data pertaining to you or youremployees/contractors/ agents/anyone duly authorised by you, Processed by BW. Your Personal Data and the specific uses of the Your Personal Data are detailed in Exhibit 1 attached hereto, as required by the GDPR. </li>
                  <li><strong>"Controller"</strong> means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the Processing of Personal Data. </li>
                  <li><strong>"Personal Data"</strong> shall have the meaning assigned to the terms "personal data" or "personal information" under Applicable Data Protection Law(s). </li>
                  <li><strong>"Process"</strong>, <strong>"Processes"</strong>, <strong>"Processing"</strong>, <strong>"Processed"</strong> means any operation or set of operations which is performed on data or sets of data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment or combination, restriction, erasure, or destruction. </li>
                  <li><strong>"Processor"</strong> means a natural or legal person, public authority, agency or other body which Processes Your Personal Data on behalf of you subject to this Addendum. </li>
                  <li><strong>"Security Incident(s)"</strong> means the breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Your Personal Data Processed by BW. </li>
                  <li><strong>"Third Party(ies)"</strong> means BW's authorized contractors, agents, vendors, and third-party service providers that Process Your Personal Data. </li>
                </section>
              </ol>
              </section>
            </li>
            <li>
              <SectionTitle>DATA USE AND PROCESSING</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>‍Compliance with Laws:</div>
                      <p>Your Personal Data shall be Processed in compliance with the terms of this Addendum and all Applicable Data Protection Law(s).</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Documented Instructions:</div>
                      <p>BW and its third Parties shall Process Your Personal Data only in accordance with your documented instructions or as specifically authorized by this Addendum or the Agreement. BW will, unless legally prohibited from doing so, inform you in writing if it reasonably believes that there is a conflict between your instructions and applicable law or otherwise seeks to Process Your Personal Data in a manner that is inconsistent with your instructions.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>‍Authorization to Use Third Parties:</div>
                      <p>To the extent necessary to fulfil BW's contractual obligations under the Agreement, you hereby authorize:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>BW to engage Third Parties; and</li>
                        <li>Third Parties to engage sub-processors:</li>
                      </ol>
                      <p>Any Third Party Processing of your personal Data shall be consistent with your reasonable documented instruction and comply with all Applicable Data Protection Law(s).</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>BW and Third Party Compliance:</div>
                      <p>BW agrees to (i) enter into a written agreement with Third Parties regarding such third Parties' Processing of Your Personal Data that imposes on such Third Parties (and their sub-processors) data protection and security requirements for our Personal Data that are compliant with Applicable Data Protection Law(s); and (ii) remain responsible to you for BW's Third Parties' (and their sub-processors if applicable) failure to perform their obligations with respect to the Processing of Your Personal Data.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Right to Object to Third Parties:</div>
                      <p>BW shall make available to you a list of Third Parties that Process Your Personal Data upon reasonable request. You may reasonably object to BW's use of a new Third Party(ies) by notifying BW promptly in writing within 7 (seven) business days after receipt of BW's response to your request. If you have legitimate objections to the appointment of any new Third Party, the Parties will work together in good faith to resolve the grounds for the objection for no less than 30 days, and failing any such resolution; you may terminate the part of the Services performed under the Agreement that cannot be performed by BW without the use of the objectionable Third Party.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Confidentiality:</div>
                      <p>Any person or Third Party authorized to Process Your Personal Data must agree to maintain the confidentiality of such information or be under an appropriate statutory or contractual obligation of confidentiality.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Personal Data Inquiries and Requests:</div>
                      <p>BW agrees to comply with all reasonable instructions from you related to any requests from individuals exercising their rights in Personal Data granted to them under Applicable Data Protection Law(s) (<strong>"Privacy Request"</strong>). At your request and without undue delay, BW agrees to assist you in answering or complying with any Privacy Request in so far as it is possible.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Data Protection Impact Assessment and Prior Consultation:</div>
                      <p>BW agrees to provide reasonable assistance at your expense to you where, in your judgment, the type of Processing performed by BW is likely to result in a high risk to the rights and freedoms of natural persons (e.g., systematic and extensive profiling, Processing sensitive Personal Data on a large scale and systematic monitoring on a large scale, or where the Processing uses new technologies) and thus requires a data protection impact assessment and/or prior consultation with the relevant data protection authorities.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Demonstrable Compliance:</div>
                      <p>BW agrees to keep records of its Processing in compliance with Applicable Data Protection Law(s) and provide any necessary records to you to demonstrate compliance upon reasonable request.</p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>‍CROSS-BORDER TRANSFERS OF PERSONAL DATA</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>‍Cross-Border Transfers of Personal Data:</div>
                      <p>You authorize BW and its Third Parties to transfer Your Personal Data across international borders, including from the European Economic Area to the United States. Any cross-border transfer of Your Personal Data must be supported by an approved adequacy mechanism. </p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>‍Standard Contractual Clauses:</div>
                      <p>You and BW will use the European Commission Decision C(2010)593 Standard Contractual Clauses for controllers to Processors ("Model Clauses") as the adequacy mechanism supporting the transfer and Processing of Your Personal Data, the terms of which are herein incorporated by reference and made a part hereto. Under Appendix 1 of the Model Clauses, the "data exporter" is you and the "data importer" is BW, and the information required by Appendix 1 can be found in Exhibit 1. For the purposes of Appendix 2 of the Model Clauses, the technical and organizational measures implemented by the data importer are those listed in Section 5 of this Addendum. Pursuant to clause 5(h) of the Model Clauses, you agree that BW may engage new Third Parties in accordance with Section(s) 3(c) – 3(e) of this Addendum. The Parties agree that the Illustrative Clause (Optional) is expressly not included in the Model Clauses. Each party's agreement to this Addendum shall be considered a signature to the Model Clauses. If required by the laws or regulatory procedures of any jurisdiction, the Parties shall execute or re-execute the Model Clauses as separate documents. </p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>‍INFORMATION SECURITY PROGRAM</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <li>
                  <section className="space-y-4">
                    <p>BW agrees to implement appropriate technical and organizational measures designed to protect your Personal Data as required by Applicable Data Protection Law(s) (the "Information Security Program"). Such measures shall be designed to include:</p>
                    <ol className="list-[lower-roman] pl-6 space-y-1">
                      <li>Pseudonymisation of Your Personal Data where appropriate, and encryption of your Personal Data in transit and at rest;</li>
                      <li>The ability to ensure the ongoing confidentiality, integrity, availability of BW's Processing and Your Personal Data;</li>
                      <li>The ability to restore the availability and access to Your Personal Data in the event of a physical or technical incident;</li>
                      <li>A Process for regularly testing, assessing, and evaluating the effectiveness of BW's Information Security Program to ensure the security of your personal Data from a reasonably suspected or actual accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</li>
                    </ol>
                  </section>
                </li>
              </ol>
            </li>
            <li>
              <SectionTitle>‍SECURITY INCIDENTS</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>Security Incident Procedure:</div>
                      <p>BW will deploy and follow policies and procedures to detect, respond to, and otherwise address Security Incidents, including procedures to:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>Identify and respond to reasonably suspected or known Security Incidents, mitigate harmful effects of security Incidents, document Security Incidents, and their outcomes, and </li>
                        <li>Restore the availability or access to Your Personal Data in a timely manner.</li>
                      </ol>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Notice:</div>
                      <p>BW agrees to provide prompt written notice without undue delay and within the time frame required under Applicable Data Protection Law(s) (but in no event longer than 48 hours) to your Designated POC upon becoming aware that a Security Incident has taken place. Such notice will include all available details required under Applicable Data Protection Law(s) for you to comply with its own notification obligations to regulatory authorities or individuals affected by the Security Incident. </p>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
            <li>
              <SectionTitle>DATA STORAGE AND DELETION</SectionTitle>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <section className="space-y-4">
                  <li>
                    <section className="space-y-4">
                      <div>Data Storage:</div>
                      <p>BW will abide by the following with respect to the storage of Your Personal Data:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>BW will not store or retain any of Your Personal Data except as necessary to perform the Services under the Agreement.</li>
                        <li>
                          <div>BW will</div>
                          <ol className="pl-6 space-y-1">
                            <li>(i) inform you in writing of all countries where Your Personal Data is Processed or stored; and </li>
                            <li>(ii) obtain consent from you for Processing or storage in the identified countries.</li>
                          </ol>
                        </li>
                      </ol>
                      <p>As of the Effective Date, BW stores Your Personal Data in the following countries to which you hereby consent: United States.</p>
                    </section>
                  </li>
                  <li>
                    <section className="space-y-4">
                      <div>Data Deletion:</div>
                      <p>BW will abide by the following with respect to the deletion of Your Personal Data:</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>Within ninety (90) calendar days of the Agreement's expiration or termination, BW will securely destroy(per subsection (iii) below) all copies of Your Personal Data (including automatically created archival copies); </li>
                        <li>Upon your request, BW will promptly return you a copy of all Your Personal Data within 30 calendar days and, if you also request deletion of your personal Data, will carry that out as set forth above; </li>
                        <li>All deletion of Your Personal Data will be conducted in accordance with standard industry practices for deletion of sensitive data; and</li>
                        <li>Tapes, printed output, optical disks, and other physical media will be physically destroyed by a secure method, such as shredding performed by a bonded provider. Upon your request, BW will provide evidence that BW has deleted all Your Personal Data. BW will provide the <strong>"Certificate of Deletion"</strong> within 30 calendar days from your request.</li>
                      </ol>
                    </section>
                  </li>
                </section>
              </ol>
            </li>
          </ol>
        </article>
      </main>
    </div>
  );
};

export default DataProcessingAddendum;