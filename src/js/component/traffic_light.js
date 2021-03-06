import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickColor: null
		};
	}

	render() {
		// console.log(this.state);
		let selectRed = "";

		if (this.state.clickColor == "red") {
			selectRed = "selected";
		}

		let selectYellow = "";

		if (this.state.clickColor == "yellow") {
			selectYellow = "selected";
		}

		let selectGreen = "";
		if (this.state.clickColor == "green") {
			selectGreen = "selected";
		}

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="container">
					<div
						className={"red light " + selectRed}
						onClick={() =>
							this.setState({ clickColor: "red" })
						}></div>
					<div
						className={"yellow light " + selectYellow}
						onClick={() =>
							this.setState({ clickColor: "yellow" })
						}></div>
					<div
						className={"green light " + selectGreen}
						onClick={() =>
							this.setState({ clickColor: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
