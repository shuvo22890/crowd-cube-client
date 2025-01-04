import PropTypes from 'prop-types';

const Button = ({ text, extraStyle='bg-transparent' }) => {
    return (<button className={"py-2 rounded-md font-bold border border-info text-info uppercase text-lg basis-full hover:bg-info hover:text-white transition-colors " + extraStyle}>{text}</button>);
};

Button.propTypes = {
    text: PropTypes.string,
    extraStyle: PropTypes.string
};

export default Button;