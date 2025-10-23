import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-10 mb-3 text-lg">{children}</div>
);

const RefundPolicy: React.FC = () => {
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
      {/* Static Refund Policy Content */}
      <main className="min-h-screen bg-slate-50 py-6 px-4 flex justify-center">
        <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
              REFUND POLICY
            </h1>
            <p>
              <em><strong>Applicable from:</strong></em> <time>10-17-2025</time>
            </p>
          </header>
          <ol className="list-decimal list-outside space-y-6 ml-6">
            <li>
              <SectionTitle>NO REFUND</SectionTitle>
              <section className="space-y-5">
                <p>This refund policy (<strong>"Refund Policy"</strong>) details the practice followed by BW for persons pay for and use the BW website located at bossworks.ai (the <strong>"Site"</strong>) and the BW app (the <strong>"App"</strong>) (jointly referred to as <strong>"the Application"</strong>) and the products and services offered on the Application (the <strong>"Services"</strong>).</p>
                <p>By visiting the Application and/or using the Services, you have provided your informed consent to this Refund Policy. This Policy is incorporated into and is subject to the Terms of Use. Capitalized terms used but not defined in this Policy have the meaning given to them in the Terms of Use.</p>
              </section>
            </li>
          </ol>
          <ol className="list-decimal list-outside space-y-6 ml-6">
            <li>
              <SectionTitle>NO REFUND</SectionTitle>
              <p>Since BW is providing its Services digitally, it will not provide a refund in respect of a Subscription, once purchased, or any credits for partially used periods.</p>
            </li>
            <li>
              <SectionTitle>CANCELLATION OF SERVICES</SectionTitle>
              <section className="space-y-5">
                <p>A user can request a cancellation/termination of the Services and his/her/its Agreement with BW by sending an email to support@bossworks.ai. The Company will respond to the request within 2 days from the date of receipt of the request and will cancel the Services from the next billing cycle.</p>
                <p>Following any cancellation, however, your use of the Services will be valid until your paid period is complete, if applicable.</p>
              </section>
            </li>
          </ol>
        </article>
      </main>
    </div>
  );
};

export default RefundPolicy;