import React,{useEffect,useState} from 'react'
import './JobDetails.css'
import Layout from '../../Components/Layout'
import JobApplyPopup from '../../Components/JobApplyPopup/JobApplyPopup'
import {useDispatch , useSelector} from 'react-redux'
import {jobDetailAction} from '../../Actions/JobActions'
import ReactHtmlParser from "react-html-parser" 
import moment from 'moment'

const JobDetails = ({match,history}) => {

    const [view , setView] = useState(false)

    const jobId = match.params.id

    const dispatch = useDispatch()

    const jobDetails = useSelector(state => state.jobDetail)
    const {loading ,error,job} = jobDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        if(jobId){
            dispatch(jobDetailAction(jobId))
        }
    },[match,dispatch,jobId])

    const handleSubmit = () => {
        
        if(!userInfo){
            history.push('/sign-in')
        }
        setView(true)
    }

    return (
        <Layout>
            {view && <JobApplyPopup onClose={() => setView(false)} />}
            
            <div className='job-details_container'>
            {loading 
                ? 
                <div className='alert alert-info'>Loading...</div> 
                :
                error ? <div className='alert alert-danger'>{error}</div> :
            <>
            <header className='job-details_header'>
                <div className='display-flex'>
                <div>
                    <h4 className='job-details_title'>{job.title}</h4>
                    <p className='job-details_company-name'>{job.company}</p>
                </div>
                <img src={job.company_logo} alt={job.company} height='50' />
                </div>
                <div className='mt-4 display-flex'>
                    <div>
                    <span className='card-btn'>{job.type}</span>
                    <span className='card-btn'>{job.location}</span>
                    </div>
                    <p className=''>Posted at {moment(job.created_at).format('ll')}</p>
                </div>
            </header>
            <hr/>
            <h2 className='heading mt-4 mb-3' style={{fontSize:'1.25rem'}}>Description</h2>
            <p className='job-description'>{ReactHtmlParser(job.description)}</p>
            <button className='btn button mt-5' style={{borderRadius:'4rem'}} onClick={handleSubmit}>Apply now</button>
            </>
            }
            </div>
        </Layout>
    )
}

export default JobDetails
