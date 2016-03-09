"use strict"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			toast: [
				{
					status: 'bread',
					leverDown: false,
				}
			],
			stats: {
				eaten: 0
			}
		}
	}
	render() {
		return(
			<div id="toastr">
				TOAST!
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
