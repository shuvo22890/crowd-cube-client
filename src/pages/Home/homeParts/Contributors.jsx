import Title from "../../../components/Title/Title";
import con1 from '../../../assets/img/con1.jpg';
import con2 from '../../../assets/img/con2.jpg';
import con3 from '../../../assets/img/con3.jpg';
import con4 from '../../../assets/img/con4.jpg';
import con5 from '../../../assets/img/con5.jpg';
import con6 from '../../../assets/img/con6.jpg';
import con7 from '../../../assets/img/con7.jpg';
import con8 from '../../../assets/img/con8.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Contributors = () => {
    const socialLinkClasses = "border border-info text-info bg-transparent hover:bg-info hover:text-secondary p-3 rounded-full text-lg transition-colors shadow-md";

    const socialLinks = (<div className="flex gap-3 md:gap-0 md:justify-between">
        <Link className={socialLinkClasses} to='/'>
            <FaFacebookF />
        </Link>

        <Link className={socialLinkClasses} to='/'>
            <FaXTwitter />
        </Link>

        <Link className={socialLinkClasses} to='/'>
            <FaLinkedinIn />
        </Link>

        <Link className={socialLinkClasses} to='/'>
            <FaInstagram />
        </Link>
    </div>)


    return (<section className="px-2 py-20">
        <Title title="Best Contributors of last year" extraCSS='text-center uppercase sm:text-4xl' />

        <Fade triggerOnce delay={500}>
            <div className="max-w-md sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-5 sm:mt-10">
                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con1} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Dwen Johnson</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">CEO, XYZ Solutions</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con2} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Mark Ruffalo</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">Recruiter, Amazon</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con3} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Rayan Renolds</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">Sr web developer, PH</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con4} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Robert Downey JR</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">Public relation, LWS</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con5} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Jeff Bezos</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">CEO, Amazon</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con6} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Elon Musk</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">CEO, Tesla</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con7} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">Cries Evans</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">JR Web Developer, SpaceX</p>
                        {socialLinks}
                    </div>
                </article>

                <article className="border border-info overflow-hidden rounded-lg shadow-lg flex flex-col">
                    <img src={con8} className="w-full" />
                    <div className="p-3 xl:p-5 bg-secondary dark:bg-dark grow flex flex-col">
                        <h4 className="text-2xl text-special-txt dark:text-secondary font-semibold">John Smith</h4>
                        <p className="text-lg font-semibold text-desc dark:text-dark-lite mb-3 grow">Lecturer, NSU</p>
                        {socialLinks}
                    </div>
                </article>
            </div>
        </Fade>
    </section>);
};

export default Contributors;