import Title from "../../../components/Title/Title"
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import useContributors from "../../../hooks/useContributors";
import ContributorCard from "../../../components/ContributorCard/ContributorCard";
import Loading from "../../../components/Loading/Loading";
import { useState } from "react";

const Contributors = () => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const { contributors, loading } = useContributors(0, 8, shouldLoad);

    return (<section className="px-2 py-20">
        <Title title="Our Contributors" extraCSS='text-center uppercase sm:text-4xl' />

        <Fade triggerOnce delay={300} onVisibilityChange={inview=>{inview && setShouldLoad(true) }}>
            <div className="max-w-sm sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-3 xl:gap-5 sm:mt-10 relative min-h-96">
                {loading && <Loading />}
                {contributors.map(el => <ContributorCard key={el._id} contributor={el} />)}
            </div>

            <Link className="bg-transparent text-info border border-info rounded-md px-8 py-2 text-xl uppercase block w-fit font-semibold mx-auto mt-10 hover:bg-info hover:text-lite transition-colors" to="/contributors">
                View All
            </Link>
        </Fade>
    </section>);
};

export default Contributors;