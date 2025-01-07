import PropTypes from 'prop-types';
import { useState } from 'react';
import useCampaigns from '../../hooks/useCampaigns';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';
import { FaAngleLeft, FaAngleRight, FaSort } from 'react-icons/fa';
import { ImSortNumbericDesc, ImSortNumericAsc } from 'react-icons/im';
import Campaign from '../Campaign/Campaign';

const sortBtnCss = 'border dark:hover:border-dark-lite focus:text-title dark:focus:text-secondary mb-2 uppercase';
const DisplayCampaigns = ({type='', title='Campaigns', running=false}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState('');
    const { campaigns, loading, total } = useCampaigns(sort, currentPage, type, 8, true, running); 
    const pages = Array(Math.ceil(total / 8)).fill(null);

    return (<section className="py-20 px-2">
        <div className="relative max-w-screen-xl mx-auto min-h-72">
            {loading ? <Loading /> : <>
                <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
                    <Title title={title} extraCSS="text-center uppercase sm:text-4xl" mb="" />

                    {total>0 && <details className="dropdown mb-5">
                        <summary className="btn border dark:bg-dark dark:text-secondary border-info py-0 text-lg uppercase">
                            <span>Sort By Deadline</span>
                            <span><FaSort /></span>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-bold text-title dark:text-white text-sm dark:bg-dark border dark:border-dark-lite right-0 top-14">
                            <li>
                                <button className={sortBtnCss + ' mb-2'} onClick={() => {
                                    setSort('asc');
                                    setCurrentPage(0);
                                }}>
                                    <span className="text-base rounded-full p-2 bg-info text-secondary"><ImSortNumericAsc /></span>
                                    <span>Ascending</span>
                                </button>
                            </li>

                            <li>
                                <button className={sortBtnCss} onClick={() => {
                                    setSort('desc');
                                    setCurrentPage(0);
                                }}>
                                    <span className="text-base rounded-full p-2 bg-info text-secondary"><ImSortNumbericDesc /></span>
                                    <span>Descending</span>
                                </button>
                            </li>
                        </ul>
                    </details>}
                </div>

                <div className="relative max-w-sm sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-10 gap-5 min-h-96">
                    {loading ? <Loading /> : null}

                    {campaigns?.map(el => <Campaign key={el._id} campaign={el} />)}
                    {!loading && !total && <h3 className="text-2xl text-warning font-semibold text-center col-span-full pt-10">No Campaign Available Right Now</h3>}
                </div>

                {total>8 && <div className="text-center mt-10">
                    <div className="join border gap-[2px] border-dark-lite">
                        <button
                            className="join-item btn text-xl text-info dark:text-lite disabled:bg-lite dark:disabled:bg-dark-lite dark:bg-dark dark:border-desc"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 0 || loading}
                        >
                            <FaAngleLeft />
                        </button>

                        <>{pages.map((el, i) => <button
                            className="join-item btn text-base sm:text-lg disabled:text-info px-3 sm:px-5 dark:bg-dark text-dark dark:text-lite dark:disabled:text-info dark:border-desc"
                            onClick={() => setCurrentPage(i)}
                            disabled={currentPage===i || loading}
                            key={i}>
                            {i + 1}
                        </button>)}</>

                        <button
                            className="join-item btn text-xl text-info dark:text-lite disabled:bg-lite dark:disabled:bg-dark-lite dark:bg-dark dark:border-desc"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage + 1 === pages.length || loading}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>}
            </>}
        </div>
    </section>);
};

DisplayCampaigns.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    running: PropTypes.bool,
};

export default DisplayCampaigns;