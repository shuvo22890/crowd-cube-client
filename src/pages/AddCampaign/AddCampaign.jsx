import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../../components/Title/Title";
import swal from 'sweetalert';
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";

const AddCampaign = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;

        const type = form.type.value;
        if (type === 'Type of Campaign') {
            swal('Warning!', 'Please select type of campaign.', 'warning');
            return;
        }

        const amount = form.amount.value;
        if(amount<1){
            swal('Warning!', 'Please select an amount greater than 0', 'warning');
            return;
        }

        const deadline = startDate;
        const dayOfDeadline = deadline.getDate();
        const dayOfToday = new Date().getDate();
        if (dayOfDeadline <= dayOfToday) {
            swal('Warning!', 'Please select a deadline greater than today', 'warning');
            return;
        }

        const description = form.description.value;
        const thumb = form.thumb.value;
        const title = form.title.value;
        const body = { thumb, title, type, description, amount, deadline: deadline.getTime(), name: displayName, email }
        setLoading(true);
        fetch("https://server-ten-wine.vercel.app/add-campaign", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal('Well Done', 'You Have Added A New Campaign.', 'success');
                    form.reset();
                    setStartDate(new Date);
                    setLoading(false);
                }
            }).catch(() => {
                swal('Oops!', 'Something is wrong. Please check your internet connection and try again.', 'error');
                setLoading(false);
            })
    }

    const fieldCommonClasses = "input input-bordered flex flex-col bg-secondary dark:bg-dark dark:border-dark-lite ";
    const halfSizeFields = "sm:flex-row h-auto sm:items-center py-3 ";

    return (
        <section className="max-w-screen-md mx-auto px-2 py-10">
            <Title title="Add A New Campaign" />

            <form className="relative flex flex-wrap gap-3 border shadow rounded-lg p-3 text-lg font-semibold text-desc dark:text-dark-lite" onSubmit={handleAdd}>
                {loading ? <Loading /> : null}

                <label className={fieldCommonClasses + halfSizeFields + 'basis-80 gap-2 grow'}>
                    Thumbnail
                    <input type="text" name="thumb" placeholder="Image URL" className="grow text-special-txt dark:text-secondary bg-secondary" required />
                </label>

                <label className={fieldCommonClasses + halfSizeFields + 'basis-80 gap-2 grow'}>
                    Title
                    <input type="text" name="title" placeholder="Campaign Title" className="grow text-special-txt dark:text-secondary bg-secondary" required />
                </label>

                <label className={fieldCommonClasses + halfSizeFields + "pr-0 basis-full sm:py-0"}>
                    Type
                    <select className="select focus:border-0 bg-transparent text-special-txt dark:text-secondary focus:outline-0 grow" defaultValue="Type of Campaign" name="type">
                            <option disabled className="dark:bg-dark-transparent">Type of Campaign</option>
                            <option className="dark:bg-dark">Personal Issue</option>
                            <option className="dark:bg-dark">Startup</option>
                            <option className="dark:bg-dark">Business</option>
                            <option className="dark:bg-dark">Creative Ideas</option>
                    </select>
                </label>


                <label className={fieldCommonClasses + "h-auto gap-2 py-3 basis-full"}>
                    Description
                    <textarea rows={5} className="bg-secondary dark:bg-dark textarea grow text-special-txt dark:text-secondary p-0 focus:border-0 focus:outline-0" name="description" required placeholder="Enter Description"></textarea>
                </label>

                <label className={fieldCommonClasses + halfSizeFields + 'basis-80 gap-2 grow'}>
                    Amount
                    <input type="number" name="amount" placeholder="Minimum Donation Amount" className="grow text-special-txt dark:text-secondary bg-secondary" required />
                </label>

                <label className={fieldCommonClasses + halfSizeFields + 'basis-80 gap-2 grow'}>
                    Deadline
                    <DatePicker className="text-special-txt dark:text-secondary cursor-pointer" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd-MM-yyyy" />
                </label>

                <label className={fieldCommonClasses + halfSizeFields + "basis-80 gap-2 grow opacity-70"}>
                    Your Email
                    <input type="email" defaultValue={email} readOnly className="grow text-special-txt dark:text-secondary bg-secondary" required />
                </label>

                <label className={fieldCommonClasses + halfSizeFields + "basis-80 gap-2 grow opacity-70"}>
                    Your Name
                    <input type="text" defaultValue={displayName} readOnly className="grow text-special-txt dark:text-secondary bg-secondary" required />
                </label>

                <Button text="Add" extraStyle="bg-transparent" />
            </form>
        </section>
    );
};

export default AddCampaign;