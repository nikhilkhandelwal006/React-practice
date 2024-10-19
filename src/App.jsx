import React from "react";
export const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />

      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  let name = "Queen of tears"
 let  rating = 8.2
 let  summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium necessitatibus, praesentium ut sequi optio aliquid exercitationem ipsum cum, enim officiis animi quibusdam natus voluptatibus temporibus qui, tempora iste sed vitae";
    let Genre=()=>{
      const Genre= "rom com"
      return Genre
    }
  return (
    <>
      <div>
        <img src="qot.jpg" alt="qot.jpg" width="30%" height="30%" />
      </div>
      <h2>{name}</h2>
      <h3>Rating: {5+3.3}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {Genre()}</p>
    </>
  );
};
