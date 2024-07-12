import HeroText from "./HeroText";
import DifferenceSection from "./DifferenceSection";
import Suggestion from "./Suggestion";
import TeamSection from "./TeamSection";

const Main = () => {
    return (
        <main
            className="
            p-10
        "
        >
            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    gap-20
                "
            >
                <HeroText />

                <img
                    src="public/images/illustration-intro.svg"
                    alt="Illustration image"
                    className=""
                />
            </div>
            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                "
            >
                <DifferenceSection />
                <Suggestion />
            </div>
            <TeamSection />
        </main>
    );
};

export default Main;
