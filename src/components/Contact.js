import * as React from "react";
import Maps from "./Maps";
import { Phone, LocationOn, Email } from "@mui/icons-material";

function Contact() {
	return (
		<div>
			<Maps></Maps>
			<div className="contactCont responsiveSec">
				<h3>Kontakt</h3>
				<div className="contactSec">
					<Phone sx={{ color: "gray" }}></Phone>
					<p className="contactSecText">+49 1575 1483217</p>
				</div>
				<div className="contactSec">
					<LocationOn sx={{ color: "gray" }}></LocationOn>
					<p className="contactSecText">Moritzhagen 7, 18569 Neuenkirchen</p>
				</div>
				<div className="contactSec">
					<Email sx={{ color: "gray" }}></Email>
					<p className="contactSecText">arie.bos@gmx.de</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
