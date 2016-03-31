'use strict';

import React, { Component } from 'react';

import registerAnimations from './toast.animations';

class Toast extends Component {
  constructor(props){
    super(props);
    // Shortcuts
    this.data = props.data;
    this.status = this.props.data.status;
    this.side = props.side;
    this.toastClick = props.toastClick;
    this.toastToasted = props.toastToasted;

    // Scoped functions
    this._popUp = this._popUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    registerAnimations();
    this.toastNode = document.getElementById(`toast-${this.side}`);
  }

  _popUp() {
    Velocity(this.toastNode, 'toast:popup', this.toastToasted(this.side));
  }

  componentDidUpdate() {
    var status = this.props.data.status;
    switch (status) {
      case 'bread' :
        Velocity(this.toastFront, {
          fill: '#EFEDD8'
        })
        Velocity(this.toastNode, 'toast:bread'); break;
      case 'ready' :
        Velocity(this.toastNode, 'toast:ready'); break;
      case 'toasting' :
        Velocity(this.toastNode, 'toast:toasting');
        Velocity(this.toastFront, 'toast:browning', {
          duration: this.data.toastTime,
        }).then(function(){
          this._popUp();
        }.bind(this));
        break;
      default :
        Velocity(this.toastNode, 'stop');
        Velocity(this.toastFront, 'stop');
    }

  }

  handleClick() {
    this.props.onToastClick(this.props.side);
  }

  render() {
    var leftToast = (
      <g id="toast-left" className={`toast state-${this.data.status}`} onClick={this.handleClick}>
        <path fill="#5B4736" d="M600.299,289.379c0,0-3.177-176.819-23.745-176.167c21.64-13.191,23.94-69.069-2.719-93.73
          C543.626-8.468,492.822-0.704,433.133,18.63l-36.423,1.158C335.914,4.287,286.596,2.829,256.193,29.585
          c-27.122,23.864-19.213,83.757,3.223,95.545c-20.572,0.653-6.9,193.571-6.9,193.571c0.445,4.689,19.091,14.791,39.078,11.776
          C380.21,342.606,600.478,321.87,600.299,289.379z"/>
        <path fill="#EFEDD8" ref={(ref) => this.toastFront = ref} d="M634.354,305.738c0,0,1.432-194.41-19.141-193.756c21.64-13.19,23.939-69.068-2.719-93.731
          c-30.209-27.95-81.013-20.186-140.7-0.852l-36.423,1.159C374.576,3.056,325.257,1.6,294.854,28.354
          c-27.123,23.866-19.214,83.757,3.221,95.545c-20.57,0.654-6.478,206.741-6.478,206.741
          C300.152,338.667,634.581,346.385,634.354,305.738z"/>
      </g>
    );

    var rightToast = (
      <g id="toast-right" className={`toast state-${this.data.status}`} onClick={this.handleClick}>
        <path fill="#5B4736" d="M832.388,341.377c0,0,9.567-176.589-10.997-177.418c22.536-11.599,28.855-67.164,4.039-93.686
          c-28.121-30.054-79.351-25.966-140.273-10.981l-36.413-1.47c-59.522-19.839-108.608-24.843-140.859-0.348
          c-28.771,21.85-25.194,82.154-3.664,95.527c-20.566-0.829-20.821,192.575-20.821,192.575c0.106,4.711,17.974,16.126,38.127,14.559
          C609.039,378.616,830.229,373.796,832.388,341.377z"/>
        <path fill="#EFEDD8" ref={(ref) => this.toastFront = ref} d="M865.178,360.146c0,0,15.431-193.802-5.136-194.631c22.537-11.597,28.854-67.164,4.042-93.683
          c-28.119-30.053-79.351-25.967-140.278-10.982l-36.409-1.469c-59.523-19.84-108.609-24.846-140.858-0.351
          c-28.771,21.851-25.196,82.156-3.667,95.527c-20.564-0.831-21.352,205.737-21.352,205.737
          C529.474,368.923,862.479,400.706,865.178,360.146z"/>
      </g>
    );
    this.toast = (this.side === 'left') ? leftToast : rightToast;
    return (
      <g>{this.toast}</g>
    );
  }

}

export default Toast;
