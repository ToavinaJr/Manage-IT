import ButtonStart from "./ButtonStart";

const TeamSection = () => {
    const cardData = [
        {
            image: "public/images/avatar-anisha.png",
            name: "Anisha Li",
            text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        },
        {
            image: "public/images/avatar-ali.png",
            name: "Ali Bravo",
            text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused",
        },
        {
            image: "public/images/avatar-richard.png",
            name: "Richard Watts",
            text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
        },
    ];
    
    return (
        <section>
            <h1
                className="
                text-center
                text-4xl
                text-[#242d52]
                font-bold
                m-10
            "
            >
                What they’ve said
            </h1>
            <ul
                className="
                flex
                flex-col
                md:flex-row
                items-center
                justify-center
                w-full
                gap-20
            "
            >
                {cardData.map((card, index) => (
                    <li
                        key={index}
                        className="
                            w-[19rem]
                            p-5
                            bg-zinc-100  
                            relative
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                        "
                    >
                        <img
                            src={card.image}
                            alt="Avatar"
                            className="
                                absolute left-[50%] -translate-x-[50%] -translate-y-[80%] -translate-[y-50%]
                            "
                            width={60}
                        />
                        <div
                            className="
                                pt-10
                                text-center
                                font-bold
                                text-[#242d52]
                            "
                        >
                            {card.name}
                        </div>
                        <p
                            className="
                                text-center
                                text-zinc-700
                            "
                        >
                            "{card.text}"
                        </p>
                    </li>
                ))}
            </ul>
            <div
                className="
                    m-5
                    flex
                    justify-center
                "
            >
                <ButtonStart />
            </div>
        </section>
    );
};

export default TeamSection;
