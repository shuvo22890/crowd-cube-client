import { Link } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import { IoMdRocket } from 'react-icons/io';
import { BsPersonFillExclamation } from 'react-icons/bs';
import { MdBusinessCenter } from 'react-icons/md';
import { TbBulbFilled } from 'react-icons/tb';

const linkCss = "bg-transparent text-info border-2 shadow shadow-lg border-info rounded-md py-4 text-xl flex items-center justify-center gap-2 uppercase font-semibold hover:bg-info hover:text-lite transition-colors";
const Categories = () => {
    return (<section className="py-28 px-2 bg-lite dark:bg-[#091425]">
        <Title title="Our Categories" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <div className="relative max-w-sm sm:max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 sm:mt-10 xl:grid-cols-4 gap-5">
            <Link className={linkCss} to="/campaigns/cateogry/Personal Issue">
                <span className='text-4xl'><BsPersonFillExclamation /></span>
                <span>Personal Issue</span>
            </Link>

            <Link className={linkCss} to="/campaigns/cateogry/Startup">
            <span className='text-4xl'><IoMdRocket /></span>
            <span>Startup</span>
            </Link>

            <Link className={linkCss} to="/campaigns/cateogry/Business">
            <span className='text-4xl'><MdBusinessCenter /></span>
            <span>Business</span>
            </Link>

            <Link className={linkCss} to="/campaigns/cateogry/Creative Ideas">
            <span className='text-4xl'><TbBulbFilled /></span>
            <span>Creative Ideas</span>
            </Link>
        </div>
    </section>
    );
};

export default Categories;