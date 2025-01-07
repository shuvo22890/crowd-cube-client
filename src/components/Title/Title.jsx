import PropTypes from 'prop-types';

const Title = ({ title, extraCSS = '', mb = 'mb-8 md:mb-10' }) => {
    return <h2 className={'text-xl sm:text-3xl text-info font-bold ' + mb + ' ' + extraCSS}>
        {title}
    </h2>;
};

Title.propTypes = {
    title: PropTypes.string,
    extraCSS: PropTypes.string,
    mb: PropTypes.string
};

export default Title;