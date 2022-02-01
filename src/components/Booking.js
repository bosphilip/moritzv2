import airbnb2 from "../assets/airbnb.svg";
import bookingcom2 from "../assets/bookingcom.svg";
import "../App.css";

export default function BookingPanel() {
	return (
		<div className="iconPanel">
			<h3 className="bookingHeading">Zur Buchung:</h3>
			<div className="icons">
				<a
					target={"_blank"}
					rel="noopener noreferrer"
					href="http://www.booking.com/Share-BY2Hne"
				>
					<img alt="booking.com" className="icon" src={bookingcom2}></img>
				</a>
				<a
					target={"_blank"}
					rel="noopener noreferrer"
					href="https://www.airbnb.com/rooms/47764871"
				>
					<img alt="airbnb" className="icon" src={airbnb2}></img>
				</a>
			</div>
		</div>
	);
}
