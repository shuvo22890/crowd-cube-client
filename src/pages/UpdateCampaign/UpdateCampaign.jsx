import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import DatePicker from "react-datepicker";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateCampaign = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [campaignData, setCampaignData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch('https://server-ten-wine.vercel.app/for-update-campaign', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id, email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.notOwnData) {
                    navigate('/');
                    return;
                }
                setCampaignData({ ...data });
                setStartDate(new Date(data.deadline))
                setLoading(false);
            })
            .catch(() => {
                swal('Oops!', 'Something went wrong.', 'error')
                    .then(() => navigate('/'))
            })
    }, [navigate, id, email])

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        if (campaignData.email !== email) {
            navigate('/');
            return;
        }

        const amount = form.amount.value;
        if (amount < 1) {
            swal('Warning!', 'Please select an amount greater than 0', 'warning');
            return;
        }

        const type = form.type.value;
        const deadline = startDate;
        const description = form.description.value;
        const thumb = form.thumb.value;
        const title = form.title.value;
        const body = { thumb, title, type, description, amount, deadline: deadline.getTime(), name: displayName, email }

        setLoading(true);
        fetch("https://server-ten-wine.vercel.app/update-campaign", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: campaignData._id, data: body })
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal('Done', 'Your campaign is updated.', 'success');
                    setLoading(false);
                }
            }).catch(() => {
                swal('Oops!', 'Something is wrong. Please check your internet connection and try again.', 'error');
                setLoading(false);
            })
    }

    return (
        <section className="max-w-screen-md mx-auto px-2 py-10">
            <Helmet>
                <title>Update Campaign | Crowd Cube</title>
            </Helmet>

            <Title title="Update Campaign" />

            <form className="relative flex flex-wrap gap-3 border shadow rounded-lg p-3 text-lg font-semibold text-desc dark:text-dark-lite min-h-56" onSubmit={handleUpdate}>
                {loading ? <Loading /> : null}

                {campaignData ? <>
                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite">
                        Thumbnail
                        <input type="text" name="thumb" placeholder="Image URL" className="grow text-special-txt dark:text-secondary bg-secondary" required defaultValue={campaignData.thumb} />
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite">
                        Title
                        <input type="text" name="title" placeholder="Campaign Title" className="grow text-special-txt dark:text-secondary bg-secondary" required defaultValue={campaignData.title} />
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto sm:items-center py-3 bg-secondary dark:bg-dark dark:border-dark-lite pr-0 basis-full sm:py-0">
                        Type
                        <select className="select focus:border-0 bg-transparent text-special-txt dark:text-secondary focus:outline-0 grow" defaultValue={campaignData.type} name="type">
                            <option disabled className="dark:bg-dark-transparent">Type of Campaign</option>
                            <option className="dark:bg-dark">Personal Issue</option>
                            <option className="dark:bg-dark">Startup</option>
                            <option className="dark:bg-dark">Business</option>
                            <option className="dark:bg-dark">Creative Ideas</option>
                        </select>
                    </label>


                    <label className="input input-bordered flex flex-col h-auto gap-2 py-3 basis-full bg-secondary dark:bg-dark dark:border-dark-lite">
                        Description
                        <textarea rows={5} className="bg-secondary dark:bg-dark textarea grow text-special-txt dark:text-secondary p-0 focus:border-0 focus:outline-0" name="description" placeholder="Enter Description" required defaultValue={campaignData.description}></textarea>
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite">
                        Amount
                        <input type="number" name="amount" placeholder="Minimum Donation Amount" className="grow text-special-txt dark:text-secondary bg-secondary" required defaultValue={campaignData.amount} />
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite">
                        Deadline
                        <DatePicker className="text-special-txt dark:text-secondary cursor-pointer" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd-MM-yyyy" />
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite opacity-70">
                        Your Email
                        <input type="email" defaultValue={email} readOnly className="grow text-special-txt dark:text-secondary bg-secondary" required />
                    </label>

                    <label className="input input-bordered flex flex-col sm:flex-row h-auto py-3 sm:items-center gap-2 basis-80 grow bg-secondary dark:bg-dark dark:border-dark-lite opacity-70">
                        Your Name
                        <input type="text" defaultValue={displayName} readOnly className="grow text-special-txt dark:text-secondary bg-secondary" required />
                    </label>

                    <Button text="Update" extraStyle="bg-transparent" />
                </> : null}
            </form>
        </section>
    );
};

export default UpdateCampaign;