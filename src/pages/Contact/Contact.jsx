import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Title from '../../components/Title/Title';
import { FaLocationDot } from 'react-icons/fa6';
import contactUs from '../../assets/img/contact_us.svg';
import QuickMessageForm from './QuickMessageForm';

const Contact = () => {
    return (<section className="py-20 px-2">
        <div className="relative max-w-screen-xl mx-auto min-h-72">
            <Title title='Contact Us' extraCSS="text-center uppercase sm:text-4xl" />


            <address className="md:text-sm lg:text-lg text-desc flex flex-col md:flex-row justify-between items-center gap-5">
                <p className="flex items-center gap-2 border border-info rounded-md overflow-hidden grow w-full max-w-md">
                    <span className="basis-10 py-4 px-6 text-2xl bg-info text-secondary"><FaLocationDot /></span>
                    <span className="text-info font-semibold">Mirpur-2, Dhaka-1216</span>
                </p>

                <p className="flex items-center gap-2 border border-info rounded-md overflow-hidden grow w-full max-w-md">
                    <span className="basis-10 py-4 px-6 text-2xl bg-info text-secondary"><FaEnvelope /></span>
                    <span className="text-info font-semibold">info@crowdCube.com</span>
                </p>

                <p className="flex items-center gap-2 border border-info rounded-md overflow-hidden grow w-full max-w-md">
                    <span className="basis-10 py-4 px-6 text-2xl bg-info text-secondary"><FaPhoneAlt /></span>
                    <span className="text-info font-semibold">01792314525</span>
                </p>
            </address>

            <div className='flex flex-col-reverse md:flex-row gap-5 items-center mt-10'>
                <div className='w-full max-w-md md:w-1/2 md:max-w-full border border-dark-lite rounded-md p-3 sm:p-5'>
                    <h3 className='text-xl sm:text-2xl text-desc dark:text-lite font-semibold border-b border-dark-lite pb-2'>
                        Send us a quick message
                    </h3>

                    <QuickMessageForm />
                </div>

                <div className='w-full max-w-md md:w-1/2 md:max-w-full'>
                    <img src={contactUs} alt="Contact Us" />
                </div>
            </div>
        </div>
    </section>);
};

export default Contact;