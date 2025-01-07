import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Title from '../../../components/Title/Title';
import { IoEye } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import g1 from '../../../assets/img/g-1.jpg';
import g1Thumb from '../../../assets/img/g-1-thumb.jpg';
import g2 from '../../../assets/img/g-2.jpg';
import g2Thumb from '../../../assets/img/g-2-thumb.jpg';
import g3 from '../../../assets/img/g-3.jpg';
import g3Thumb from '../../../assets/img/g-3-thumb.jpg';
import g4 from '../../../assets/img/g-4.jpg';
import g4Thumb from '../../../assets/img/g-4-thumb.jpg';
import g5 from '../../../assets/img/g-5.jpg';
import g5Thumb from '../../../assets/img/g-5-thumb.jpg';
import g6 from '../../../assets/img/g-6.jpg';
import g6Thumb from '../../../assets/img/g-6-thumb.jpg';
import g7 from '../../../assets/img/g-7.jpg';
import g7Thumb from '../../../assets/img/g-7-thumb.jpg';
import g8 from '../../../assets/img/g-8.jpg';
import g8Thumb from '../../../assets/img/g-8-thumb.jpg';
import g9 from '../../../assets/img/g-9.jpg';
import g9Thumb from '../../../assets/img/g-9-thumb.jpg';
import g10 from '../../../assets/img/g-10.jpg';
import g10Thumb from '../../../assets/img/g-10-thumb.jpg';
import g11 from '../../../assets/img/g-11.jpg';
import g11Thumb from '../../../assets/img/g-11-thumb.jpg';
import g12 from '../../../assets/img/g-12.jpg';
import g12Thumb from '../../../assets/img/g-12-thumb.jpg';

const Gallery = () => {
    const galleryImgs = [
        {
            view: g1,
            thumb: g1Thumb,
            caption: "Campaign to create awareness about cancer."
        },
        {
            view: g2,
            thumb: g2Thumb,
            caption: "Success story of Luna."
        },
        {
            view: g3,
            thumb: g3Thumb,
            caption: "Meetup of new entrepreneurs in the event of CrowdCube."
        },
        {
            view: g4,
            thumb: g4Thumb,
            caption: "Situation after flood in Dhaka when our team arrived there."
        },
        {
            view: g5,
            thumb: g5Thumb,
            caption: "Some cute moments with cancer affected children."
        },
        {
            view: g6,
            thumb: g6Thumb,
            caption: "Situation of flood in Feni when we reached there."
        },
        {
            view: g7,
            thumb: g7Thumb,
            caption: "Blood donation campaign in Rangamati."
        },
        {
            view: g8,
            thumb: g8Thumb,
            caption: "Our successful woman entrepreneur."
        },
        {
            view: g9,
            thumb: g9Thumb,
            caption: "Water logging after flood in Rongpur."
        },
        {
            view: g10,
            thumb: g10Thumb,
            caption: "Fund managed and the Marathon took place finally."
        },
        {
            view: g11,
            thumb: g11Thumb,
            caption: "Dream fulfillment of running in Marathon."
        },
        {
            view: g12,
            thumb: g12Thumb,
            caption: "Coding class for people passionate about programming."
        }
    ]

    return (<section className='px-2 bg-secondary dark:bg-dark py-20'>
        <Title title="Our Photo Gallery" extraCSS='text-center uppercase sm:text-4xl mb-12' />
        <Fade triggerOnce delay={500}>
            <PhotoProvider>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 relative sm:mt-10 max-w-sm sm:max-w-screen-xl mx-auto'>
                    {galleryImgs.map(img => (<div key={img.view}>
                        <div className='group rounded-md border shadow-lg relative bg-desc' data-tooltip-id="my-tooltip" data-tooltip-content={img.caption}>
                            <img src={img.thumb} className='w-full rounded-md group-hover:opacity-70 transition-all' />

                            <PhotoView src={img.view}>
                                <button
                                    className='text-secondary hover:text-info text-4xl absolute top-1/2 scale-0 group-hover:scale-100 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden transition-all cursor-pointer'
                                    data-tooltip-id="view-text"
                                    data-tooltip-content="View Image"
                                >
                                    <IoEye />
                                </button>
                            </PhotoView>
                        </div>
                    </div>))}
                </div>
            </PhotoProvider>
        </Fade>
        <Tooltip id="my-tooltip" />
        <Tooltip id="view-text" />
    </section>);
};

export default Gallery;