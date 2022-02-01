import "../App.css";
import airbnb from "../assets/airbnb-1.svg";
import bookingcom from "../assets/bookingcom-1.svg";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<div className="navListCont">
			<ul className="navList">
				<li className="navListItem">
					<NavLink className={"navLink"} to="/">
						Home
					</NavLink>
				</li>
				<li className="navListItem">
					<NavLink className={"navLink"} to="/galerie">
						Galerie
					</NavLink>
				</li>
				<li className="navListItem">
					<NavLink className={"navLink"} to="/uberuns">
						Über uns
					</NavLink>
				</li>
				<li className="navListItem">
					<NavLink className={"navLink"} to="/kontakt">
						Kontakt
					</NavLink>
				</li>
				<li className="navListItem">
					<a
						rel="noopener noreferrer"
						href="https://www.airbnb.com/rooms/47764871"
					>
						<img alt="booking" className="navIcon navIcons" src={airbnb}></img>
					</a>
					<a
						rel="noopener noreferrer"
						href="http://www.booking.com/Share-BY2Hne"
					>
						<img
							alt="airbnb"
							className="navIcon navIcons"
							src={bookingcom}
						></img>
					</a>
				</li>
			</ul>
		</div>
	);
}
