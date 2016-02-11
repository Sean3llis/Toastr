"use strict";

var React = require('react');
var ReactLogo = require('./reactSVGLogo.js');
var PenLogo = require('./penSVGLogo.js');

var header = React.createClass({
	componentDidMount: function(){
		var ingredients = document.querySelectorAll('.ingredient');
		Velocity(ingredients, 'transition.slideDownIn', {
			duration: 2400,
			stagger: 200
		});
	},

	render: function() {
		return (
			<div id="table-wrapper">
	      <div id="ingredients" className="container">
					<div className="col-sm-4 ingredient react-logo">
						<ReactLogo size="80px" />
					</div>
					<div className="col-sm-4 ingredient velocity-logo">
						Velocity<span className="period">.</span>js
					</div>
					<div className="col-sm-4 ingredient illustrator-logo">
						<PenLogo size="80px" />
					</div>
					<div className="clearfix"></div>
	      </div>
			</div>
    );
	}
});

module.exports = header;
