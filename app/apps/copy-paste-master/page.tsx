"use client";
import ItemWithButton from "../components/item-with-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { BookText } from "lucide-react";

export default function CopyPasteMaster() {

    function handleAdd() {
        window.open(
            "https://auth.monday.com/oauth2/authorize?client_id=13f265873f70328569c14aa5a60612c1&response_type=install",
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
        { step: "Choose Apps Copy Paste Master by b-lab" },
        { step: "Choose from preset recipes" },
    ];

    const carouselImages = [
        { src: "/apps/copy-paste-master/carousel-1.png", alt: "Copy Paste Master Demo 1" },
        { src: "/apps/copy-paste-master/carousel-2.png", alt: "Copy Paste Master Demo 2" },
        { src: "/apps/copy-paste-master/carousel-3.png", alt: "Copy Paste Master Demo 3" },
    ];


    return (
        <div>
            <ItemWithButton
                imageSrc="/apps/copy-paste-master/copypastemaster.png"
                altText="Copy Paste Master icon"
                name="Copy Paste Master"
                onAdd={handleAdd}
            />
            <div className="flex items-center flex-col justify-center py-20">
                <p className="text-3xl font-bold">Pricing</p>
                <p className="mt-4">Subscription available only on monday.com marketplace</p>
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
                    {/* Section de gauche */}
                    <div className="flex items-start space-x-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Instructions file:</h3>
                            <div className="flex items-center">
                                <BookText className="text-blue-600" />
                                <p className="text-blue-600 font-medium ml-2">CPM - How to use</p>
                            </div>

                        </div>
                    </div>

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
