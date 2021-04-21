import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({data}) => {
    return (
        <div className='mt-5 card-outer_container'>
            <h2 className='heading mb-5'>{data.length} jobs available</h2>
            {data.map((d,i) => (
                <div key={i} className='card-inner_container'>
                <div className='card_header'>
                    <div>
                    <h4 className='card-title'>{d.title}</h4>
                    <p className='card-company_name'>{d.company}</p>
                    </div>
                    <img src={d.company_logo} alt={d.title} height="40" className='card-company-logo' />
                </div>
                <div className='mt-5 card_footer'>
                    <div className='card_footer-flex'>
                    <span className='card-btn'>{d.type}</span>
                    <span className='card-btn'>{d.location}</span>
                    </div>
                    <Link to={`/job/details/${d.id}`}>View details</Link>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Card
