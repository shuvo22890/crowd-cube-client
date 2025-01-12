import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import Loading from '../../components/Loading/Loading';
import moment from "moment";
import swal from "sweetalert";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Details = () => {
    const [loading, setLoading] = useState(true);
    const [donating, setDonating] = useState(false);
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const { title, amount, email, name, description, thumb, type, deadline } = details || {};
    const navigate = useNavigate();

    // Load campaign data
    useEffect(() => {
        fetch(`https://server-ten-wine.vercel.app/campaigns/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            }).catch(() => navigate('/'))
            .finally(() => setLoading(false));
    }, [id, navigate])

    const handleDonation = () => {
        const now = new Date().getTime();
        if (now > deadline) {
            swal('Error!', "You can't donate to this campaign as the deadline has passed.", 'error');
            return;
        }

        setDonating(true);
        const newData = { ...details };
        const campaign_id = newData._id;
        delete newData._id;
        fetch("https://server-ten-wine.vercel.app/donate", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...newData, campaign_id, donor_name: user.displayName, donor_email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal('Done', 'Your donation is completed.', 'success');
                    return;
                }

                const code = data.code || 0;
                if (code === 11000) {
                    swal('Wait!', 'You have already donated to this campaign.', 'warning');
                }

            }).catch(() => {
                swal('Oops!', 'Something went wrong.', 'error');
            }).finally(() => {
                setDonating(false);
            })
    }

    return (<section className="px-2 pt-5 pb-20">
                <Helmet>
                    <title>{title ? title : 'Details'} | Crowd Cube</title>
                </Helmet>

        <div className="max-w-screen-xl mx-auto">
            <div className="bg-secondary relative min-h-72 dark:bg-dark border shadow-lg rounded-md p-2 sm:p-5">
                {loading ? <Loading /> : <>
                    <div className="rounded-md relative w-full overflow-hidden max-h-[calc(100vh-170px)]">
                        <img src={thumb} className="w-full object-cover h-full" />

                        <span className="text-lite rounded-full px-3 py-1 text-base uppercase font-semibold absolute right-2 top-2 bg-info">
                            {type}
                        </span>

                        <span className="text-lite rounded-full px-3 py-1 text-lg uppercase font-semibold absolute left-2 top-2 bg-info">
                            ${amount}
                        </span>
                    </div>

                    <div className="relative text-base sm:text-xl">
                        {donating ? <Loading /> : null}
                        <p className="text-desc dark:text-lite text-lg flex items-center mt-3 gap-2 mb-2">
                            <span className="text-3xl text-info"><IoCalendarNumberSharp /></span>
                            <span className="font-semibold">{moment(deadline).format("MMM D, YYYY")}</span>
                        </p>

                        <Title title={title} />
                        <p className="text-desc dark:text-lite text-base sm:text-lg my-10 text-justify">{description}</p>

                        <p className="my-1 text-desc dark:text-lite text-lg flex items-center gap-2">
                            <span className="text-3xl text-info"><FaUserEdit /> </span>
                            <span className="font-semibold text-special-txt dark:text-secondary">{name}</span>
                        </p>

                        <p className="my-1 text-desc dark:text-lite text-lg flex items-center gap-2">
                            <span className="text-3xl text-info"><FaEnvelope /></span>
                            <span className="font-semibold text-special-txt dark:text-secondary">{email}</span>
                        </p>

                        <button className="text-info font-bold border border-info rounded-md px-8 py-2 text-xl uppercase bg-transparent hover:bg-info hover:text-secondary mt-3 transition-colors" onClick={handleDonation}>Donate</button>
                    </div>
                </>}
            </div>
        </div>
    </section>);
};

export default Details;