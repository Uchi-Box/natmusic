import {useParams} from "react-router-dom";
import {ResultTabs} from "../../components/resultTabs";
import {Complex} from "./tabContents/complex";
import {Songs} from "./tabContents/songs";
import {Singers} from "./tabContents/singers";
import {MV} from "./tabContents/mvs";
import Album from "../album";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getComplex} from "./store/actionCreators";
import {isEmptyObject} from "../../api/utils";
import {changeCurrentIndex, changePlayList, changeSequencePlayList} from "../player/store/actioncreators";
import {AlbumTab} from "./tabContents/albums";

const SearchResult = () => {
    const {q} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComplex(q))
    },[q])


    const {complex} = useSelector(state=>state.result)
    const clickToPlay = (playList,index) => {
        dispatch(changePlayList(playList))
        dispatch(changeSequencePlayList(playList))
        dispatch(changeCurrentIndex(index))
    }

    const tabSet = {
        '综合':<Complex clickToPlay={clickToPlay} complex={complex} />,
        '单曲':<Songs clickToPlay={clickToPlay} query={q} />,
        '歌单':<AlbumTab query={q} />,
        '歌手':<Singers query={q} />,
    }

    return (
        <div className="mt-2 min-w-screen min-h-screen bg-black">
            {isEmptyObject(complex)?null:<ResultTabs tabSet={tabSet}/>}
        </div>
    )
}

export default SearchResult