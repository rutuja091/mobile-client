import React, { useEffect, useState } from 'react';
import "./Home.css";
import MobileCard from "../../components/MobileCard/MobileCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Home() {
  const [mobiles, setMobiles] = useState([]);

  const loadMobiles = async () => {
    toast.loading("Loading Mobiles...");
    const response = await axios.get(`https://mobile-server-88sq.onrender.com/mobiles`);
    toast.dismiss();
    toast.success("Mobiles Loaded Successfully");
    setMobiles(response.data.data);
  };

  useEffect(() => {
    loadMobiles();
  }, []);

  return (
    <div className="container">
      <div className='form-heading-cont'>
        <div className='form-heading'>Mobile Information</div>
        <Link className='button-add' to={`/add`}>Add New Mobile</Link>
      </div>
      <div className="mobile-card-container">
        {
          mobiles.map((mobile, i) => {
            const { _id, name, company, price, image, description } = mobile;
            return (
              <MobileCard
                key={i}
                _id={_id}
                name={name}
                company={company}
                price={price}
                image={image}
                description={description}
                loadMobiles={loadMobiles}
              />
            );
          })
        }
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
