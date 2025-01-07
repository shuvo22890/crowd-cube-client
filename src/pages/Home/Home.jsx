import Banner from "./homeParts/Banner";
import Categories from "./homeParts/Categories";
import Contributors from "./homeParts/Contributors";
import Gallery from "./homeParts/Gallery";
import OurCampaigns from "./homeParts/OurCampaigns";

const Home = () => {

    return (<>
        <Banner />
        <OurCampaigns />
        <Categories />
        <Gallery />
        <Contributors />
    </>);
};

export default Home;