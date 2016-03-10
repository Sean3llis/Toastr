'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component
import Toast from './components/toast';
import Base from './components/base';
import Dial from './components/dial';
import Handle from './components/handle';
import ReactLogo from './components/react-logo';

class Toastr extends Component {
	constructor(props){
		super(props);
		this.state = {
			left: {
				status: 'bread',
				leverDown: false,
				cookTime: 5000
			},
			right: {
				status: 'bread',
				leverDown: false,
				cookTime: 5000
			},
			stats: {
				eaten: 0
			}
		}
		this.toastClick = this.toastClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	toastClick(side) {
		if(side === 'left'){
			var left = this.state.left;
			left.status = 'ready';
			this.setState({ left })
		} else {
			var right = this.state.right;
			right.status = 'ready';
			this.setState({ right });
		}
	}

	handleClick(side) {
		// REFACTOR THIS DUPLICATION OUT
		if( this.state[side].status !== 'ready') return;
		if(side === 'left'){
			var left = this.state.left;
			left.status = 'toasting';
			left.leverDown = true;

			this.setState({ left });
		} else {
			var right = this.state.right;
			right.status = 'toasting';
			right.leverDown = true;

			this.setState({ right });
		}
	}

	spinLogo(logo, duration) {
		Velocity(logo, {
			rotateZ: '1080deg'
		}, {
			easing: 'easeInOutCubic',
			duration: duration
		});
	}

	componentDidMount() {
	  this.logo = document.getElementById('react-logo');
		this.spinLogo(this.logo, 4000);
	}


	render() {
		var size = 400;
		return(
			<div id="toastr">
			<svg x="0px" y="0px"
				 width={size} height={size} viewBox="0 0 1261.459 1312.035" enable-background="new 0 0 1261.459 1312.035">
			<Toast side='left' data={this.state.left} toastClick={this.toastClick}/>
			<Toast side='right' data={this.state.right} toastClick={this.toastClick}/>
			<Base />

			<g id="Tracks">
				<path fill="#333333" d="M112.426,964.591c-2.408,0-3.811-1.952-3.811-4.356V684.312c0-2.41,1.403-4.358,3.811-4.358
					c2.408,0,3.812,1.948,3.812,4.358v275.922C116.237,962.639,114.834,964.591,112.426,964.591z"/>
				<path fill="#333333" d="M187.694,964.591c-2.408,0-4.764-1.952-4.764-4.356V684.312c0-2.41,2.355-4.358,4.764-4.358
					s4.764,1.948,4.764,4.358v275.922C192.458,962.639,190.103,964.591,187.694,964.591z"/>
			</g>

			<Dial side='left' />
			<Dial side='right' />

			<Handle side='left' isDown={this.state.left.leverDown} handleClick={this.handleClick} />
			<Handle side='right' isDown={this.state.right.leverDown} handleClick={this.handleClick} />
			<ReactLogo />
			</svg>
			</div>
		)
	}
}

ReactDOM.render(<Toastr />, document.getElementById('app'));
