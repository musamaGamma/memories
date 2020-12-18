import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { postsListReducer, postCreateReducer, postUpdateReducer, postReducer, postDeleteReducer, postLikeReducer } from './reducers/postsReducers'

const initialState = {}
const reducer = combineReducers({
posts: postsListReducer,
postCreate: postCreateReducer,
postUpdate: postUpdateReducer,
post: postReducer,
postDelete: postDeleteReducer,
postLike: postLikeReducer
})

const middlewars = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewars)))

export default store