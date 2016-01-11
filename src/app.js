"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var StatPanel = require('./components/statPanel.js');
var toast = require('./components/toast.js');
var Toastr = require('./components/toastr.js');
var App = React.createClass({

	render: function() {
		return (
			<div>
				<Toastr />
				<StatPanel data={this.state}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));