import locationLogo from "./location-logo.svg";

export default function Section(props) {
  //   console.log(props.id);
  return (
    <>
      <div className="section">
        <img src={props.item.imageUrl} alt="img" />
        <div className="section--info">
          <div className="location">
            <div className="country-name">
              <img src={locationLogo} alt="location-logo" width="10px" />
              <span>{props.item.location}</span>
            </div>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="location-name">{props.item.title}</h1>
          <div className="date">
            <strong>
              {props.item.startDate} - {props.item.endDate}
            </strong>
          </div>
          <div className="location-info">{props.item.description}</div>
        </div>
      </div>
      {props.item.id !== 3 && <hr className="line" />}
    </>
  );
}
