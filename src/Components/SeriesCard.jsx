export const SeriesCard=(props)=>{

return(
    <li key={props}>
      <div>
        <img
          src={props.curElem.img_url}
          alt={props.curElem.name}
          width="30%"
          height="30%"
        />
      </div>
      <h2>Name:{props.curElem.name}</h2>
      <h3>Rating: {props.curElem.rating}</h3>
      <p>Summary: {props.curElem.description}</p>
      <p>Genre: {props.curElem.genre}</p>
      <a href={props.curElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
}