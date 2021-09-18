import {useEffect, useMemo, useRef, useState} from "react";
import {debounce} from "../../api/utils";
import {useHistory} from "react-router-dom";


const SearchBox = ({newQuery,handleQuery}) => {
    const history = useHistory()
    const queryRef = useRef()
    const [query,setQuery] = useState('')

    useEffect(() => {
        queryRef.current.focus()
    })

    const handleChange = e =>{
        setQuery(e.currentTarget.value)
    }

    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery,300)
    },[handleQuery])

    useEffect(() => {
        handleQueryDebounce(query)
    },[query])

    useEffect(() => {
        if(newQuery !== query){
            setQuery(newQuery)
        }
    },[newQuery])

    return(
        <div className="relative flex items-start space-x-2">
            <div className="flex-1">
            <div>
                <input
                    ref={queryRef}
                    value={query}
                    onChange={handleChange}
                    className="text-white text-md outline-none inline-block pl-6 bg-white bg-opacity-10 h-8 w-full rounded-full"
                    type="search"
                />
            </div>
            </div>
            <button onClick={()=>history.push('/recommend')} className="mt-1">
                <span className="text-white">取消</span>
            </button>
        </div>
    )
}

export default SearchBox