var React = require('react');
var ReactDOM = require('react-dom');

var statPanel = React.createClass({
	componentDidMount: function(){
		var panel = ReactDOM.findDOMNode(this);
		Velocity(panel, {
			opacity: 1,
			translateX: '+=120px'
		}, {
			duration: 1200,
			easing: 'easeOut',
			delay: 4000
		});
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
