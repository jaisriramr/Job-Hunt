import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { jobSearchReducer,jobDetailReducer } from './Reducers/JobReducers'
import { userRegisterReducer,userLoginReducer } from './Reducers/AuthReducers'

const reducer = combineReducers({
    jobSearch: jobSearchReducer,
    jobDetail: jobDetailReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store