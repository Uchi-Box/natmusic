import {MusicList, Pause, PlayOne} from "@icon-park/react";
import {getName, isEmptyObject} from "../../api/utils";
import {useDispatch} from "react-redux";
import {changeFullScreen, changeShowMini} from "../../views/player/store/actioncreators";

const MiniPlayer = props => {
    const dispatch = useDispatch()
    const {currentSong,handlePlay,handleShowPlayList,playing} = props
    return (
        isEmptyObject(currentSong)?null:
        <div className="w-full h-20 px-4 z-20 fixed bottom-4">
            <div className="
                w-full h-14 rounded-full
                backdrop-filter backdrop-blur-lg bg-white bg-opacity-20
                flex justify-between items-center px-2
            ">
                <img
                    onClick={()=>{
                        dispatch(changeFullScreen(true))
                        dispatch(changeShowMini(false))
                    }}
                    className="w-12 h-12 rounded-full shadow-lg"
                    src={`${currentSong.al.picUrl}?param=200y200`}
                    alt="Song"
                />
                <div className="flex-1 text-center space-x-2">
                    <span className="text-white text-md font-bold ">{currentSong.name}</span>
                    <span className="text-gray-400 text-sm">{getName(currentSong.ar)}</span>
                </div>
                <div className="space-x-4">
                    <button onClick={handlePlay}>
                        {
                            playing?
                            <Pause size={30} fill='#fff'/>:
                            <PlayOne size={30} fill='#fff'/>
                        }
                    </button>
                    <button onClick={handleShowPlayList}>
                    <MusicList theme="outline" size="30" fill="#fff" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MiniPlayer