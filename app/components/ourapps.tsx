// components/OurApps.js
export default function OurApps() {
    const apps = [
        { name: "Autofill Group Name", imageSrc: "/apps/autofill-group-name/autofillgroupname.png", link: "/apps/autofill-group-name" },
        { name: "Auto-Increment Numbers", imageSrc: "/apps/auto-increment-numbers/autoincrementnumbers.png", link: "/apps/auto-increment-numbers" },
        { name: "Timeline to Date", imageSrc: "/apps/timelinetodate.png", link: "/apps/timeline-to-date" },
        { name: "Copy Paste Master", imageSrc: "/apps/copy-paste-master/copypastemaster.png", link: "/apps/copy-paste-master" },
        { name: "Subitem Pro Templates", imageSrc: "/apps/subitem-pro-templates/subitemprotemplates.png", link: "/apps/subitem-pro-templates" },
        { name: "Approval & Feedback", imageSrc: "/apps/approval-and-feedback/approvalandfeedback.png", link: "/apps/approval-and-feedback" },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-28">
                {apps.map((app, index) => (
                    <div key={index} className="text-center">
                        <a href={app.link} className="cursor-pointer mt-2 inline-block">
                            <div className="mb-4">
                                <img
                                    src={app.imageSrc}
                                    alt={app.name}
                                    className="w-24 mx-auto bg-white p-4 rounded-full"
                                />
                            </div>
                            <h3 className="font-medium">{app.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
