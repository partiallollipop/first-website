import Header from "../components/Header/Header";
import HeroSection from "./Home/Hero-Section";
import Projects from "./Home/Projects";
import AboutMe from "./Home/About-Me"


export default function Home(){

    return(
        <div>
            <Header/>
            <HeroSection/>
            <Projects/>
            <AboutMe/>
        </div>
    )
}




// Remember to run npm run dev before working on shit
// Also remember to set it to watch scss



