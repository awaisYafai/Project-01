import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar";
import { Image } from "./Image";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
 
  const handleGetPhotos = async (tag) => {
    const resp = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tag}&per_page=20&format=json&nojsoncallback=1`
    );
    setData(resp.data.photos.photo);
  };
  useEffect(() => {
    handleGetPhotos("flowers");
  },[]);

  return (
    <>
      <NavBar handleGetPhotos={handleGetPhotos} />
      <div className="mt-5 mb-5 container d-flex justify-content-around align-items-center buttons-container">
        <Button onClick={()=> handleGetPhotos("mountain")} variant="dark">Mountain</Button>
        <Button onClick={()=> handleGetPhotos("beach")} variant="dark">Beaches</Button>
        <Button onClick={()=> handleGetPhotos("birds")} variant="dark">Birds</Button>
        <Button onClick={()=> handleGetPhotos("food")} variant="dark">Food</Button>
      </div>
      <div className="container">
        {data && data.map((item, index)=> {
            return (
              <Image item={item} key={index}/>
            )
        })}
        
      </div>
    </>
  );
}

export default Home;
