import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#2a3857] text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Social Media */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <Image src="/blab-logo.png" alt="b-lab logo" width={100} height={100} />
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center space-x-8 md:space-x-16">
                        <div>
                            <h4 className="font-semibold mb-4">Our Apps</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Products</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                                <li><a href="#" className="hover:text-white">Contact us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="hover:text-white">Privacy</a></li>
                                <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
