import React from "react";
//import Display from "./Display";

export default class Page extends React.Component {
	state = {
    	currentPerfume: null
	};
	  
	_onClick(perfume) {
		this.setState({currentPerfume: perfume});
	}

	render() {
		const elements = [];

		for (let perfume of NH.perfumes) {
			const mod = this.state.currentPerfume === perfume ? "selectedbutton" : "";
			elements.push(
				<div className={"sidebutton " + mod} onClick={() => this._onClick(perfume)}>
					{perfume.name}
				</div>
			);
		}

		console.log(NH);

		return (
			<>
				<div className="header">
					<img src="img/logo.png"/>
				</div>
				<div className="sidecontainer">
					{elements}
				</div>
				<div className="showcase">
					{this.state.currentPerfume}
				</div>
			</>
		);
	}
}