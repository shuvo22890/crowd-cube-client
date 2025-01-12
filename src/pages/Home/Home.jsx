import { Helmet } from "react-helmet-async";
import Banner from "./homeParts/Banner";
import Categories from "./homeParts/Categories";
import Contributors from "./homeParts/Contributors";
import Gallery from "./homeParts/Gallery";
import OurCampaigns from "./homeParts/OurCampaigns";

const Home = () => {

    return (<>
        <Helmet>
            <title>Home | Crowd Cube</title>
        </Helmet>

        <Banner />
        <OurCampaigns />
        <Categories />
        <Gallery />
        <Contributors />
    </>);
};

export default Home;