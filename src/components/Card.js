import pin from "../images/pin.png";

export default function Card(props) {
	return (
		<div className="card">
			
				<img className="card--img" src={props.imageUrl} />
			
			<div className="card--info">
				<div className="card--location">
                    <img className="card--pin" src={pin}/>
					<span className="card--country">{props.location}</span>
					<a href={props.googleMapsUrl} className="card--link">
						View on Google Maps
					</a>
				</div>
				<h1 className="card--title">{props.title}</h1>
				<div className="card--date">{props.startDate} - {props.endDate}</div>
				<div className="card--description">
					{props.description}
                    
				</div>
                
			</div>
            <hr/>
		</div>
	);
}
