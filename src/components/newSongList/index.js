import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css'
import {getName} from "../../api/utils";
import {Play} from "@icon-park/react";


const NewSongList = ({newSongList,insertNewSong}) => {

    return (
        <div className="w-full h-52">
            <Swiper
                className="w-full h-52"
            >
                <SwiperSlide>
                    <div className="h-full flex flex-col space-y-3">
                        {newSongList.slice(0,3).map((item,index) => {
                            return(
                                <div key={index} className="h-14 flex items-center justify-between">
                                    <img className="w-14 h-14 rounded-md" src={`${item.album.picUrl}?param=400y400`} alt="Album"/>
                                    <div className="h-14 pl-2 flex-1">
                                        <p className="text-md text-white">{item.name}</p>
                                        <p className="text-sm text-gray-200">{getName(item.artists)}</p>
                                    </div>
                                    <button onClick={()=>insertNewSong(index)}>
                                        <Play theme="multi-color" size="30" fill={['#fff' ,'#111' ,'#DC2626' ,'#DC2626']} strokeWidth={3} strokeLinejoin="bevel" strokeLinecap="butt"/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full flex flex-col space-y-2">
                        {newSongList.slice(3,6).map((item,index) => {
                            return(
                                <div key={index} className="h-14 flex items-center justify-between">
                                    <img className="w-14 h-14 rounded-md" src={`${item.album.picUrl}?param=400y400`} alt="Album"/>
                                    <div className="h-14 pl-2 flex-1">
                                        <p className="text-md text-white">{item.name}</p>
                                        <p className="text-sm text-gray-200">{getName(item.artists)}</p>
                                    </div>
                                    <button onClick={()=>insertNewSong(index)}>
                                        <Play theme="multi-color" size="30" fill={['#fff' ,'#111' ,'#DC2626' ,'#DC2626']} strokeWidth={3} strokeLinejoin="bevel" strokeLinecap="butt"/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NewSongList