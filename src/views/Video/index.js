import {useEffect, useState} from "react";
import {getMVReq} from "../../api/requests";
import Header from "../../components/header";
import {PlayOne} from "@icon-park/react";
import {getCount} from "../../api/utils";


const Video = () => {
    //随便写个MV页面，应该不会真有人用音乐软件点MV看吧

    const [MVList,setMVList] = useState([])

    useEffect(() => {
        getMVReq().then(data =>{
            setMVList(data.data)
        })
    },[])


    return(
        <div className="min-h-screen min-w-screen bg-black space-y-2">
            <Header />
            <h2 className="text-white text-lg font-bold ml-4">最新MV</h2>
            <div className="grid grid-cols-2 gap-2 space-y-2 px-4">
                {
                    MVList.map((item,index)=>{
                        return (
                            <div className="w-full h-48 rounded-md space-y-2">
                                <div
                                    className="w-full h-24 bg-contain bg-center rounded-md relative"
                                    style={{backgroundImage:`url(${item.cover})`}}
                                >
                                    <div className="absolute right-2 flex items-center">
                                        <PlayOne theme="outline" size="20" fill="#fff" strokeWidth={3}/>
                                        <span
                                            className="text-white text-micro"
                                        >
                                        {getCount(item.playCount)}
                                    </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-md text-white truncate">
                                        {item.name}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {item.artistName}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Video