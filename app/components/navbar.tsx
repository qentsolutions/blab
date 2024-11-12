"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo à gauche */}
                <div className="text-xl font-semibold text-gray-800">
                    <Link href="/" onClick={() => setActive("Home")}>
                        <Image src="/blab-logo.png" alt="B-Lab logo" width={80} height={80} />
                    </Link>
                </div>

                {/* Menu centré */}
                <div className="flex-1 flex justify-center space-x-8">
                    <Link href="/" onClick={() => setActive("Home")}>
                        <span
                            className={`text-gray-600 hover:text-gray-800 ${active === "Home" ? "border-b-2 border-gray-800" : ""
                                }`}
                        >
                            Home
                        </span>
                    </Link>
                    <a href="#apps" onClick={() => setActive("Our Apps")}>
                        <span
                            className={`text-gray-600 hover:text-gray-800 ${active === "Our Apps" ? "border-b-2 border-gray-800" : ""
                                }`}
                        >
                            Our Apps
                        </span>
                    </a>
                </div>

                {/* Bouton Contact Us à droite */}
                <div>
                    <a href="#contact">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
