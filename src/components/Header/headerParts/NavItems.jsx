import PropTypes from 'prop-types';
import NavItem from './NavItem';

const NavItems = ({ user }) => {
    return (<>
        <NavItem to="/" name="Home" />
        <NavItem to="/campaigns" name="Campaigns" />

        {user ? <>
            <NavItem to="/add-campaign" name="Add Campaign" />
            <NavItem to="/my-campaigns" name="My Campaigns" />
            <NavItem to="/my-donations" name="My Donations" />
        </> : <>
            <NavItem to="/login" name="Login" />
            <NavItem to="/register" name="Register" />
        </>}
    </>);
};

NavItems.propTypes = {
    user: PropTypes.object
};

export default NavItems;