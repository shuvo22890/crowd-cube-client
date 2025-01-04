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
    const txtContainerCss = 'max-w-screen-sm absolute bottom-0 md:bottom-5 left-0 md:left-5 bg-lite-transparent dark:bg-dark-transparent px-3 md:px-10 py-2 md:py-8 rounded-lg shadow-lg border border-desc';
    const titleCss = 'text-base md:text-2xl lg:text-4xl font-bold text-title dark:text-secondary uppercase mb-2 md:mb-5';

    return (<section className="bg-secondary dark:bg-dark relative">
        <Fade triggerOnce delay={500}>
        <div className='max-w-screen-xl mx-auto'>
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
                    <div className="w-full h-[450px] md:h-full max-h-screen relative">
                    <div className={txtContainerCss}>
                            <h2 className={titleCss}>We are happy for Emma</h2>
                            <p className='text-sm md:text-base lg:text-lg font-semibold text-desc dark:text-dark-lite'>Emma is a young enterpreneur. 4 years ago, she started her boutique house in a small room. Now almost 300 employees work under her. She has made a long journey and it wasn&apos;t smooth. We are happy to be a part of her success.</p>
                        </div>
                        <img src={slide1} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[450px] md:h-full max-h-screen relative">
                        <div className={txtContainerCss}>
                            <h2 className={titleCss}>The second life of maddy</h2>
                            <p className='text-sm md:text-base lg:text-lg font-semibold text-desc dark:text-dark-lite'>Last year Maddy had a severe road accident. Her legs were completely paralysed after the accident and the treatment was so costly. But finally she survived. Now she can lead a normal life. It is a priceless moment for us to see her healthy & sound.</p>
                        </div>
                        <img src={slide2} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[450px] md:h-full max-h-screen relative">
                        <div className={txtContainerCss}>
                            <h2 className={titleCss}>Sisters are rocking</h2>
                            <p className='text-sm md:text-base lg:text-lg font-semibold text-desc dark:text-dark-lite'>Jenny and Anna started their cake business 2 years ago. It was almost closed due to lack of funding. But today their company is one of the largest cake making company in the city. Hats off to this pair of sisters. We are happy for them.</p>
                        </div>
                        <img src={slide3} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[450px] md:h-full max-h-screen relative">
                        <div className={txtContainerCss}>
                            <h2 className={titleCss}>Monika got a new life</h2>
                            <p className='text-sm md:text-base lg:text-lg font-semibold text-desc dark:text-dark-lite'>Monika had a severe kidney failure and treatment was so costly. It is our pleasure that we were able to manage the expenses for the treatment and her kidney was replaced. Now she is completely find and leading her life happily.</p>
                        </div>
                        <img src={slide4} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </Fade>
    </section>);
};

export default Banner;