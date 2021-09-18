import * as actionTypes from './constants'
import {getResultReq} from "../../../api/requests";
import {resultTypes} from "../../../api/config";

const changeComplex = data =>({
    type:actionTypes.SET_COMPLEX_RES,
        data
})

const changeSongRes = data =>({
    type:actionTypes.SET_SONG_RES,
    data
})

const changeAlbumRes = data =>({
    type:actionTypes.SET_ALBUM_RES,
    data
})

const changeMV = data =>({
    type:actionTypes.SET_MV_RES,
    data
})

const changeSingerRes = data =>({
    type:actionTypes.SET_SINGER_RES,
    data
})

export const getComplex = q => {
    return dispatch=>{
        getResultReq(q,resultTypes.complex).then(data =>{
            dispatch(changeComplex(data.result))
        }).catch(err=>{
            console.log('获取搜索结果详情错误',err)
        })
    }
}

export const getSongRes = q =>{
    return dispatch =>{
        getResultReq(q,resultTypes.songs).then(data =>{
            dispatch(changeSongRes(data.result.songs))
        }).catch(err=>{
            console.log('获取搜索歌曲错误',err)
        })
    }
}

export const getAlbumRes = q =>{
    return dispatch =>{
        getResultReq(q,resultTypes.albums).then(data =>{
            dispatch(changeAlbumRes(data.result.playlists))
        }).catch(err=>{
            console.log('获取搜索专辑错误',err)
        })
    }
}

export const getSingerRes = q =>{
    return dispatch=>{
        getResultReq(q,resultTypes.singers).then(data =>{
            dispatch(changeSingerRes(data.result.artists))
        }).catch(err=>{
            console.log('获取搜索歌手错误',err)
        })
    }
}

export const getMVRes = q =>{
    return dispatch =>{
        getResultReq(q,resultTypes.MVs).then(data =>{
            dispatch(changeMV(data.result.mvs))
        }).catch(err=>{
            console.log('获取搜索MV错误',err)
        })
    }
}