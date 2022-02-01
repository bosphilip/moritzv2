import "../App.css";
import airbnb from "../assets/airbnb-1.svg";
import bookingcom from "../assets/bookingcom-1.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import { Menu, Close } from "@mui/icons-material";

export default function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const StylesOpen = {
		fontSize: "40px",
		display: "flex",
		transition: "0.5s",
	};
	const StylesOpenActive = {
		fontSize: "40px",
		display: "flex",
		opacity: "0",
		transform: "rotate(270deg)",
		transition: "0.5s",
	};
	const StylesClosed = {
		fontSize: "40px",
		opacity: "0",
		transition: "0.5s",
	};
	const StylesClosedActive = {
		position: "absolute",
		fontSize: "40px",
		opacity: "1",
		transform: "rotate(270deg)",
		transition: "0.5s",
	};

	return (
		<div>
			<div
				className=" openButtonContainer"
				onClick={open ? handleClose : handleOpen}
			>
				<span className=" openButton" onClick={open ? handleClose : handleOpen}>
					<Menu
						sx={open ? StylesOpenActive : StylesOpen}
						className="menuIcon butt"
					></Menu>
					<Close
						sx={open ? StylesClosedActive : StylesClosed}
						className="menuIcon butt"
					></Close>
				</span>
			</div>

			<Modal className="mobileModal" style={{ outline: "none" }} open={open}>
				<Slide direction="up" in={open} out={open === false}>
					<div className="modalComp" style={{ outline: "none" }}>
						<ul className="MobileNavList" style={{ outline: "none" }}>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/"
									onClick={handleClose}
								>
									Home
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/gallerie"
									onClick={handleClose}
								>
									Gallerie
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/uberuns"
									onClick={handleClose}
								>
									Über uns
								</NavLink>
							</li>
							<li className="MobileNavListItem">
								<NavLink
									className={"mobileNavLink"}
									to="/kontakt"
									onClick={handleClose}
								>
									Kontakt
								</NavLink>
							</li>
							<li className="MobileNavListItem mobileNavIcon">
								<a
									href="https://www.airbnb.com/rooms/47764871"
									onClick={handleClose}
								>
									<img
										alt="booking.com"
										className="navIcon navIcons"
										src={airbnb}
									></img>
								</a>
								<a
									href="http://www.booking.com/Share-BY2Hne"
									onClick={handleClose}
								>
									<img
										alt="airbnb.com"
										className="navIcon navIcons"
										src={bookingcom}
									></img>
								</a>
							</li>
							<li className="closeButtonContainer"></li>
						</ul>
					</div>
				</Slide>
			</Modal>
		</div>
	);
}
