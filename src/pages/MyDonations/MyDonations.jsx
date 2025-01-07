import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import moment from "moment";

const colDataStyles = "text-special-txt dark:text-dark-lite font-semibold";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [donations, setDonations] = useState(null);

    useEffect(() => {
        fetch('https://server-ten-wine.vercel.app/my-donations', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setDonations(data);
            }).finally(() => setLoading(false))
    }, [user])

    return (<section className="py-20 px-2">
        <Title title="My Donations" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <div className="relative max-w-screen-xl mx-auto min-h-72">
            {loading ? <Loading /> : null}

            {donations && !donations.length ? <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">
                You haven&apos;t donated yet!
            </h3> : null}

            {donations && donations.length ? <div className="overflow-x-auto">
                <table className="table text-base">
                    <thead>
                        <tr className="font-bold text-title dark:text-secondary text-xs md:text-base">
                            <th>Title</th>
                            <th>Type</th>
                            <th>Min Amount</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map(el => (<tr className="even:bg-secondary dark:even:bg-dark" key={el._id}>

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
                        </tr>))}
                    </tbody>
                </table>
            </div> : null}
        </div>
    </section>);
};

export default MyDonations;