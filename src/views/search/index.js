import {useCallback, useEffect, useState} from "react";
import SearchBox from "../../components/searchBox";
import {useDispatch, useSelector} from "react-redux";
import {getHotKeyWords, getSuggestList} from "./store/actionCreators";
import HotWordsList from "../../components/hotWordsList";
import SearchSuggest from "../../components/searchSuggest";
import {isEmptyObject} from "../../api/utils";
import {Route, Switch, useHistory} from "react-router-dom";
import SearchResult from "../searchResult";

const Search = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [query,setQuery] = useState()
    const [hideSuggest,setHideSuggest] = useState(true)

    useEffect(() => {
        dispatch(getHotKeyWords())
    },[])

    const {hotList,suggestList} = useSelector(state=>state.search)

    const handleQuery = (q) => {
        setQuery(q)
        setHideSuggest(false)
        if(!q){
            setHideSuggest(true)
            return
        }
        dispatch(getSuggestList(q))
    }
    
    const toResult = useCallback(
        q =>{
            setQuery('')
            setHideSuggest(true)
            history.push(`/search/result/${q}`)
        },[query]
    )


    return (
        <div className="min-h-screen w-screen bg-black p-4">
            <SearchBox
                handleQuery={handleQuery}
                suggestList={suggestList}
                newQuery={query}
                toResult={toResult}
            />
            {isEmptyObject(suggestList)||hideSuggest?null:
                <SearchSuggest q={query} toResult={toResult} suggestList={suggestList} />
            }
            <Switch>
                <Route exact path={`/search/result/:q`} component={SearchResult} />
                <Route exact path='/search'>
                    <HotWordsList hotList={hotList} toResult={toResult}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Search