
const ContactAbout = () => {
    const socialNetworks =  [
        "public/images/icon-facebook.svg",
        "public/images/icon-youtube.svg",
        "public/images/icon-twitter.svg",
        "public/images/icon-pinterest.svg",
        "public/images/icon-instagram.svg"
    ]
    const dataFooterMiddle = [
        "Home",
        "Pricing",
        "Products",
        "About Us",
    ];
    const rightData = [
        "Careers",
        "Community",
        "Privacy Policy"
    ]
  return (
    <div
        className="
            flex 
            flex-col items-center
            gap-5
            md:flex-row
            md:4 md:12
            md:py-8 md:px-24 md:justify-around md:items-start
        "
    >
        <div
            className="
            flex
            flex-col
            justify-between
            md:gap-10
            "
        >
            <img 
                src="images/logo.svg" 
                alt="" 
                className="
                    my-4
                    md:my-0
                "
            />

            <ul
                className="
                    flex
                    gap-5
                    w-fit
                "
            >
                {
                    socialNetworks.map((socialNetwork, index) => (
                        <li
                            key={index}
                            className="
                                hover:cursor-pointer
                                hover:underline
                            "
                        >
                            <img src={socialNetwork} alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>

        <ul
            className="
                gap-5
            "
        >
            {
                dataFooterMiddle.map((data, index) => (
                    <li
                        key={index}
                        className="
                            text-white
                            hover:cursor-pointer
                            hover:underline
                        "
                    >
                        {data}
                    </li>
                ))
            }
        </ul>
        <div
            className=""
        >
            <ul
            className="
                flex-col
                gap-5
            "
        >
            {
                rightData.map((data, index) => (
                    <li
                        key={index}
                        className="
                            text-white
                            hover:cursor-pointer
                            hover:underline
                        "
                    >
                        {data}
                    </li>
                ))
            }
        </ul>
        </div>
        <div
            className=""
        >
            <form 
                action=""
                className="
                    flex
                    gap-3
                    mb-5
                "
            >
                <input 
                    type="text" 
                    placeholder="Update in your inbox" 
                    className="
                        p-4
                        rounded-3xl
                        inline-none
                    "
                />
                <button 
                    type="submit"
                    className="
                        text-white
                        bg-[#f33b0e]
                        p-5
                        rounded-full
                    "
                >
                    Go
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactAbout