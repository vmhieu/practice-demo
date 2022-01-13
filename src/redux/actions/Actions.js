import {ActionTypes} from '../actions/Action-types'

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts
    }
}

export const selectedPost = (post) => {
    return {
        type: ActionTypes.SELECTED_POST,
        payload: post
    }
}

export const removeSelectedPost = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_POST,
    }
}