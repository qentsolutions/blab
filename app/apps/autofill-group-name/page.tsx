"use client";
import ItemWithButton from "../components/item-with-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import PricingCard from "../components/pricing";

export default function AutofillGroupName() {

    function handleAdd() {
        window.open(
            "https://auth.monday.com/oauth2/authorize?client_id=27957e1a299898162064c4b8a5dcea55&response_type=install",
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
        { step: "Install app from monday.com apps marketplace or from the shareable URL" },
        { step: "Open board and select Integrate tab" },
        { step: "Choose Apps Autofill Group Name by b-lab" },
    ];

    const carouselImages = [
        { src: "/apps/autofill-group-name/carousel-2.png", alt: "Autofill Group Name Demo 2" },
        { src: "/apps/autofill-group-name/carousel-3.png", alt: "Autofill Group Name Demo 3" },
        { src: "/apps/autofill-group-name/carousel-4.png", alt: "Autofill Group Name Demo 4" },
        { src: "/apps/autofill-group-name/carousel-5.png", alt: "Autofill Group Name Demo 5" },

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
                imageSrc="/apps/autofill-group-name/autofillgroupname.png"
                altText="Autofill Group Name icon"
                name="Autofill Group Name"
                onAdd={handleAdd}
            />
            <div className="flex items-center justify-center py-20">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">
                    <PricingCard
                        title="Monthly Subscription"
                        price="$5"
                        subtitle="Most Popular"
                        link="https://buy.stripe.com/14kaIp7Xo6Sadeo6oA"
                    />
                    <PricingCard
                        title="One-Time Purchase"
                        price="$25"
                        subtitle="Recommended"
                        features={yearlyFeatures}
                        recommended={true}
                        link="https://buy.stripe.com/dR603LdhI3FY0rC3cB"
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
