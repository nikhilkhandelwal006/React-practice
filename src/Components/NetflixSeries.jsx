
 const NetflixSeries = () => {
    let name = "Queen of tears"
   let  rating = 8.2
   let  summary =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium necessitatibus, praesentium ut sequi optio aliquid exercitationem ipsum cum, enim officiis animi quibusdam natus voluptatibus temporibus qui, tempora iste sed vitae";
      let Genre=()=>{
        const Genre= "Rom com"
        return Genre
      }
      let age=18;
      const canWatch=()=>{
        if (age>=18 ) return "Watch Now"
        return "Not available"
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
         {/* <button>{age>=18?"watch Now":"Not available"}</button> */}
        {/* <button>{age>=18 && "watch Now"}</button> */}
        <button>{canWatch()}</button>
      </>
    );
  };
 
  
  export default NetflixSeries;

  export const Header=()=>{
    return (
        <p>copyright @ NK;</p>
    )
  }

  export const Footer=()=>{
    return (
        <p>copyright @ NK;</p>
    )
  }