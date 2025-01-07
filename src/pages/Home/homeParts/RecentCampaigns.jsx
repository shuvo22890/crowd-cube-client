import { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import Title from "../../../components/Title/Title";
import Campaign from "../../../components/Campaign/Campaign";
import { Fade } from "react-awesome-reveal";
import useCampaigns from "../../../hooks/useCampaigns";

const RecentCampaigns = () => {
    const [isVisual, setIsVisual] = useState(false);
    const { campaigns, loading, total } = useCampaigns('sort-by-deadline', 0, '', 8, isVisual);

    return (<section className="py-28 px-2">
        <Title title="Our Recent Campaigns" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <Fade triggerOnce delay={500} onVisibilityChange={inview => { inview && setIsVisual(true) }}>
            <div className="relative max-w-sm sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 min-h-64 sm:mt-10 xl:grid-cols-4 gap-5">
                {loading ? <Loading /> : null}

                {campaigns?.map(el => <Campaign key={el._id} campaign={el} />)}

                {!loading && !total && <h3 className="text-xl text-warning font-semibold text-center col-span-full pt-10">No Campaign Available Right Now</h3>}
            </div>
        </Fade>
    </section>);
};

export default RecentCampaigns;