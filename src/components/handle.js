'use strict';

import React, { Component } from 'react';

import defineAnimations from './handle.animations';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.side = props.side;
    this.handleClick = props.handleClick;
    this._onClick = this._onClick.bind(this);
    this._getHandle = this._getHandle.bind(this);
  }

  _onClick() {
    this.handleClick(this.side);
  }

  componentDidMount() {
    defineAnimations();
  }

  componentDidUpdate() {
    if(this.props.isDown) Velocity(this.handleNode, 'handle:down');
  }

  _getHandle(side) {
    if(side === 'left'){
      return (
        <g ref={(ref) => this.handleNode = ref} id="HandleLeft" onClick={this._onClick} >
          <polygon fill="#333333" points="136.975,739.122 105.544,739.122 44.032,730.596 106.477,725.661 		"/>
          <polygon fill="#686868" points="73.076,731.501 43.827,731.501 43.827,706.729 110.835,706.729 		"/>
          <polygon fill="#E0E0E0" points="139.104,739.497 72.41,730.782 72.41,706.729 139.104,706.729 		"/>
        </g>
      );
    } else {
      return (
        <g ref={(ref) => this.handleNode = ref} id="HandleRight" onClick={this._onClick} >
          <polygon fill="#333333" points="212.488,739.122 181.059,739.122 119.546,730.573 181.993,725.653 		"/>
          <polygon fill="#686868" points="148.59,731.501 120.048,731.501 120.048,706.729 186.349,706.729 		"/>
          <polygon fill="#E0E0E0" points="215.324,739.454 148.631,730.739 148.631,706.729 215.324,706.729 		"/>
        </g>
      );
    }
  }


  render() {
    return (
      <g>{this._getHandle(this.side)}</g>
    );
  }
}



export default Handle;
