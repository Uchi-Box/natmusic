import {isEmptyObject} from "../../api/utils";
import {SwiperSlide,Swiper} from "swiper/react";
import SwiperCore,{Pagination,Autoplay} from "swiper";
import 'swiper/swiper-bundle.css'
import './index.css'


const Slider = ({bannerList}) =>{

    SwiperCore.use([Pagination,Autoplay])

    return (
        isEmptyObject(bannerList) ? null :
            <div className="h-36 w-full rounded-md">
                <Swiper
                    pagination={{clickable: true, type:'bullets',}}
                    autoplay={{delay:3000}}
                    loop={true}
                >
                    {
                        bannerList.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <img className="rounded-md h-36 w-full object-cover" key={index} src={item.pic} alt={item.typeTitle}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
    )
}

export default Slider