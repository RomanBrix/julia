import About from "../components/About";
import Consult from "../components/Consult";
import Deals from "../components/Deals";
import Documents from "../components/Documents";
import Etaps from "../components/Etaps";
import Intro from "../components/Intro";
import NewsContainer from "../components/NewsContainer";
import Services from "../components/Services";
import Videos from "../components/Videos";

export default function HeroPage() {
    return (
        <>
            <Intro />
            <NewsContainer />
            <About />
            <Documents />
            <Videos />
            <Services />
            <Consult />
            <Etaps />
            <Deals />
        </>
    );
}
