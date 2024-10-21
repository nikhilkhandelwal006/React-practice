import NetflixSeries from "./Components/NetflixSeries";
import "./Components/Netflix.css"

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
      
    </section>
  );
};
