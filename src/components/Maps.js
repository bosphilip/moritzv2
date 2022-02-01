import { Component } from "react";

class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 54.544,
				longitude: 13.32,
				zoom: 7,
				bearing: 0,
				pitch: 0,
			},
		};
	}

	render() {
		return (
			<div className="mapCont">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37030.52867592761!2d13.294247433843982!3d54.543932097048334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ab5b448fa697d1%3A0x51e71ab4340ad121!2sFerienwohnungen%20Moritzhagen!5e0!3m2!1sen!2spt!4v1643720851954!5m2!1sen!2spt"
					width="100%"
					height="100%"
					title="maps"
					style={{ border: "none" }}
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</div>
		);
	}
}

export default Maps;
