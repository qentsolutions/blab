import Image from "next/image";

export default function AppsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="bg-[#459fec] h-[60vh] flex items-center justify-center flex-col">
                <Image src="/monday-logo.svg" alt="Monday.com logo" width={200} height={200} className="mb-8" />
                <h3 className="text-5xl text-white font-bold">monday.com Apps</h3>
            </div>
            {children}
        </div>
    );
}
