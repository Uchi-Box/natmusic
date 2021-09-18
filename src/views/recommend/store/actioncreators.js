import * as actionTypes from './constants'
import {getBannerReq, getNewSongReq, getRecommendReq} from "../../../api/requests";

export const changeBannerList = data =>({
    type:actionTypes.CHANGE_BANNER,
    data
})

export const changeRecommendList = data =>({
    type:actionTypes.CHANGE_RECOMMEND_LIST,
    data
})

export const changeNewSongList = data =>({
    type:actionTypes.CHANGE_NEWSONG_LIST,
    data
})

export const getBannerList = () => {
    return dispatch =>{
        getBannerReq().then(data =>{
            dispatch(changeBannerList(data.banners))
        }).catch(err=>{
            console.log('获取轮播图错误',err)
        })
    }
}

export const getRecommendList = () => {
    return dispatch =>{
        getRecommendReq().then(data =>{
            dispatch(changeRecommendList(data.result))
        }).catch(err=>{
            console.log('获取推荐错误',err)
        })
    }
}

export const getNewSongList = () => {
    return dispatch =>{
        getNewSongReq().then(data =>{
            dispatch(changeNewSongList(data.data.splice(0,6)))
        }).catch(err=>{
            console.log('获取新歌列表错误',err)
        })
    }
}

