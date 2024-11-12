"use client";
import ItemWithButton from "../components/item-with-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import PricingCard from "../components/pricing";

export default function TimelineToDate() {

    function handleAdd() {
        window.open(
            "https://auth.monday.com/oauth2/authorize?client_id=f351694015254619a90011204135ab0d&response_type=install",
            "_blank" // Spécifie l'ouverture dans un nouvel onglet
        );
    }

    const features = [
        "Copy data from Item column(s), combine and paste to another Item column",
        "Copy data from Subitem column(s), combine and paste to another Subitem column",
        "Copy data from Item and Subitem column(s), combine and paste to another Subitem column",
        "Copy data from Subitem column(s), combine and paste to a parent Item column",
        "Copy data from Item column(s), combine and paste to all selected Subitem column",
    ];

    const installSteps = [
        { step: "Install app from monday apps marketplace or from the shareable URL" },
        { step: "Open board and select Integrate tab" },
        { step: "Choose Apps Timeline to Date by b-lab" },
        { step: "Choose from preset recipes" },
    ];

    const carouselImages = [
        { src: "/apps/timeline-to-date/carousel-1.png", alt: "timeline-to-date Demo 2" },
        { src: "/apps/timeline-to-date/carousel-2.png", alt: "timeline-to-date Demo 3" },
        { src: "/apps/timeline-to-date/carousel-3.png", alt: "timeline-to-date Demo 4" },

    ];

    const monthlyFeatures = [
        { text: "Custom permissions", included: true },
        { text: "Custom infrastructure", included: true },
        { text: "Custom design and features", included: false },
        { text: "Unlimited updates", included: false },
    ];

    const yearlyFeatures = [
        { text: "Unlimited updates and products", included: true },
        { text: "Custom permissions", included: true },
        { text: "Custom infrastructure", included: true },
        { text: "Custom design and features", included: true },
        { text: "Unlimited updates", included: true },
        { text: "Custom infrastructure", included: false },
    ];

    return (
        <div>
            <ItemWithButton
                imageSrc="/apps/timeline-to-date/timelinetodate.png"
                altText="timeline-to-date icon"
                name="Timeline To Date"
                onAdd={handleAdd}
            />
            <div className="flex items-center justify-center py-20">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">
                    <PricingCard
                        title="Monthly Subscription"
                        price="$6"
                        subtitle="Most Popular"
                        features={monthlyFeatures}
                        link="https://buy.stripe.com/9AQ6s9fpQ0tMfmw14k"
                    />
                    <PricingCard
                        title="One-Time Purchase"
                        price="$35"
                        subtitle="Recommended"
                        features={yearlyFeatures}
                        recommended={true}
                        link="https://buy.stripe.com/eVa2bT91sa4ma2c14q"
                    />
                </div>
            </div>


            {/* Overview Section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
                <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                    This app lets you copy data from one or different column(s) of an item or
                    subitem, combine it with your defined format and paste to another
                    selected column. You can configure to copy data in following ways:
                </p>
                <ol className="list-decimal pl-6 max-w-3xl mx-auto space-y-2 mb-12">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-700">
                            {feature}
                        </li>
                    ))}
                </ol>

                <Carousel className="max-w-8xl mx-auto">
                    <CarouselContent>
                        {carouselImages.map((image, index) => (
                            <CarouselItem key={index} className={`transition-opacity duration-300 flex items-center justify-center`}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={2000}
                                    height={1050}
                                    className="rounded-lg shadow-lg"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Masquer les boutons de navigation sur mobile */}
                    <CarouselPrevious className="hidden sm:block" />
                    <CarouselNext className="hidden sm:block" />
                </Carousel>
            </div>
            {/* Installation Section */}
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-32 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Installation/How to use
                </h2>
                <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-12">
               

                    {/* Section de droite */}
                    <div>
                        <ol className="space-y-4">
                            {installSteps.map((step, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <span className="text-gray-500">{index + 1}.</span>
                                    <span className="text-gray-700">{step.step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
}
