"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Toastr = require('./components/toastr.js');
var Header = require('./components/header.js');
var StatPanel = require('./components/statPanel.js');

var App = React.createClass({
	extractStats: function(stats){
		console.log(stats);
	},

	render: function() {
		return (
			<div id="app-wrapper">
					<Header />
					<div className="row">
						<div className="col-sm-6">
							<Toastr extractStats={this.extractStats} />
						</div>
						<div className="col-sm-6">
							<StatPanel />
						</div>
					</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
