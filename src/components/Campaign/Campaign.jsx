import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IoCalendarNumberSharp } from "react-icons/io5";

const createDate = ()=>{
    const date = new Date(Date.now());
    date.setDate(date.getDate()+5);
    return date.getTime();
}

const Campaign = ({ campaign }) => {
    const { _id, title, thumb, type, deadline, amount, description } = campaign;
    const getDeadline = deadline || createDate();
    return (<article className="shadow-lg rounded-lg flex flex-col p-3 sm:p-5 xl:p-4 border">
        <div className="overflow-hidden border rounded-md shadow-lg relative">
            <img src={thumb} alt={title} className="w-full" />

            <Link className="text-lite rounded-full px-3 py-1 text-xs uppercase font-semibold absolute right-2 top-2 bg-info hover:text-title" to={`/campaigns/cateogry/${type}`}>
                {type}
            </Link>

            <span className="text-lite rounded-full px-3 py-1 text-base uppercase font-semibold absolute left-2 top-1 bg-info">
                ${amount}
            </span>
        </div>
        <p className="text-desc dark:text-lite text-lg flex items-center mt-3 gap-2">
            <span className="text-2xl text-info"><IoCalendarNumberSharp /></span>
            <span className="font-semibold">{moment(getDeadline).format("MMM D, YYYY")}</span>
        </p>
        <h3 className="text-title dark:text-secondary text-2xl font-bold mt-2 mb-3 grow">{title}</h3>

        {description && <p className="text-desc dark:text-lite text-base">
            {description.substr(0, 80)}.....
        </p>}

        <Link to={`/campaigns/${_id}`} className="mt-4">
            <Button text='See More' extraStyle="w-full" />
        </Link>
    </article>);
};

Campaign.propTypes = {
    campaign: PropTypes.object
}

export default Campaign;