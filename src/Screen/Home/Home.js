import React,{useState} from 'react'
import heroImage from '../../image/hero-image.png'
import {useDispatch,useSelector} from 'react-redux'
import { jobSearchAction } from '../../Actions/JobActions'
import Layout from '../../Components/Layout'
import Popup from '../../Components/Popup/Popup'
import Card from '../../Components/Card/Card'
import './Home.css'

const Home = () => {

    const [language,setLanguage] = useState('')
    const dispatch = useDispatch()

    const jobList = useSelector(state => state.jobSearch)
    const {error, loading , jobs} = jobList

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(jobSearchAction(language))
    }

    return (
        <Layout>
            {loading && <Popup type='white' />}
            {error && <Popup type='red' error={error} />}
            <div className='hero-container'>
                <div className='hero-text_container'>
                    <h1 className='hero-title'>Find the job,That</h1>
                    <h1 className='hero-title'>fits your life</h1>
                    <p className='hero-subtitle'>select a programming language in which you want to search for a job</p>
                    <form onSubmit={handleSearch} className='hero-search_container'>
                        <input onChange={e => setLanguage(e.target.value)} value={language} className='hero-search_bar form-control' type='text' placeholder='enter a programming language' />
                        <button type='submit' className='search-button'><i className='fas fa-search'/></button>
                    </form>
                </div>
                <div className='hero-image_container'>
                    <img src={heroImage} alt='hero' className='hero-image' />
                </div>
            </div>
            {jobs && jobs.length > 0 && <section id='job-search_result'>
                <Card data={jobs} />
            </section>
            }
        </Layout>
    )
}

export default Home
