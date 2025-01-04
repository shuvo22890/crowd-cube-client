import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import moment from "moment";
import Button from "../../components/Button/Button";
import { FaRegEye, FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import swal from "sweetalert";
import Loading from "../../components/Loading/Loading";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment10-server-sigma-plum.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
            }).catch(() => {
                swal("Oops!", "Something went wrong!", 'error');
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    const handleSort = (isDesc = false) => {
        const sorted = [...campaigns].sort((a, b) => {
            if (isDesc) return b.amount - a.amount;
            return a.amount - b.amount;
        })
        setCampaigns(sorted);
    }

    return (<section className="py-20 px-2">
        <div className="relative max-w-screen-xl mx-auto min-h-72">
            {loading ? <Loading /> : <>
                <div className="flex items-center justify-between mb-8">
                    <Title title="Campaigns" extraCSS="text-center uppercase sm:text-4xl" />

                    <details className="dropdown mb-5">
                        <summary className="btn border dark:bg-dark dark:text-secondary border-info px-5 py-0 text-lg uppercase">
                            <span>Sort</span>
                            <span><FaSort /></span>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-bold text-title dark:text-white text-sm dark:bg-dark border dark:border-dark-lite right-0 top-14">
                            <li>
                                <button className="border dark:hover:border-dark-lite focus:text-title dark:focus:text-secondary mb-2 uppercase" onClick={() => handleSort()}>
                                    <span className="text-base rounded-full p-2 bg-info text-secondary"><ImSortNumericAsc /></span>
                                    <span>Ascending</span>
                                </button>
                            </li>

                            <li>
                                <button className="border dark:hover:border-dark-lite focus:text-title dark:focus:text-secondary uppercase" onClick={() => handleSort(true)}>
                                    <span className="text-base rounded-full p-2 bg-info text-secondary"><ImSortNumbericDesc /></span>
                                    <span>Descending</span>
                                </button>
                            </li>
                        </ul>
                    </details>
                </div>

                <div className="overflow-x-auto">
                    <table className="table text-base">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-title dark:text-secondary text-xs md:text-base">
                                <th>Title</th>
                                <th>Type</th>
                                <th>Min. Amount</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map(el => (<tr className="even:bg-secondary dark:even:bg-dark" key={el._id}>

                                <td className="font-semibold text-title dark:text-secondary">
                                    {el.title}
                                </td>

                                <td className="text-special-txt dark:text-dark-lite font-semibold">
                                    {el.type}
                                </td>

                                <td className="text-special-txt dark:text-dark-lite font-semibold">
                                    ${el.amount}
                                </td>

                                <td className="text-special-txt dark:text-dark-lite font-semibold">
                                    {moment(el.deadline).format("MMM Do, YYYY")}
                                </td>

                                <td>
                                    <Link to={`/campaigns/${el._id}`}>
                                        <span className="lg:hidden text-xl text-info"><FaRegEye /></span>
                                        <Button text='See More' extraStyle="w-full hidden lg:block" />
                                    </Link>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </>}
        </div>
    </section>);
};

export default AllCampaigns;