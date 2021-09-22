import {CloseSmall, Delete} from "@icon-park/react";
import {getName} from "../../api/utils";
import {useState} from "react";
import {Confirm} from "../confirm";

const PlayList = props => {

    const {handleShowPlayList,playList,currentIndex,clickToPlay,clickToDel,clearPlayList} = props

    const [showConfirm,setShowConfirm] = useState(false)

    const clearAll = () => {
        clearPlayList()
        setShowConfirm(false)
    }

    const closeConfirm = () => {
        setShowConfirm(false)
    }

    return (
        <div>
            {showConfirm? <Confirm closeConfirm={closeConfirm} clearAll={clearAll} />:null}
        <div
            className="fixed w-full h-4/6 mx-auto bottom-8 rounded-lg z-40
            bg-black backdrop-filter backdrop-blur-lg bg-opacity-50
            flex flex-col justify-between p-4
         ">
            <div className="h-10 flex justify-between items-center px-2">
                <h3 className="text-white text-lg font-bold">
                    当前播放
                    <span className="text-sm text-gray-500">({playList.length}首)</span>
                </h3>
                <button onClick={()=>setShowConfirm(true)}>
                <Delete size={24} fill="#fff" />
                </button>
            </div>
            <ol className="px-4 mt-2 space-y-1 flex-1 overflow-y-scroll scrollbar-hide">
                {
                    playList.map((item,index)=>{
                        return (
                            <li
                                key={item.name+index}
                                className="h-10 flex justify-between items-center border-b border-gray-800"
                            >
                                <div className="truncate" onClick={()=>clickToPlay(index)}>
                                    {index===currentIndex?
                                        <h3 className="text-red-600 align-middle inline-block text-lg max-w-3/4 truncate">{item.name} </h3>
                                        :<h3 className="text-white align-middle inline-block text-lg max-w-3/4 truncate">{item.name} </h3>
                                    }
                                <span className="ml-2 inline align-middle truncate text-gray-400">{item.ar?getName(item.ar):getName(item.artists)}</span>
                                </div>
                                <button className="flex-shrink-0 w-4" onClick={(e)=>clickToDel(e,item)}>
                                <CloseSmall size={20} fill="#fff" />
                                </button>
                            </li>
                        )
                    })
                }
            </ol>
            <button onClick={handleShowPlayList} className="flex-shrink-0 mx-auto h-8">
                <span className="text-white text-lg font-bold">关闭</span>
            </button>
        </div>
        </div>
    )
}

export default PlayList