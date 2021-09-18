import * as actionTypes from './constants'

const defaultState = {
    complex:{},
    songRes:[],
    albumRes:[],
    MVRes:[],
    singerRes:[]
}

export default (state=defaultState,action) => {
    switch (action.type){
        case actionTypes.SET_SONG_RES:
            return {...state,songRes: action.data}
        case actionTypes.SET_ALBUM_RES:
            return {...state,albumRes: action.data}
        case actionTypes.SET_COMPLEX_RES:
            return {...state,complex: action.data}
        case actionTypes.SET_MV_RES:
            return {...state,MVRes:action.data}
        case actionTypes.SET_SINGER_RES:
            return {...state,singerRes:action.data}
        default:
            return state
    }
}