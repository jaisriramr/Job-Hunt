import React,{useEffect} from 'react'
import './Popup.css'

const Popup = (props) => {

    const handleClose = () => {
        const backdrop = document.querySelector('.popup-container')

        backdrop.addEventListener('click',()=>{
            backdrop.classList.toggle('display-none')
        })
    }

    useEffect(()=>{
        handleClose()
    },[])

    return (
        <div className='popup-container'>
            <div className={`popup-message_container ${props.type}`}>
                {props.type === 'white' ? 
                        (
                            <div class="text-center text-primary">
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                            </div>
                        ) 
                        : props.type === 'green' ?
                        (<h6 className='popup-inner_text'>{props.message}</h6>) 
                        : 
                        (<h6 className='popup-inner_text'>{props.error}</h6>)
                        }
            </div>
        </div>
    )
}

export default Popup
