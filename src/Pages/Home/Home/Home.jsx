import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ChooseMe from "../ChooseMe/ChooseMe";
import OfferedService from "../OfferedService/OfferedService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <OfferedService></OfferedService>
            <ChooseMe></ChooseMe>
        </div>
    );
};

export default Home;