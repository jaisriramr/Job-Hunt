import React,{useState,useEffect} from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {signin} from '../../Actions/AuthActions'
import Popup from '../../Components/Popup/Popup'
import Layout from '../../Components/Layout'

const Signin = ({history}) => {

    const [values , setValues] = useState({
        email: '',
        password: '',
    })

    const {email , password} = values

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, success,userInfo} = userLogin

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signin(email,password))
        setValues({...values, email:'',password: ''})
    }

    useEffect(()=>{
        if(success || userInfo){
            history.push('/')
        }
    },[history,success,userInfo])

    return (
        <Layout>
            {loading && <Popup type={'white'} />}
            {error && <Popup type={'red'} error={error} />}
            <form className='auth-container'>
                <h1 className='auth-title'>Welcome Back!</h1>
                <p className='auth-subtitle'>Dont have an account? <Link to='/register'>Sign up</Link></p>

                <div className='form-group'>
                    <label className='text-muted'>Email</label>
                    <input className='form-control' type='email' value={email} onChange={(e) => setValues({...values , email:e.target.value})} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Password</label>
                    <input className='form-control' type='password' value={password} onChange={(e) => setValues({...values , password:e.target.value})} />
                </div>
                <button onClick={handleSubmit} className='btn button'>Sign in</button>
            </form>
        </Layout>
    )
}

export default Signin
