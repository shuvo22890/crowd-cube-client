import PropTypes from 'prop-types';
import NavItem from './NavItem';

const NavItems = ({ user }) => {
    return (<>
        <NavItem to="/" name="Home" />
        <NavItem to="/campaigns" name="Campaigns" />
        <NavItem to="/contributors" name="Contributors" />
        <NavItem to="/running-campaigns" name="Running Campaigns" />
        <NavItem to="/contact" name="Contact" />

        {!user && <NavItem to="/login" name="Login" />}
    </>);
};

NavItems.propTypes = {
    user: PropTypes.object
};

export default NavItems;