"use strict";

var React = require('react');
var ReactLogo = require('./reactSVGLogo.js');
var PenLogo = require('./penSVGLogo.js');

var header = React.createClass({

	render: function() {
		return (
			<div id="table-wrapper">
	      <table id="ingredients">
					<tbody>
						<tr>
							<td className="ingredient react-logo">
								<ReactLogo size="80px" />
							</td>
							<td className="ingredient velocity-logo">
								Velocity<span className="period">.</span>js
							</td>
							<td className="ingredient illustrator-logo">
								<PenLogo size="60px" />
							</td>
						</tr>
					</tbody>
	      </table>
			</div>
    );
	}
});

module.exports = header;
