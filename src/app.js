"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Toastr = require('./components/toastr.js');
var Header = require('./components/header.js');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Header />
				<Toastr />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
