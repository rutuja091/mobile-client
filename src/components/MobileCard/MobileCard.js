import React from 'react'
import "./MobileCard.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function MobileCard({ _id, name, company, image, price, description, loadMobiles }) {

  const deleteMobile = async (mobileId) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/mobile/${mobileId}`)

    toast.success(response.data.message)

    loadMobiles()

  }

  return (

  



    <div className="container">

    <div className='mobile-card'>
        <img src={image} className='mobile-image' />
      <div className='mobile-details'>
      <div className='mobile-name'>{name}</div>
      <div className='mobile-company'>{company}</div>
      <p className='mobile-price'>Price:{price}</p>
    
      <div className='mobile-description'>{description}</div>
      <div className="button-container">


      <Link
        className='button update-button'
        to={`/update/${_id}`}>
        Edit
      </Link>

      <button
        type='button'
        className='button delete-button'
        onClick={() => {
          deleteMobile(_id)
        }}>
        Delete</button>

      </div>

   

    </div>

    </div>
    </div>
  )
}

export default MobileCard
