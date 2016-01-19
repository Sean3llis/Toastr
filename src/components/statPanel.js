var React = require('react');

var statPanel = React.createClass({
	componentDidMount: function(){
		console.log(this.props);
	},

	render: function() {
		return (
			<div id="stat-wrapper">
				<h4 style={{textAlign: 'center'}}>Stat Panel </h4>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Left Toast</th>
							<th>Right Toast</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>{this.props.stats.toastLeft}</td>
							<td>{this.props.stats.toastRight}</td>
						</tr>
					</tbody>
				</table>
				<div className="pointer"></div>
			</div>
		);
	}

});

module.exports = statPanel;
