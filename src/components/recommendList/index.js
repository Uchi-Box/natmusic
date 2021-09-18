import {PlayOne} from "@icon-park/react";
import {getCount} from "../../api/utils";
import {Link} from "react-router-dom";

const RecommendList = ({recommendList}) => {
    return (
        <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
            {
                recommendList.map(item=>{
                    return(
                        <Link to={`/album/${item.id}`}>
                        <div
                            className="flex flex-col w-28 h-40 flex-shrink-0 overflow-hidden"
                        >
                            <div
                                className="w-28 h-28 flex-shrink-0 bg-cover bg-center rounded-lg relative"
                                style={{backgroundImage:`url(${item.picUrl}?param=200y200)`}}
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
                            <p className="text-sm text-white">
                                {item.name}
                            </p>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RecommendList