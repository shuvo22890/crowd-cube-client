import Banner from "./homeParts/Banner";
import Contributors from "./homeParts/Contributors";
import Gallery from "./homeParts/Gallery";
import RunningCampaigns from "./homeParts/RunningCampaigns";

const Home = () => {

    return (<>
        <Banner/>
        <RunningCampaigns />
        <Gallery/>
        <Contributors/>
    </>);
};

export default Home;