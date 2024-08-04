import React, { useState } from 'react'
import "./AddMobile.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from "react-router-dom"

function AddMobile() {

  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [price, setPrice] = useState("0")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")


  const addMobile = async () => {

    toast.loading("Adding Mobile...")
    if (!name || !company || !price || !image || !description) {
      toast.error("Please Enter All Details")
      return
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/mobile`, {
      name: name,
      price: price,
      company: company,
      image: image,
      description: description
    })
    toast.dismiss()

    toast.success(response.data.message)

    setName("")
    setCompany("")
    setImage("")
    setPrice("")
    setDescription("")
  }

  return (
    <>
    { <div>
  
      <form>
      <div className="form-heading">
      <h1>Add Mobile</h1>
      </div>
     <div className="form-group">
     <label for="name">Name:</label>
        <input
          type='text'
          placeholder='Enter Mobile Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='mobile-input'
        />
        </div>

        <div className="form-group">
        <label for="company">Company:</label>
        <input
          type='text'
          placeholder='Enter Mobile Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='mobile-input'
        />
         </div>


         <div className="form-group">
         <label for="description">Price:</label>
        <input
          type='number'
          placeholder='Enter Mobie Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='price-input '
        />
        </div>

        <div className="form-group">
        <label for="image">Image Preview</label>
        <img src={image} className='img-preview' />
        </div>


        <div className="form-group">
        <label for="image">Image:</label>
        <input
          type='text'
          placeholder='Enter Mobile Image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='Mobile-input'
        />
        </div>

        <div className="form-group">
        <label for="description">Description:</label>
        <input
          type='text'
          placeholder='Enter Mobile Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='mobile-input'
        />
        </div>





        <button type="button" onClick={addMobile}>Add Mobile</button>
        <Link to="/" className='show-all-button'>Show All Mobiles</Link>
      </form>
      <br />
      <br />
       
     
      
      <Toaster />
    </div> }


 







    </>
  )
}

export default AddMobile
