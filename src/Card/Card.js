import Avatar from "../Avatar/Avatar";
import "../Card/Card.css";

function Card(props) {
  return (
    <main>
      <div className="card">
        <div>
          {props.temp && (
            <div className="avatar">
              <Avatar temp={props.temp} />
            </div>
          )}
        </div>
        <div className="weather__info">
          <h1>Weather API</h1>
          {props.name && (
            <div>
              <p>
                Today's temperature in the city of{" "}
                <strong> {props.name}</strong> is {props.temp} ℉
              </p>
              <p>It feels like {props.feels_like} ℉</p>
            </div>
          )}
          {props.children}
        </div>
      </div>
    </main>
  );
}

export default Card;
