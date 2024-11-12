import Image from "next/image";

export default function Contact() {
    return (
        <section className="container mx-auto px-4 py-12 flex items-center justify-between max-w-6xl">
            <div>

                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <p className="mb-4">
                    If you encounter any problems, please feel free to contact us at{' '}
                    <a href="mailto:support@b-lab.app" className="text-blue-600">
                        support@b-lab.app
                    </a>
                </p>
                <p className="mb-6 text-gray-600">* Indicates required field</p>
                <form className="space-y-4 max-w-md">
                    <div>
                        <label className="block font-medium mb-1" htmlFor="name">Name*</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border border-gray-300 p-3 rounded bg-yellow-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="email">Email*</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 p-3 rounded bg-yellow-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="notes">Notes*</label>
                        <textarea
                            id="notes"
                            className="w-full border border-gray-300 p-3 rounded bg-yellow-100 resize-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <Image src="/mail.png" alt="mail image" width={350} height={350} />
            </div>
        </section>
    );
}
