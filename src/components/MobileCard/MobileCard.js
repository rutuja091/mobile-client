import React from 'react'
import "./MobileCard.css"
import axios from 'axios'
import editimg from "./edit.png"
import dltimg from "./bin.png"
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';


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


      {/* <Link
        className='button  update-button'
        to={`/update/${_id}`}>
        Edit
      </Link> */}

<Link className='button update-button' to={`/update/${_id}`}>
              <img src={editimg} alt="Edit" className="icon" />
            
            </Link>

      {/* <button
        type='button'
        className='button delete-button'
        onClick={() => {
          deleteMobile(_id)
        }}>
        Delete</button> */}

<button
              type='button'
              className='button delete-button'
              onClick={() => {
                deleteMobile(_id);
              }}>
              <img src={dltimg} alt="Delete" className="icon" />
            
            </button>


      </div>

   

    </div>

    </div>
    </div>
  )
}

export default MobileCard
