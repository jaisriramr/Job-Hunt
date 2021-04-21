import { 
    JOB_SEARCH_REQUEST,
    JOB_SEARCH_SUCCESS,
    JOB_SEARCH_FAIL,

    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,
} from '../Constants/JobConstants'

export const jobSearchReducer = (state={jobs: []},action) => {
    switch (action.type){
        case JOB_SEARCH_REQUEST:
            return {loading: true, jobs: []}
        
        case JOB_SEARCH_SUCCESS:
            return {
                loading: false,
                jobs: action.payload,
            }
        
        case JOB_SEARCH_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}

export const jobDetailReducer = (state={job:{}},action) => {
    switch (action.type){
        case JOB_DETAILS_REQUEST:
            return {loading: true,job:{}}
        
        case JOB_DETAILS_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }
        
        case JOB_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}