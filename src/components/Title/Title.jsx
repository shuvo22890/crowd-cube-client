import PropTypes from 'prop-types';

const Title = ({ title, extraCSS = '' }) => {
    return <h2 className={'text-xl sm:text-3xl text-special-txt dark:text-secondary font-bold mb-5 ' + extraCSS}>
        {title}
    </h2>;
};

Title.propTypes = {
    title: PropTypes.string,
    extraCSS: PropTypes.string
};

export default Title;