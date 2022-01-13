import { combineReducers } from "redux";
import { postsReducer, selectedPostReducer } from "./PostsReducer";


const reducers = combineReducers({
    allPosts: postsReducer,
    post: selectedPostReducer,
})

export default reducers;