import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name }) => {
    return (<li>
        <NavLink
        className={({isActive})=>`px-3 xl:px-5 text-base lg:text-lg hover:text-info hover:bg-transparent focus:text-info focus:bg-transparent ${isActive ? "text-info font-bold" : "text-desc dark:text-secondary font-medium"}`}
        to={to}
        >{name}</NavLink>
    </li>);
};

NavItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string
};

export default NavItem;