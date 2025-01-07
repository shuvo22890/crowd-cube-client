import { FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Title from '../../components/Title/Title';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Newsletter from "./Newsletter";

const Footer = () => {
    const socialLinkClasses = "border border-info rounded-lg p-3 shadow-lg bg-transparent hover:bg-info hover:text-secondary transition-colors";
    const { user } = useContext(AuthContext);

    return (<footer className="bg-secondary dark:bg-dark">
        <div className="max-w-screen-xl mx-auto px-2 xl:px-0 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-y-12 sm:gap-x-10 py-20">
            <div className="col-span-full md:col-span-2 max-w-screen-md">
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
                <Title title="Useful Links" mb="mb-4" />

                <ul className="text-desc dark:text-lite text-lg">
                    <li className="my-2 hover:text-info">
                        <Link to="/campaigns">All Campaigns</Link>
                    </li>

                    <li className="my-2 hover:text-info">
                        <Link to="/contributors">Contributors</Link>
                    </li>
                    {user ? <>
                        <li className="my-2 hover:text-info">
                            <Link to="/my-campaigns">My Campaigns</Link>
                        </li>

                        <li className="my-2 hover:text-info">
                            <Link to="/my-donations">My Donations</Link>
                        </li>
                    </> : <>
                        <li className="my-2 hover:text-info">
                            <Link to="/login">Login</Link>
                        </li>

                        <li className="my-2 hover:text-info">
                            <Link to="/register">Register</Link>
                        </li>
                    </>}
                </ul>
            </div>

            <Newsletter />
        </div>

        <p className="bg-dark-main-sec border-t border-desc text-center text-base sm:text-lg py-5 text-secondary font-semibold">
            &copy; All Right Reserved By
            <Link className="pl-1 uppercase font-bold text-white" to="/">
                Crowd<span className="text-info">Cube</span>
            </Link>
        </p>
    </footer>);
};

export default Footer;