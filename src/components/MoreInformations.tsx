import logo_quadrada_rosa from "../assets/logo_quadrada_rosa.png"
import aimee from "../assets/aimee.jpg"
import roupa from "../assets/roupa.jpg"


// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';


export default function MoreInformations() {
    return (
        <div className="w-full flex md:flex-row flex-col mt-50 md:h-200 h-300 2xl:h-250">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
            loop ={true} 
            autoplay={{
            delay: 4650
            }}
            modules={[Pagination, EffectFade, Autoplay]}
            className="md:w-[50%] w-full h-full"
            >
                <SwiperSlide className="w-full h-full">
                    <img src={logo_quadrada_rosa} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img src={roupa} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img src={aimee} alt="" className="w-full" />
                </SwiperSlide>
            </Swiper>
            <div className="md:w-[50%] w-full h-full flex flex-col gap-7 items-baseline justify-center md:px-20 2xl:px-30 px-7">
                <h2 className="text-start font-Instrument text-6xl w-full">Mais Sobre Nossa Marca</h2>
                <p className="text-start font-Instrument text-xl">Na nossa loja de vestuário, acreditamos na combinação perfeita entre qualidade superior e estilo sofisticado. Nossa equipe de especialistas se dedica a oferecer peças que refletem as últimas tendências da moda, sempre com o compromisso de atender às necessidades e expectativas dos nossos clientes.</p>
                <a href="" target="blank" className="rounded-full bg-red-400 p-3 w-full flex items-center justify-center text-[20px] text-white font-Instrument hover:bg-red-200 transition duration-300 transform">Saiba Mais</a>
            </div>
        </div>
    )
}