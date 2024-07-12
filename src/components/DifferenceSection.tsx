const DifferenceSection = () => {
    return (
        <section
            className="
                w-1/2
                relative
        "
        >
            <div
                className="
                    absolute
                    left-0
                    top-0
                    translate-y-[0] translate-x-[-60%]
                    z-[-1]
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="814"
                    height="814"
                >
                    <rect
                        width="436"
                        height="970"
                        x="774"
                        y="-62"
                        fill="#FFF0EC"
                        fill-rule="evenodd"
                        rx="218"
                        transform="rotate(45 718.814 -291.157)"
                    />
                </svg>
            </div>
            <h1
                className="
                w-[44rem]
                text-3xl md:text-4xl
                text-[#242d52]
                font-medium
                mb-4
                "
            >
                What’s different about <br /> Manage?
            </h1>
            <p
                className="
                    text-zinc-500
                    text-4-sm md:text-2xl
                    mb-10
                    block
                "
            >
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
            </p>
        </section>
    );
};

export default DifferenceSection;
