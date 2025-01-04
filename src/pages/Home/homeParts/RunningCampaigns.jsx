import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import Title from "../../../components/Title/Title";
import Campaign from "../../../components/Campaign/Campaign";
import { Fade } from "react-awesome-reveal";

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isVisual, setIsVisual] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        if(!isVisual)return;
        fetch('https://assignment10-server-sigma-plum.vercel.app/running-campaigns')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
                setErr(null);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
                setErr('Something Went Wrong!');
            })
    }, [isVisual])

    return (<section className="py-28 px-2">
        <Title title="Our Running Campaigns" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <Fade triggerOnce delay={500} onVisibilityChange={inview=>{inview && setIsVisual(true) }}>
            <div className="relative max-w-screen-xl mx-auto grid sm:grid-cols-2 min-h-64 sm:mt-10 lg:grid-cols-3 gap-5">
                {loading ? <Loading /> : null}
                {err && <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">{err}</h3>}
                {campaigns && campaigns.map(el => <Campaign key={el._id} campaign={el} />)}
                {!campaigns?.length && <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">No Running Campaign Available Right Now</h3>}
            </div>
        </Fade>
    </section>);
};

export default RunningCampaigns;