import {NavLink} from "react-router-dom";
import {HamburgerButton, Search} from "@icon-park/react";


const Header = () => {
    return(
        <div className="fixed top-0 z-30 h-12 w-full px-4 py-2 bg-opacity-40 bg-black backdrop-filter backdrop-blur-lg flex justify-between items-center">
            <HamburgerButton theme="outline" size="24" fill="#fff"/>
            <div className='flex items-center w-1/2'>
                <Search className="-mr-8 z-10" theme="outline" size="24" fill="#fff"/>
                <NavLink to='/search'>
            <input
                className="outline-none inline-block w-full rounded-full bg-gray-600 h-8 px-10"
                placeholder='搜索'
                type="search"
            />
                </NavLink>
            </div>
            <div className="space-x-6">
                <NavLink
                    to='/recommend'
                    className="text-white text-md"
                    activeClassName="text-lg font-bold border-b-2 border-red-500"
                >
                    推荐
                </NavLink>
                <NavLink
                    to='/video'
                    className="text-white text-md"
                    activeClassName="text-lg font-bold border-b-2 border-red-500"
                >
                    视频
                </NavLink>
            </div>
        </div>
    )
}

export default Header