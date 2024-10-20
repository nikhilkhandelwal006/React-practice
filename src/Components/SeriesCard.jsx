export const SeriesCard=({curElem})=>{
// console.log(props)
// const {curElem}=props
const {id,img_url, name, rating, description, cast, genre, watch_url}=curElem
return(
    <li >
      <div>
        <img
          src={img_url}
          alt={name}
          width="30%" 
          height="30%"
        />
      </div>
      <h2>Name:{name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
}