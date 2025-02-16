import React, { useContext, useEffect, useState } from 'react'
import urlContext from '../context/api_url/urlContext';
import Card from './Card'
import "./css/Grid.css";

// const host="http://127.0.0.1:5000";

export default function Grid() {
  
  const host = useContext(urlContext)
  
  //get food items
  const [foodItem, setFoodItem]=useState([]);
  
  useEffect(() => {
    
    console.log("host is "+host);

    let url = `${host}/api/fooditem/getFood`;

      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFoodItem(data);
      });
    // console.log(foodItem)
  },[])
  
  
  return (
    <div className='grid-container'>
      {
        foodItem.map((element) => (
          <Card
            key={element._id}
            num={element._id}
            imgurl="https://picsum.photos/60"
            foodName={element.name}
            price={element.price}
            dsc={element.dsc}
          />
        ))
      }
    </div>
  )
}
