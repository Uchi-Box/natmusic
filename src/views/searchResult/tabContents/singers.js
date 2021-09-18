import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSingerRes} from "../store/actionCreators";

export const Singers = ({query}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingerRes(query))
    },[])

    const {singerRes} = useSelector(state=>state.result)

    return (
        <div className="mt-2">
            <ul className="space-y-2">
                {
                    singerRes.map((item,index) => {
                        return (
                            <li
                                className="h-12 flex items-center space-x-2"
                                key={index}
                            >
                                <img className="w-12 h-12 rounded-full" src={item.picUrl} />
                                <p className="text-white text-md font-bold">{item.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}