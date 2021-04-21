import React,{useState} from 'react'
import './JobApplyPopup.css'

const JobApplyPopup = ({onClose}) => {
    
    const [values , setValues] = useState({
        name: '',
        view: true,
        error: false,
        email: '',
        coverLetter: '',
        resume: '',
        success: false,
        loading: false,
    })

    const {view,name , email , coverLetter, resume,loading,success,error} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.length === 0 || email.length === 0 || coverLetter.length === 0 || resume.length === 0){
            setValues({...values,error:true})
        }
        else{
            setValues({...values,view:false,loading:true})
        setTimeout(() => {
            setValues({...values,loading:false,view:false,success:true})
        }, 5000);

        setValues({...values, success:true,view:false})
    }
    }

    const showForm = () => (
        <form className='job-apply_form'>
            <div className='form-group mb-4'>
                <label className='text-muted'>Name</label>
                <input className='form-control' type='text' value={name} onChange={e => setValues({...values , name:e.target.value})} />
            </div>
            <div className='form-group mb-4'>
                <label className='text-muted'>Email</label>
                <input className='form-control' type='email' value={email} onChange={e => setValues({...values , email:e.target.value})} />
            </div>
            <div className='form-group mb-4'>
                <label className='text-muted'>Cover Letter</label>
                <textarea rows='5' className='form-control' type='text' value={coverLetter} onChange={e => setValues({...values , coverLetter:e.target.value})} />
            </div>
            <div className='form-group mb-4'>
                <label className='text-muted'>Resume</label>
                <input className='form-control' type='file' onChange={e => setValues({...values , resume:e.target.files[0]})} />
            </div>
            <button onClick={handleSubmit} className='btn button'>Submit</button>
        </form>
    )

    const showSuccess = () => (
        <div className='success-container'>
            <h2 className='success-title'>Applied Successfully!</h2>
            <h6 className='success-text'>Name: {name}</h6>
            <h6 className='success-text'>Email: {email}</h6>
            <h6 className='success-text'>Cover Letter: {coverLetter}</h6>
            <h6 className='success-text'>Resume: {resume.name}</h6>
        </div>
    )

    return(
        <div className='job-apply_container'>
        <div className='job-apply-inner_container'>
        {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Please fill all the fields
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>}
            <i onClick={onClose} className='fas fa-times close-button' />
            {view && showForm()}
            {loading && <div class="text-center text-primary">
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                            </div>}
            {success && showSuccess()}
        </div>
        </div>
    )
}

export default JobApplyPopup