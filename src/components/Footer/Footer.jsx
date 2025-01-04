import { FaEnvelope, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Title from '../../components/Title/Title';

const Footer = () => {
    const socialLinkClasses = "border border-info rounded-lg p-3 shadow-lg bg-transparent hover:bg-info hover:text-secondary transition-colors";

    return (<footer className="bg-secondary dark:bg-dark">
        <div className="max-w-screen-xl mx-auto px-2 xl:px-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-5 py-20">
            <div className="col-span-full lg:col-span-1 max-w-screen-md">
                <Link className="text-2xl sm:text-3xl uppercase font-bold text-title dark:text-white" to="/">
                    Crowd<span className="text-info">Cube</span>
                </Link>

                <p className="text-desc dark:text-dark-lite text-base xl:text-lg mt-5">CrowdCube is crowd funding organization working worlwide. We served almost 20k people worlwide and we are dedicated to increase this number to 1M within the next five years.</p>

                <div className="text-xl text-info flex gap-2 mt-5">
                    <Link className={socialLinkClasses} to="/"><FaFacebookF /></Link>
                    <Link className={socialLinkClasses} to="/"><FaXTwitter /></Link>
                    <Link className={socialLinkClasses} to="/"><FaYoutube /></Link>
                    <Link className={socialLinkClasses} to="/"><FaTelegramPlane /></Link>
                </div>
            </div>

            <div>
                <Title title="Contact Us"/>

                <address className="text-lg text-desc mt-5">
                    <p className="flex items-center gap-2 border border-special-txt rounded-md overflow-hidden">
                        <span className="basis-10 py-4 px-6 text-2xl bg-special-txt text-secondary"><FaEnvelope /></span>
                        <span className="text-special-txt dark:text-dark-lite font-semibold">info@crowdCube.com</span>
                    </p>

                    <p className="flex items-center gap-2 border border-special-txt rounded-md overflow-hidden my-2">
                        <span className="basis-10 py-4 px-6 text-2xl bg-special-txt text-secondary"><FaPhoneAlt /></span>
                        <span className="text-special-txt dark:text-dark-lite font-semibold">00950-32309</span>
                    </p>

                    <p className="flex items-center gap-2 border border-special-txt rounded-md overflow-hidden">
                        <span className="basis-10 py-4 px-6 text-2xl bg-special-txt text-secondary"><FaLocationDot /></span>
                        <span className="text-special-txt dark:text-dark-lite font-semibold">Mirpur-2, Dhaka-1216</span>
                    </p>
                </address>
            </div>

            <div>
                <Title title="Newsletter"/>
                <p className="text-desc dark:text-dark-lite text-base xl:text-lg mb-4">Join our newsletter to get the latest update about us and get the news about upcoming campaigns.</p>

                <form className="flex border border-info rounded-md overflow-hidden">
                    <input type="email" placeholder="Email" className="bg-transparent p-3 grow border-r border-info text-base text-desc dark:text-secondary" required />
                    <button className="flex items-center gap-2 hover:bg-secondary dark:hover:bg-dark bg-info hover:text-info text-secondary p-3 md:px-5 transition-colors uppercase text-lg font-semibold">
                        <span><FaPaperPlane/></span>
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </div>

        <p className="bg-title text-center text-base sm:text-lg py-5 text-secondary font-semibold">
            &copy; All Right Reserved By
            <Link className="pl-1 uppercase font-bold text-white" to="/">
                Crowd<span className="text-info">Cube</span>
            </Link>
        </p>
    </footer>);
};

export default Footer;