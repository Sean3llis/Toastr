"use strict";

var React = require('react');
var ReactLogo = require('./reactSVGLogo.js');

var header = React.createClass({

	render: function() {
		return (
      <div id="ingredients">
				<div className="ingredient react-logo">
					<ReactLogo />
				</div>
				<div className="ingredient velocity-logo">
					Velocity<span className="period">.</span>js
				</div>
				<div className="ingredient illustrator-logo">
					...
				</div>
      </div>
    );
	}
});

module.exports = header;
