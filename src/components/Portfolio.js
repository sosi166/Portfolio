import PortfolioData from "../PortfolioData";
import Card from "./Card.js";
import { Zoom, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/zoom";

const Portfolio = () => {

    return (
        <div className="portfolio" id="project">
            <h2>Some of my projects</h2>
            <div className="content">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    zoom={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Zoom, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {PortfolioData.map((val, index) => {
                        return <SwiperSlide className="slide" key={index}>
                            <div className="swiper-zoom-container">
                                <Card
                                    image={val.image}
                                    title={val.title}
                                    link={val.link}
                                    text={val.text}
                                    text1={val.text1}
                                />
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio;