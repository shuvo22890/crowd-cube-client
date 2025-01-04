import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import Campaign from "../../components/Campaign/Campaign";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [campaigns, setCampaigns] = useState(null);

    useEffect(() => {
        fetch('https://assignment10-server-sigma-plum.vercel.app/my-donations', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
            }).finally(() => setLoading(false))
    }, [user])

    return (<section className="py-28 px-2">
        <Title title="My Donations" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <div className="relative max-w-screen-xl mx-auto grid sm:grid-cols-2 min-h-64 lg:grid-cols-3 gap-5">
            {loading ? <Loading /> : null}
            {campaigns && !campaigns?.length ? <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">
                Donation is empty!
            </h3> : null}
            {campaigns && campaigns.map(el => <Campaign isDonation={true} key={el._id} campaign={el} />)}
        </div>
    </section>);
};

export default MyDonations;