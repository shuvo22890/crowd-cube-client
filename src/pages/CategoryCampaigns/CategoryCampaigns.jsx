import { useParams } from "react-router-dom";
import DisplayCampaigns from "../../components/DisplayCampaigns/DisplayCampaigns";
import { Helmet } from "react-helmet-async";

const CategoryCampaigns = () => {
    const { cat } = useParams();
    return (<>
        <Helmet>
            <title>{`Campaigns in "${cat}" Category`} | Crowd Cube</title>
        </Helmet>
        <DisplayCampaigns type={cat} title={`Campaigns in "${cat}"`} />
    </>);
};

export default CategoryCampaigns;