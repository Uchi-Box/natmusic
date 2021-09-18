import {getName} from "../../../api/utils";
import {MoreOne} from "@icon-park/react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSongRes} from "../store/actionCreators";

export const Songs = ({query,clickToPlay}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongRes(query))
    },[])

    const {songRes} = useSelector(state=>state.result)
    return (
        <div>
            <ul className="space-y-2 mt-4">
                {
                    songRes.map((item,index) => {
                        return(<li
                            onClick={()=>clickToPlay(songRes,index)}
                            className="flex justify-between items-center h-12 border-b border-gray-700"
                            key={index}
                        >
                            <div className="truncate">
                                <p className="hover:text-red-600 text-white text-md">{item.name}</p>
                                <p className="text-sm text-gray-300 truncate">
                                    {getName(item.artists)}-{item.album.name}
                                </p>
                            </div>
                            <MoreOne className="flex-shrink-0" size={28} fill='#fff' />
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}