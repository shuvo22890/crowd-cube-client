import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Tooltip } from "react-tooltip";

const Campaign = ({ campaign, isDonation = false }) => {
    const { _id, title, thumb, type, deadline } = campaign;
    return (<article className="shadow-lg rounded-lg flex flex-col p-3 lg:p-5 border">
            <Tooltip id="min-donate"/>
        <img src={thumb} alt={title} className="w-full border rounded-md shadow-lg" />
        <h3 className="text-title dark:text-secondary text-2xl font-bold mt-5 mb-3 grow">{title}</h3>
        <p className="text-desc dark:text-dark-lite text-lg">
            <span>Campaign Type: </span>
            <span className="font-semibold">{type}</span>
        </p>

        <p className="text-desc dark:text-dark-lite text-lg">
            <span>Deadline: </span>
            <span className="font-semibold">{moment(deadline).format("MMM Do YYYY")}</span>
        </p>

        {isDonation ? <p className="text-desc dark:text-dark-lite text-lg">
            <span data-tooltip-id="min-donate" data-tooltip-content="Minimum Donation Amount">Amount: </span>
            <span className="font-semibold">${campaign.amount}</span>
        </p> : <Link to={`/campaigns/${_id}`} className="mt-4">
            <Button text='See More' extraStyle="w-full" />
        </Link>}
    </article>);
};

Campaign.propTypes = {
    campaign: PropTypes.object,
    isDonation: PropTypes.bool
}

export default Campaign;