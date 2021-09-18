import {Switch,Route} from "react-router-dom";
import Recommend from '../../views/recommend'
import Yuncun from '../../views/Video'
import Album from '../../views/album'
import Search from "../../views/search/inedex";
import Video from "../../views/Video";


const Content = () => {
    return (
        <div className="bg-black">
        <Switch>
            <Route>
                <Route path="/recommend" component={Recommend}/>
                <Route path="/video" component={Video}/>
                <Route path="/album/:id" component={Album}/>
                <Route path="/search" component={Search}/>
            </Route>
        </Switch>
        </div>
    )
}

export default Content