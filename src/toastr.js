'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Lib
import _ from 'lodash';

// Component
import Toast from './components/toast';
import Base from './components/base';
import Dial from './components/dial';
import Handle from './components/handle';
import ReactLogo from './components/react-logo';
import Notifier from './components/notifier';

class Toastr extends Component {
	constructor(props){
		super(props);
		this.state = {
			left: {
				status: 'bread',
				isDown: false,
				toastTime: 1000
			},
			right: {
				status: 'bread',
				isDown: false,
				toastTime: 1000
			},
			eaten: 0,
			notis: [
				'Toastr Online',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Booting Up....',
			 'Let\' get toasty'
		 ]
		}
		this.toastClick = this.toastClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.toastToasted = this.toastToasted.bind(this);
		this._getToastTime = this._getToastTime.bind(this);
		this._setToastStatus = this._setToastStatus.bind(this);
	}

	toastClick(side) {
		var toastStatus = this.state[side].status;
		switch (toastStatus) {
			case 'bread' :
			this._setToastStatus(side, 'ready');
			break;
			case 'toast' :
			this.eatToast(side);
			break;
		}
	}

	handleClick(side) {
		// REFACTOR THIS DUPLICATION OUT
		if( this._getToastStatus(side) !== 'ready') return;
		if(side === 'left'){
			this.spinLogo(side);
			var left = this.state.left;
			left.isDown = true;
			left.status = 'toasting';
			this.setState({ left });
		} else {
			this.spinLogo(side);
			var right = this.state.right;
			right.isDown = true;
			right.status = 'toasting';
			this.setState({ right });
		}
	}


	toastToasted(side) {
		var sideState = this.state[side];
		sideState.isDown = false;
		sideState.status = 'toast';
		var newState = {};
		newState[side] = sideState;
		this.setState(newState);
	}

	eatToast(side) {
		var toast = document.getElementById(`toast-${side}`);
		Velocity(toast, {
			opacity: 0
		}, {
			complete: function(){
				this._setToastStatus(side, 'bread');
				this.setState(function(previousState, props){
					console.log(previousState, '=====');
					return {
						eaten: previousState.eaten + 1
					}
				});
			}.bind(this)
		});
	}

	_getToastStatus(side) {
		return this.state[side].status;
	}

	_setToastStatus(side, status) {
		var newSideState = _.extend({}, this.state[side]);
		newSideState.status = status;
		var newState = {};
		newState[side] = newSideState;
		this.setState(newState);
	}

	_getToastTime(side) {
		return this.state[side].toastTime;
	}

	spinLogo(side) {
		var duration = this._getToastTime(side)
		Velocity(this.reactLogo, {
			rotateZ: '+=1080deg'
		}, {
			easing: 'easeInOutCubic',
			duration: duration
		});
	}

	componentDidMount() {
		this.reactLogo = ReactDOM.findDOMNode(this.refs.reactLogo);
	}


	render() {
		var size = 400;
		return(
			<div id="toastr">
			<svg x="0px" y="0px"
				 width={size} height={size} viewBox="0 0 1261.459 1312.035" enable-background="new 0 0 1261.459 1312.035">
			<Toast toastToasted={this.toastToasted} side='left' data={this.state.left} toastClick={this.toastClick}/>
			<Toast toastToasted={this.toastToasted} side='right' data={this.state.right} toastClick={this.toastClick}/>
			<Base />

			<g id="Tracks">
				<path fill="#333333" d="M112.426,964.591c-2.408,0-3.811-1.952-3.811-4.356V684.312c0-2.41,1.403-4.358,3.811-4.358
					c2.408,0,3.812,1.948,3.812,4.358v275.922C116.237,962.639,114.834,964.591,112.426,964.591z"/>
				<path fill="#333333" d="M187.694,964.591c-2.408,0-4.764-1.952-4.764-4.356V684.312c0-2.41,2.355-4.358,4.764-4.358
					s4.764,1.948,4.764,4.358v275.922C192.458,962.639,190.103,964.591,187.694,964.591z"/>
			</g>

			<Dial side='left' />
			<Dial side='right' />

			<Handle side='left' isDown={this.state.left.isDown} handleClick={this.handleClick} />
			<Handle side='right' isDown={this.state.right.isDown} handleClick={this.handleClick} />
			<ReactLogo ref="reactLogo"/>
			</svg>
			<Notifier notis={this.state.notis} />
			</div>
		)
	}
}

ReactDOM.render(<Toastr />, document.getElementById('app'));
