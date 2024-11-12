import Image from "next/image";

// components/PartnerSection.js
export default function PartnerSection() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Partner</h2>
            
            <div className=" max-w-6xl mx-auto">
                <p className="text-left text-gray-600 mb-4">
                    Unlock the Full Potential of Monday.com with Workflow Made Easy
                </p>
                <p className="text-left text-gray-600 mb-8">
                    At B-Lab, we excel in building custom Monday apps tailored to your needs. But for businesses looking to harness the true power of Monday.com for optimized workflows, the journey doesn’t stop at just apps.
                </p>

                <div className="text-left mb-8">
                    <h3 className="font-semibold mb-4">Meet Our Trusted Partner: Workflow Made Easy</h3>
                    <Image
                        src="/wme-logo.png" // Remplace par le chemin réel de l'image
                        alt="Workflow Made Easy Logo"
                        width={250}
                        height={250}
                    />
                </div>

                <p className="text-left text-gray-600">
                    Whether you’re a startup or an enterprise, WME specializes in consulting services specifically designed for Monday.com implementations. Their expert consultants guide businesses through tailored strategies, ensuring seamless integration and maximized productivity.
                </p>
            </div>
        </section>
    );
}
