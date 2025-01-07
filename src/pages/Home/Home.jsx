import Banner from "./homeParts/Banner";
import Categories from "./homeParts/Categories";
import Contributors from "./homeParts/Contributors";
import Gallery from "./homeParts/Gallery";
import RecentCampaigns from "./homeParts/RecentCampaigns";

const Home = () => {

    return (<>
        <Banner />
        <RecentCampaigns />
        <Categories />
        <Gallery />
        <Contributors />
    </>);
};

export default Home;