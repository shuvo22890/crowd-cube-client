import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import { FaEdit } from "react-icons/fa";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { MdOutlineDelete } from "react-icons/md";
import swal from "sweetalert";
import moment from "moment";

const MyCampaigns = () => {
    const [campaigns, setCampaigns] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const { email } = user;

    const loadMyCampaigns = useCallback(() => {
        setLoading(true);
        fetch('https://assignment10-server-sigma-plum.vercel.app/my-campaigns', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
            }).catch(() => {
                swal('Oops!', 'Failed to load. Please check your internet conection and try again.', 'error');
            }).finally(() => {
                setLoading(false)
            })
    }, [email])

    useEffect(loadMyCampaigns, [loadMyCampaigns]);


    const handleDelete = (campaign_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover it.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    setLoading(true);
                    fetch('https://assignment10-server-sigma-plum.vercel.app/delete-campaign', {
                        method: 'DELETE',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ id: campaign_id })
                    }).then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                swal("Done", "Your campaign has been deleted!", "success")
                                    .then(loadMyCampaigns)
                            }
                        }).catch(() => {
                            swal("Oops!", "Something went wrong.", "error")
                        }).finally(()=>setLoading(false))
                }
            })
    }

    const actionBtnStyles = "flex items-center gap-2 border rounded-md p-1 md:px-4 transition-colors md:py-2 font-semibold uppercase hover:text-secondary ";
    const colDataStyles = "text-special-txt dark:text-dark-lite font-semibold";

    return (<section className="py-20 px-2">
        <Title title="My Campaigns" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <div className="relative max-w-screen-xl mx-auto min-h-72">
            {loading ? <Loading /> : null}

            {campaigns && !campaigns.length ? <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">
                No campaign available to show!
            </h3> : null}

            {campaigns && campaigns.length ? <div className="overflow-x-auto">
                <table className="table text-base">
                    <thead>
                        <tr className="font-bold text-title dark:text-secondary text-xs md:text-base">
                            <th>Title</th>
                            <th>Type</th>
                            <th>Min Amount</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map(el => (<tr className="even:bg-secondary dark:even:bg-dark" key={el._id}>

                            <td className="font-semibold text-title dark:text-secondary">
                                {el.title}
                            </td>

                            <td className={colDataStyles}>
                                {el.type}
                            </td>

                            <td className={colDataStyles}>
                                ${el.amount}
                            </td>

                            <td className={colDataStyles}>
                                {moment(el.deadline).format("MMM Do, YYYY")}
                            </td>

                            <td className="flex text-lg sm:text-2xl">
                                <Link className={actionBtnStyles + 'mr-2 border-info hover:bg-info text-info'} to={`/update-campaign/${el._id}`}>
                                    <FaEdit />
                                    <span className="text-sm hidden md:block">Update</span>
                                </Link>

                                <button type="button" onClick={() => handleDelete(el._id)} className={actionBtnStyles + ' border-warning hover:bg-warning text-warning'}>
                                    <MdOutlineDelete />
                                    <span className="text-sm hidden md:block">Delete</span>
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div> : null}
        </div>
    </section>);
};

export default MyCampaigns;