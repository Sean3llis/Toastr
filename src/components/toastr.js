"use strict";

var React = require('react');
var Toast = require('./toast.js');
var Handle = require('./handle.js');
var StatPanel = require('./statPanel.js');

var toastr = React.createClass({
	getDefaultProps: function(){
			var ratio = 600;
	    return {
	        height: ratio,
	        width: ratio,
	        viewBox: [0, 0, 1000, 1000].join(' '),
	        toastTime: 8000
	    }
	},

	getInitialState: function(){
		return {
			toastLeft: 'bread',
			toastRight: 'bread',
			leftHandleDown: false,
			rightHandleDown: false
		}
	},

	onHandleClick: function(side, data){
		if(side === 'left' && this.state.toastLeft === 'ready'){
			this.setState({
				leftHandleDown: true,
				toastLeft: 'toasting'
			}, function(){
				setTimeout(this.leftToasted, this.props.toastTime);
			});
		} else if(side === 'right' && this.state.toastRight === 'ready'){
			this.setState({
				rightHandleDown: true,
				toastRight: 'toasting'
			}, function(){
				setTimeout(this.rightToasted, this.props.toastTime);
			});
		}
	},

	leftToasted: function(){
		this.setState({
			toastLeft: 'toasted',
			leftHandleDown: false
		});
	},

	rightToasted: function(){
 		this.setState({
 			toastRight: 'toasted',
 			rightHandleDown: false
 		});
	},

	onToastClick: function(side){
		if(side === 'left' && this.state.toastLeft === 'bread'){
			this.setState({toastLeft: 'ready'});
		} else if(side === 'right' && this.state.toastRight === 'bread') {
			this.setState({toastRight: 'ready'});
		}
	},

	render: function() {
		return (
			<div>
				<svg width={this.props.width + 'px'} height={this.props.height + 'px'} viewBox={this.props.viewBox} >
					<Toast
						side="left"
						status={this.state.toastLeft}
						toastTime={this.props.toastTime}
						handleClick={this.onToastClick} />
					<Toast
						side="right"
						status={this.state.toastRight}
						toastTime={this.props.toastTime}
						handleClick={this.onToastClick} />
					<path fill="#686868" d="M184 805.238V805h.407H184v.238l-11.014-.03s2.126 6.598 3.315 12.874c1.173 6.195 4.797 6.113 8.07 6.11 3.276.003 6.894.057 8.065-6.137 1.188-6.277 2.997-12.846 2.997-12.846l-11.432.028z"/>
					<path fill="#333" d="M173.125 805.133s1.326 6.637 2.514 12.912c.697 3.69 2.36 5.16 3.36 5.743v-9.09c0-6.787 9.444-9.25 15.84-9.25l.792-2.896-22.507 2.58z"/>
					<path fill="#686868" d="M277 805.238V805h.385H277v.238l-11.025-.03s2.12 6.598 3.31 12.874c1.172 6.195 4.793 6.113 8.068 6.11 3.275.003 6.89.057 8.062-6.137 1.188-6.277 3.007-12.846 3.007-12.846l-11.422.028z"/>
					<path fill="#333" d="M266.102 805.133s1.337 6.637 2.525 12.912c.697 3.69 2.373 5.16 3.373 5.743v-9.09c0-6.787 9.433-9.25 15.83-9.25l.785-2.896-22.513 2.58z"/>
					<path fill="#686868" d="M690 805.238V805h.448H690v.238l-10.993-.03s2.138 6.598 3.325 12.874c1.174 6.195 4.8 6.113 8.075 6.11 3.275.003 6.896.057 8.067-6.137 1.188-6.277 2.978-12.846 2.978-12.846l-11.452.028z"/>
					<path fill="#333" d="M679.166 805.133s1.805 6.637 2.992 12.912c.698 3.69 1.842 5.16 3.842 5.743v-9.09c0-6.787 8.966-9.25 15.36-9.25l.552-2.896-22.746 2.58z"/>
					<path fill="#686868" d="M783 805.238V805h.426H783v.238l-11.004-.03s2.13 6.598 3.318 12.874c1.174 6.195 4.8 6.113 8.073 6.11 3.274.003 6.894.057 8.065-6.137 1.188-6.277 2.988-12.846 2.988-12.846l-11.44.028z"/>
					<path fill="#333" d="M772.143 805.133s1.816 6.637 3.004 12.912c.7 3.69 1.854 5.16 3.854 5.743v-9.09c0-6.787 8.956-9.25 15.35-9.25l.547-2.896-22.754 2.58z"/>
					<path fill="#C6C6C6" d="M181 514.587C181 398.887 204.636 360 335.832 360h195.075C616.412 360 686 429.08 686 514.587V729H181V514.587z"/>
					<g>
						<path fill="#E0E0E0" d="M300 514.587C300 388.727 324.268 360 409.773 360H649.05C734.556 360 804 429.08 804 514.587V729H300V514.587z"/>
					</g>
					<g>
						<path fill="#686868" d="M804.926 729c13.718 0 21.074 7.248 21.074 19.44V806H300v-77h504.926z"/>
					</g>
					<g>
						<path fill="#333" d="M164 806v-57.56c0-12.192 7.61-19.44 21.33-19.44h-.255H300v77H164z"/>
					</g>
					<g>
						<path fill="#686868" d="M598.246 524H516.22c-2.438 0-4.2 1.945-4.2 4.386v13.304c0 2.44 1.762 4.31 4.2 4.31H538.352c2.438 0 3.624 2.122 3.624 4.56v53.22c0 2.438 2.807 4.222 5.246 4.222H567.163c2.44 0 3.797-1.783 3.797-4.223v-53.22c0-2.438 2.633-4.56 5.072-4.56H598.168c2.44 0 4.754-1.87 4.754-4.31v-13.305c.076-2.44-2.237-4.385-4.678-4.385z"/>
						<path fill="#F2F2F2" d="M603 528.386c0-2.44-2.313-4.386-4.754-4.386h-75.393c-2.44 0-4.854 1.945-4.854 4.386v13.304c0 2.44 2.413 4.31 4.853 4.31h22.175c2.438 0 4.972 2.122 4.972 4.56v53.22c0 2.438 1.46 4.222 3.898 4.222h13.304c2.44 0 3.798-1.783 3.798-4.223v-53.22c0-2.438 2.633-4.56 5.072-4.56h22.174c2.44 0 4.754-1.87 4.754-4.31v-13.304z"/>
					</g>
					<Handle side="left" isDown={this.state.leftHandleDown} handleClick={this.onHandleClick} />
					<Handle side="right" isDown={this.state.rightHandleDown} handleClick={this.onHandleClick}  />
				</svg>
				<StatPanel stats={this.state} />

			</div>
		);
	}
});

module.exports = toastr;
