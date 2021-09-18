import Slider from "../../components/slider";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBannerList, getNewSongList, getRecommendList} from "./store/actioncreators";
import Iconset from "../../components/recommendIconset";
import RecommendList from "../../components/recommendList";
import Header from "../../components/header";
import NewSongList from "../../components/newSongList";
import {changeCurrentIndex, changePlayList, changeSequencePlayList, insertSong} from "../player/store/actioncreators";

const Recommend = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBannerList())
        dispatch(getRecommendList())
        dispatch(getNewSongList())
    },[])

    const {bannerList,recommendList,newSongList} = useSelector(state => state.recommend)

    const insertNewSong = index => {
        dispatch(changePlayList(newSongList))
        dispatch(changeSequencePlayList(newSongList))
        dispatch(changeCurrentIndex(index))
    }

    return (
        <div className="min-h-screen min-w-screen overflow-y-scroll scrollbar-hide">
            <Header />
        <div className="flex flex-col px-4 space-y-6">
            <Slider bannerList={bannerList} />
            <Iconset />
            <p className="text-lg text-white font-bold">推荐歌单</p>
            <RecommendList recommendList={recommendList} />
            <p className="text-lg text-white font-bold">新歌</p>
            <NewSongList newSongList={newSongList} insertNewSong={insertNewSong} />
        </div>
        </div>
    )
}

export default Recommend