import React, { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5133929&lng=77.0722759&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const imgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div id="cards">
      {restaurants.map((rest) => {
        return (
          <div className="card" key={rest.info.id}>
            <img
              src={imgURL + rest.info.cloudinaryImageId}
              alt="company-logo"
              //   width={200}
            ></img>
            <div id="cardDetails">
              <div>{rest.info.name}</div>
              <div>{rest.info.cuisines}</div>
              <div>{rest.info.avgRating}</div>
              <div>{rest.info.costForTwo}</div>
              <div>{rest.info.totalRatingsString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
