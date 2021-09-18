import {Search} from "@icon-park/react";

const SearchSuggest = ({suggestList,toResult,q}) => {
    return (
        <ul className="absolute px-2 w-84 left-8 border bg-black rounded-lg">
            <li
                onClick={()=>toResult(q)}
                className="h-12 py-2 text-blue-200 text-md"
            >
                {`搜索 "${q}"`}
            </li>
            {
                suggestList.map(item => {
                    return (
                        <li
                            onClick={()=>toResult(item.keyword)}
                            className="text-white text-md
                             border-b border-gray-500 h-11 flex items-center"
                            key={item.keyword}
                        >
                            <div className="space-x-2">
                                <Search className="inline-block align-middle" size="18"/>
                                <span>{item.keyword}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SearchSuggest