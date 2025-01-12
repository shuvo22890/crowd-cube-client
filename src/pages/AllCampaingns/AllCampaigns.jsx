import { Helmet } from "react-helmet-async";
import DisplayCampaigns from "../../components/DisplayCampaigns/DisplayCampaigns";

const AllCampaigns = () => {
    return (<>
        <Helmet>
            <title>All Campaigns | Crowd Cube</title>
        </Helmet>
        <DisplayCampaigns />
    </>);
};

export default AllCampaigns;