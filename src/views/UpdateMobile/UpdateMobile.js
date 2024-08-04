import React, {useEffect, useState } from 'react'
import "./UpdateMobile.css"
import { useParams } from 'react-router-dom'
import toast , {Toaster} from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';



function UpdateMobile() {
  const { id } = useParams();

  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [price, setPrice] = useState("0")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const updateMobile = async() => {

    const response = await axios.put(`${process.env.REACT_APP_API_URL}/mobile/${id}`,{
      name:name,
      company:company,
      price:price,
      image:image,
      description,description
    })
 
    toast.success(response.data.message)


  }

const loadMobile=async(id)=>{

if(!id){
  return
}


  const response = await axios.get(`${process.env.REACT_APP_API_URL}/mobile/${id}`)




  const {name,image,price,company,description}=response.data.data

  setName(name)
  setImage(image)
  setCompany(company)
  setPrice(price)
  setDescription(description)
}
 

  useEffect(()=>{
 
       loadMobile(id)
      
  },[id])

 




  return (
    <div>
     

      <form>
      <div className="form-heading">
      <h1>Update Mobile</h1>
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
          placeholder='Enter Mobile Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='mobile-input'
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
          className='mobile-input'
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





        <button type="button" onClick={updateMobile}>Update Mobile</button>
        <Link to="/" className='show-all-button'>Show All Mobies</Link>
      </form>
      <br/>
      <br/>
      

      <Toaster/>
    </div>
  )
}

export default UpdateMobile
