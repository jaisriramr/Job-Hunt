import React,{useState,useEffect} from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../../Actions/AuthActions'
import Layout from '../../Components/Layout'
import Popup from '../../Components/Popup/Popup'

const Signup = ({history}) => {

    const [values , setValues] = useState({
        email: '',
        password: '',
    })

    const {email , password} = values

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo,success:loginSuccess} = userLogin
    const userRegister = useSelector(state => state.userRegister)
    const {loading , error , success} = userRegister

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(email,password))
        setValues({...values, email:'',password: ''})
    }

    useEffect(()=>{
        if(userInfo || loginSuccess){
            history.push('/')
        }
    },[history,userInfo , loginSuccess])

    return (
        <Layout>
            {loading && <Popup type='white' />}
            {error && <Popup type='red' error={error} />}
            {success && <Popup type='green' message='New account created! Please login'/>}
            <form className='auth-container'>
                <h1 className='auth-title'>Create a new account</h1>
                <p className='auth-subtitle'>Already have an account? <Link to='/sign-in'>Sign in</Link></p>

                <div className='form-group'>
                    <label className='text-muted'>Email</label>
                    <input className='form-control' type='email' value={email} onChange={(e) => setValues({...values , email:e.target.value})} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Password</label>
                    <input className='form-control' type='password' value={password} onChange={(e) => setValues({...values , password:e.target.value})} />
                </div>
                <button onClick={handleSubmit} className='btn button'>Create an account</button>
            </form>
        </Layout>
    )
}

export default Signup
