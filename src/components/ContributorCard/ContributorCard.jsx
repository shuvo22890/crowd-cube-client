import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinkClasses = "border border-info text-info bg-transparent hover:bg-info hover:text-secondary p-3 rounded-full text-lg transition-colors shadow-md";

const SocialLinks = () => (<div className="flex gap-3 md:gap-0 md:justify-between">
    <a className={socialLinkClasses} href="#">
        <FaFacebookF />
    </a>

    <a className={socialLinkClasses} href="#">
        <FaXTwitter />
    </a>

    <a className={socialLinkClasses} href="#">
        <FaLinkedinIn />
    </a>

    <a className={socialLinkClasses} href="#">
        <FaInstagram />
    </a>
</div>)

const ContributorCard = ({ contributor }) => {
    return (<article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
        <img src={contributor.image} className="w-full" />
        <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
            <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">
                {contributor.name}
            </h4>
            <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">
                {contributor.designation}
            </p>

            <SocialLinks />
        </div>
    </article>);
};

ContributorCard.propTypes = {
    contributor: PropTypes.object
};

export default ContributorCard;