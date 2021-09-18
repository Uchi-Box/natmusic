import {getCount} from "../../../api/utils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAlbumRes} from "../store/actionCreators";
import {useHistory} from "react-router-dom";

export const AlbumTab = ({query}) => {
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        dispatch(getAlbumRes(query))
    },[])

    const {albumRes} = useSelector(state=>state.result)

    return (
        <div>
            <ul className="space-y-2 mt-4">
                {
                    albumRes.map((item,index) => {
                        return (
                            <li
                                onClick={()=>history.push(`/album/${item.id}`)}
                                key={index}
                                className="h-12 flex items-center space-x-2"
                            >
                                <img className="rounded-lg w-12 h-12" src={`${item.coverImgUrl}?param=200y200`} alt="album" />
                                <div>
                                    <h3 className="text-white truncate text-md font-bold">{item.name}</h3>
                                    <p className="truncate text-sm text-gray-300">
                                        {item.trackCount}首音乐 by {item.creator.nickname}，播放{getCount(item.playCount)}次
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}