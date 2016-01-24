"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Toastr = require('./components/toastr.js');
var Header = require('./components/header.js');

var App = React.createClass({
	getInitialState: function(){
		return {
			stats: {
				toastLeft: 'bread',
				toastRight: 'bread',
				leftHandleDown: false,
				rightHandleDown: false
			}
		}
	},

	extractStats: function(stats){
		this.setState({
			stats: stats
		});
	},

	render: function() {
		return (
			<div id="app-wrapper">
				<Header />
				<div id="toastr-canvas">
					<Toastr extractStats={this.extractStats} />
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
