import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

} from '../Constants/UserConstants'

import {auth} from '../Firebase'

export const register = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const { user } = await auth.createUserWithEmailAndPassword(email, password)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            success: true,
            payload: user.email
        })

        localStorage.setItem('userInfo', JSON.stringify(user.email))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const signin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const { user } = await auth.signInWithEmailAndPassword(email, password)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user.email
        })

        localStorage.setItem('userInfo', JSON.stringify(user.email))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}
