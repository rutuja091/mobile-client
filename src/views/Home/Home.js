import React, { useEffect, useState } from 'react'
import "./Home.css"
import MobileCard from "../../components/MobileCard/MobileCard"
import axios from "axios"
import toast,{Toaster} from "react-hot-toast"
import ImgAdd from "./add.png"
import {Link} from "react-router-dom"

function Home() {
    const [mobiles,setMobiles]=useState([])

    const loadMobiles = async () => {
      toast.loading("Loading Mobiles...")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/mobiles`)

        toast.dismiss()


        toast.success("Mobiles Loaded Successfully")

        setMobiles(response.data.data)
    }

    useEffect(()=>{
  
        loadMobiles()
    },[])

  return ( 
    <div>
      <div className='form-heading-cont'>

      <div className='form-heading' >Mobile Information </div>
      <Link
        className='button-add add-button'
        
        to={`/add`}>
        Add New Mobile
        
      </Link>

       {/* <Link to="/add">
      <img src={ImgAdd}className='add-btn'/>
      </Link>  */}

      </div>



     
      {
        mobiles.map((mobile,i)=>{
            const {
                _id,
                name,
                company,
                price,
                image,
                description
             }=mobile
            return (<MobileCard
                 key={i}
                 _id={_id} 
                 name={name} 
                 company={company} 
                 price={price} 
                 image={image} 
                 description={description}
                 loadMobiles ={loadMobiles }/>
                )
        })
      }
      {

    
      }
      <Toaster/>
    
    </div>
  )
}

export default Home
