'use strict';



class Page extends React.Component {
	state = {
    	currentPerfume: null
	};
	  
	_onClick(perfume) {
		this.setState({currentPerfume: perfume});
	}

	render() {
		const elements = [];

		for (let perfume of NH.perfumes) {
			const className = "sidebutton " + (this.state.currentPerfume === perfume ? "selectedbutton" : "");
			elements.push(
				<div className={className} onClick={this._onClick(perfume)}>
					{perfume.name}
				</div>
			);
		}

		console.log(NH);

		return (
			<div>
				<div className="header">
					<img src="img/logo.png"/>
				</div>
				<div className="sidecontainer">
					{elements}
				</div>
				<div className="showcase">
					{this.state.currentPerfume}
				</div>
			</div>
		);
	}
}








const e = React.createElement;
const container = document.querySelector('#reactcontainer');
ReactDOM.render(e(Page), container);