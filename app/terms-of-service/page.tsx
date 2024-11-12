"use client";

import { Separator } from "@/components/ui/separator";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <main >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <ScrollText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: June 14, 2022</p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Interpretation and Definitions</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">1.1 Interpretation</h3>
                  <p className="text-muted-foreground">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                    The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>

                  <h3 className="text-xl font-medium">1.2 Definitions</h3>
                  <div className="space-y-2">
                    {[
                      { term: "Affiliate", definition: 'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                      { term: "Country", definition: "Refers to: Vietnam" },
                      { term: "Company", definition: "Refers to b-lab, 345 Kim Ma, Ba Dinh, Hanoi." },
                      { term: "Device", definition: "Any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                      { term: "Service", definition: "Refers to the Website." },
                    ].map(({ term, definition }) => (
                      <div key={term} className="pl-4 border-l-2 border-primary/20">
                        <dt className="font-medium text-primary">{term}</dt>
                        <dd className="text-muted-foreground">{definition}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Acknowledgment</h2>
                <p className="text-muted-foreground">
                  These are the Terms and Conditions governing the use of this Service and the agreement that operates 
                  between You and the Company. These Terms and Conditions set out the rights and obligations of all users 
                  regarding the use of the Service.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these 
                  Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or 
                  use the Service.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Links to Other Websites</h2>
                <p className="text-muted-foreground">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled 
                  by the Company. The Company has no control over, and assumes no responsibility for, the content, 
                  privacy policies, or practices of any third party web sites or services.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason 
                  whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, You can contact us:
                </p>
                <p className="mt-2">
                  <a href="mailto:support@b-lab.app" className="text-primary hover:underline">
                    support@b-lab.app
                  </a>
                </p>
              </section>
            </div>
        </div>
      </div>
    </main>
  );
}