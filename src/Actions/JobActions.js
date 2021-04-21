import axios from 'axios'
import { 
    JOB_SEARCH_REQUEST,
    JOB_SEARCH_SUCCESS,
    JOB_SEARCH_FAIL,

    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,
} from '../Constants/JobConstants'

export const jobSearchAction = (language) => async (dispatch) => {
    try{
        dispatch({type:JOB_SEARCH_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const BASE_URL = `https://cors-free-app.herokuapp.com/https://jobs.github.com/positions.json?search=${language}`

        const {data} = await axios.get(
            BASE_URL,
            config
        )

        dispatch({type: JOB_SEARCH_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:JOB_SEARCH_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,})
    }
}


export const jobDetailAction = (id) => async (dispatch) => {
    try{
        dispatch({type:JOB_DETAILS_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const BASE_URL = `https://cors-free-app.herokuapp.com/https://jobs.github.com/positions/${id}.json`

        const {data} = await axios.get(
            BASE_URL,
            config
        )

        dispatch({type: JOB_DETAILS_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:JOB_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,})
    }
}
