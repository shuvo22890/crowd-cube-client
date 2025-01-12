import { useState } from "react";
import ContributorCard from "../../components/ContributorCard/ContributorCard";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";
import useContributors from "../../hooks/useContributors";
import { Helmet } from "react-helmet-async";

const AllContributors = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { contributors, loading, total } = useContributors(currentPage);
    const totalPage = Math.ceil(total / 8);

    return (<section className="py-20 px-2">
            <Helmet>
                <title>Contributors | Crowd Cube</title>
            </Helmet>

        <div className="relative max-w-screen-xl mx-auto min-h-72">
            <Title title="Contributors" extraCSS="text-center uppercase sm:text-4xl" />

            <div className="max-w-sm sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-3 xl:gap-5 sm:mt-10 relative min-h-96">
                {loading && <Loading />}
                {contributors.map(el => <ContributorCard key={el._id} contributor={el} />)}
            </div>

            {total > 8 && !loading && <div className="gap-2 grid max-w-72 mt-16 mx-auto grid-cols-2">
                <button 
                    className="join-item btn btn-outline dark:border-lite dark:text-lite disabled:opacity-70"
                    disabled={currentPage===0}
                    onClick={()=>setCurrentPage(currentPage-1)}>
                    Prev
                </button>
                <button
                    className="join-item btn btn-outline dark:border-lite dark:text-lite disabled:opacity-70"
                    disabled={currentPage + 1 === totalPage}
                    onClick={()=>setCurrentPage(currentPage+1)}>
                    Next
                </button>
            </div>}
        </div>
    </section>
    );
};

export default AllContributors;