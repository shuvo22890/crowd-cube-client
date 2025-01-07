import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

import slide1 from '../../../assets/img/slide1.jpg';
import slide2 from '../../../assets/img/slide2.jpg';
import slide3 from '../../../assets/img/slide3.jpg';
import slide4 from '../../../assets/img/slide4.jpg';
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    const txtContainerCss = 'max-w-screen-sm mb-20 md:mb-0';
    const titleCss = 'text-xl sm:text-4xl font-bold text-white dark:text-secondary uppercase mb-2 md:mb-5';
    const descCss = 'text-base sm:text-lg font-semibold text-white';

    return (<section className="bg-secondary relative banner">
        <Fade triggerOnce delay={500}>
            <div className=''>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    navigation
                    loop
                >
                    <SwiperSlide>
                        <div className='relative max-h-[calc(100vh-150px)]'>
                            <div className="w-full h-full px-2 md:h-full absolute z-20 top-0 left-0">
                                <div className='max-w-screen-xl mx-auto h-full flex items-end md:items-center'>
                                    <div className={txtContainerCss}>
                                        <h2 className={titleCss}>We are happy for Emma</h2>
                                        <p className={descCss}>Emma is a young enterpreneur. 4 years ago, she started her boutique house in a small room. Now almost 300 employees work under her. She has made a long journey and it wasn&apos;t smooth. We are happy to be a part of her success.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={slide1} className="w-full min-h-[450px] h-full object-cover" />
                            <div className='absolute w-full h-full left-0 top-0 bg-[#03031e95]'>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='relative max-h-[calc(100vh-150px)]'>
                            <div className="w-full h-full px-2 md:h-full absolute z-20 top-0 left-0">
                                <div className='max-w-screen-xl mx-auto h-full flex items-end md:items-center'>
                                    <div className={txtContainerCss}>
                                        <h2 className={titleCss}>The second life of maddy</h2>
                                        <p className={descCss}>Last year Maddy had a severe road accident. Her legs were completely paralysed after the accident and the treatment was so costly. But finally she survived. Now she can lead a normal life. It is a priceless moment for us to see her healthy & sound.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={slide2} className="w-full min-h-[450px] h-full object-cover" />
                            <div className='absolute w-full h-full left-0 top-0 bg-[#03031e95]'>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative max-h-[calc(100vh-150px)]'>
                            <div className="w-full h-full px-2 md:h-full absolute z-20 top-0 left-0">
                                <div className='max-w-screen-xl mx-auto h-full flex items-end md:items-center'>
                                    <div className={txtContainerCss}>
                                        <h2 className={titleCss}>Sisters are rocking</h2>
                                        <p className={descCss}>Jenny and Anna started their cake business 2 years ago. It was almost closed due to lack of funding. But today their company is one of the largest cake making company in the city. Hats off to this pair of sisters. We are happy for them.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={slide3} className="w-full min-h-[450px] h-full object-cover" />
                            <div className='absolute w-full h-full left-0 top-0 bg-[#03031e95]'>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative max-h-[calc(100vh-150px)]'>
                            <div className="w-full h-full px-2 md:h-full absolute z-20 top-0 left-0">
                                <div className='max-w-screen-xl mx-auto h-full flex items-end md:items-center'>
                                    <div className={txtContainerCss}>
                                        <h2 className={titleCss}>Monika got a new life</h2>
                                        <p className={descCss}>Monika had a severe kidney failure and treatment was so costly. It is our pleasure that we were able to manage the expenses for the treatment and her kidney was replaced. Now she is completely find and leading her life happily.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={slide4} className="w-full min-h-[450px] h-full object-cover" />
                            <div className='absolute w-full h-full left-0 top-0 bg-[#03031e95]'>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fade>
    </section>);
};

export default Banner;