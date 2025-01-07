import { useParams } from "react-router-dom";
import DisplayCampaigns from "../../components/DisplayCampaigns/DisplayCampaigns";

const CategoryCampaigns = () => {
    const {cat} = useParams();
        return (<DisplayCampaigns type={cat} title={`Campaigns in "${cat}"`} />);
};

export default CategoryCampaigns;