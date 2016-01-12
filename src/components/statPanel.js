var React = require('react');

var statPanel = React.createClass({

	render: function() {
		var data = this.props.stats;
		return (
			<div>
				<hr />
				<h1>Stat Panel </h1>
				<table style={{width: '100%'}}>
					<thead>
						<tr>
							<td>Left Toast</td>
							<td>Right Toast</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Status: {data.toastLeft}</td>
							<td>Status: {data.toastRight}</td>
						</tr>
						<tr>
							<td>Lever is Down: {data.leftHandleDown + '!'}</td>
							<td>Lever is Down: {data.rightHandleDown + '!'}</td>
						</tr>

					</tbody>
				</table>
			</div>
		);
	} 

});

module.exports = statPanel;