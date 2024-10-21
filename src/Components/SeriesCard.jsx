import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ curElem }) => {
  // console.log(props)
  // const {curElem}=props
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    curElem;

  // const btn_style = {};

  //  const ButtonNik=styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //  })

  const ButtonNik = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-Size: 1.6rem;
    background-Color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    font-Weight: bold;
    cursor: pointer;
   `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="30%" height="30%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name:{name}</h2>
        <h3>
          Rating:{" "}
          <span className={`${styles.rating} ${ratingClass}`}> {rating}</span>
        </h3>

        <p>Summary: {description}</p>

        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}

          <ButtonNik rating={rating}>Watch Now</ButtonNik>
        </a>
      </div>
    </li>
  );
};
