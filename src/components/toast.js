"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var toast = React.createClass({
	getInitialState: function(){
		return {
			popped: false
		}
	},

	componentDidMount: function(){
		Velocity.RegisterEffect('toast:popup', {
			defaultDuration: 500,
			calls: [
				[ { translateY: "-120px" }, 0.5, { easing: 'easeOutCirc'}],
				[ { translateY: '80px' }, 0.5, { easing: 'easeInCirc' }]
			]
		});
	},

	componentDidUpdate: function(){
		var node = ReactDOM.findDOMNode(this);
		switch (this.props.status){
			case 'ready': this.toastReady(node); break;
			case 'toasting': this.toastToasting(node); break;
			case 'toasted': if(!this.state.popped) this.toastToasted(node); break;
		}
	},

	toastReady: function(ele){
		Velocity(ele, {
			translateY: "80px"
		}, {
			easing: 'easeOut'
		});
	},

	toastToasting: function(ele){
		var toastFront = ele.childNodes[1];
		console.log(this.props.toastTime);
		Velocity(ele, {
			translateY: "180px",
		}, {
			easing: [200, 20]
		});
		Velocity(toastFront, {
			fill: '#D1AF8C'
		}, {
			easing: 'linear',
			duration: this.props.toastTime
		});
	},

	toastToasted: function(ele){
		Velocity(ele, 'toast:popup'); this.setState({popped: true});
	},

	handleClick: function(e){
		this.props.handleClick(this.props.side, e)
	},


	render: function() {
		var leftToast = (
			<g onClick={this.handleClick} id="ToastLeft" className="toast">
				<path fill="#5B4736" d="M479.03,286.988c0,0-1.667-92.793-12.461-92.45c11.357-6.923,12.564-36.247-1.426-49.189
				c-15.854-14.668-42.515-10.593-73.839-0.447l-19.115,0.608c-31.905-8.135-57.787-8.9-73.742,5.141
				c-14.233,12.524-10.083,43.955,1.691,50.141c-10.795,0.343-3.62,101.584-3.62,101.584c0.233,2.461,10.018,7.762,20.507,6.18
				C363.53,314.921,479.124,304.039,479.03,286.988z"/>
				<path className="toast-front" fill="#EFEDD8" d="M496.902,295.573c0,0,0.751-102.024-10.045-101.681c11.357-6.922,12.564-36.246-1.426-49.189
				c-15.854-14.668-42.515-10.593-73.838-0.447l-19.115,0.608c-31.905-8.135-57.787-8.899-73.742,5.141
				c-14.233,12.524-10.083,43.955,1.691,50.141c-10.795,0.343-3.4,108.495-3.4,108.495
				C321.517,312.854,497.021,316.904,496.902,295.573z"/>
			</g>
		);

		var rightToast = (
			<g onClick={this.handleClick} id="ToastRight" className="toast">
			<path fill="#5B4736" d="M600.828,314.276c0,0,5.021-92.672-5.771-93.107c11.827-6.087,15.143-35.247,2.12-49.165
				c-14.758-15.772-41.643-13.627-73.615-5.763l-19.109-0.771c-31.236-10.412-56.996-13.038-73.921-0.183
				c-15.098,11.467-13.222,43.114-1.923,50.132c-10.793-0.435-10.926,101.061-10.926,101.061c0.055,2.472,9.432,8.463,20.008,7.64
				C483.617,333.819,599.695,331.289,600.828,314.276z"/>
			<path className="toast-front" fill="#EFEDD8" d="M618.036,324.126c0,0,8.098-101.705-2.695-102.14c11.827-6.086,15.142-35.247,2.121-49.164
				c-14.757-15.771-41.643-13.627-73.616-5.763l-19.108-0.771c-31.237-10.412-56.997-13.039-73.921-0.184
				c-15.098,11.467-13.222,43.115-1.924,50.132c-10.792-0.436-11.205,107.968-11.205,107.968
				C441.862,328.732,616.619,345.411,618.036,324.126z"/>
			</g>
		);
		return (this.props.side === "left") ? leftToast : rightToast;
	}

});

module.exports = toast;
