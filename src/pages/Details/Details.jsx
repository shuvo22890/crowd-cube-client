import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import Loading from '../../components/Loading/Loading';
import moment from "moment";
import swal from "sweetalert";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';

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
        fetch(`https://assignment10-server-sigma-plum.vercel.app/campaigns/${id}`)
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
        fetch("https://assignment10-server-sigma-plum.vercel.app/donate", {
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

    return (<section className="px-2 py-20">
        <div className="max-w-screen-md mx-auto">
            <div className="bg-secondary relative min-h-72 dark:bg-dark border shadow-lg rounded-md p-2 sm:p-5">
                {loading ? <Loading /> : <>
                    <img src={thumb} className="rounded-md w-full" />

                    <div className="relative text-base sm:text-xl pt-8">
                        {donating ? <Loading /> : null}
                        <Title title={title} />
                        <p className="text-desc dark:text-dark-lite text-base sm:text-lg mb-5">{description}</p>

                        <p className="my-1 text-desc dark:text-dark-lite">
                            <span>Campaign Type: </span>
                            <span className="font-semibold text-special-txt dark:text-secondary">{type}</span>
                        </p>

                        <p className="my-1 text-desc dark:text-dark-lite">
                            <span>Deadline: </span>
                            <span className="font-semibold text-special-txt dark:text-secondary">{moment(deadline).format("MMM Do YYYY")}</span>
                        </p>

                        <p className="my-1 text-desc dark:text-dark-lite">
                            <span>Minimum Donation Amount: </span>
                            <span className="font-semibold text-special-txt dark:text-secondary">${amount}</span>
                        </p>

                        <p className="my-1 text-desc dark:text-dark-lite">
                            <span>Published By: </span>
                            <span className="font-semibold text-special-txt dark:text-secondary">{name}</span>
                        </p>

                        <p className="my-1 text-desc dark:text-dark-lite">
                            <span>Email: </span>
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