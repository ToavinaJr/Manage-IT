const Suggestion = () => {
    const dataSuggestion = [
        {
            id: "01",
            title: "Track company-wide progress",
            text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
        {
            id: "03",
            title: "Advanced built-in reports",
            text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
            id: "03",
            title: "Everything you need in one place",
            text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
        },
    ];


    return (
        <section
            className="
                flex
                flex-col
                gap-8
            "
        >
            {dataSuggestion.map((data, index) => (
                <div
                    key={index}
                    className="
                        flex
                        mb-4
                    "
                >
                    <span
                        className="
                            bg-[#f2603b]
                            w-[6rem]
                            h-[3rem]
                            mr-3
                            flex
                            items-center
                            justify-center
                            p-4
                            rounded-full
                            text-white
                        "
                    >
                        {data.id}
                    </span>
                    <div>
                        <h1
                            className="
                                text-[#242d52]
                                font-bold
                            "
                        >
                            {data.title}
                        </h1>
                        <p
                            className="text-zinc-600"
                        >
                            {data.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Suggestion;
