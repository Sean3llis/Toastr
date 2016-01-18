"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var smoke = React.createClass({
  getDefaultProps: function(){
    return {
      dashArray: 220,
      dashOffset: 199
    }
  },

  getInitialState: function(){
    return {
      smoking: false
    }
  },

  componentWillMount: function(){
    Velocity.RegisterEffect('smoke:float', {
			defaultDuration: 2200,
			calls: [
				[ { strokeDashoffset: "0", opacity: 1 }, 0.5, {easing: 'swing'}],
				[ { strokeDashoffset: "-199", opacity: 0 }, 0.5, {easing: 'swing'}],
			],
      reset: {
        strokeDasharray: this.props.dashArray,
        strokeDashoffset: this.props.dashOffset,
        opacity: 0
      }
		});
  },

  componentDidUpdate: function(){
    var smoke = ReactDOM.findDOMNode(this);
    var wisps = smoke.childNodes;
    if(this.props.isToasting && !this.state.smoking){
      Velocity(wisps, 'smoke:float', {
        duration: this.props.toastTime - 500,
        complete: function() { smoke.setState({smoking: false})}
      });
      this.setState({ smoking: true });
    } else {
      Velocity(wisps, 'stop', true);
      for (var i = 0; i < wisps.length; i++) {
        wisps[i].style.strokeDashoffset = this.props.dashArray;
        wisps[i].style.opacity = 0;
      }
    }
  },

  render: function(){
    return (
      <g id="Smoke">
          <path className="smoke-wisp" fill="none" strokeDasharray={this.props.dashArray} style={{strokeDashoffset: this.props.dashOffset, opacity: 0}} stroke="#F5F5F5" strokeWidth="8" strokeLinecap="round" stroke-linejoin="round" d="
            M442.211,312c0-31.665,17.051-31.665,17.051-63.331c0-31.668-17.051-31.668-17.051-63.335s17.051-31.667,17.051-63.334"/>
          <path className="smoke-wisp" fill="none" strokeDasharray={this.props.dashArray} style={{strokeDashoffset: this.props.dashOffset, opacity: 0}} stroke="#F5F5F5" strokeWidth="8" strokeLinecap="round" stroke-linejoin="round" d="
            M483.711,312c0-31.665,17.052-31.665,17.052-63.331c0-31.668-17.052-31.668-17.052-63.335s17.052-31.667,17.052-63.334"/>
          <path className="smoke-wisp" fill="none" strokeDasharray={this.props.dashArray} style={{strokeDashoffset: this.props.dashOffset, opacity: 0}} stroke="#F5F5F5" strokeWidth="8" strokeLinecap="round" stroke-linejoin="round" d="
            M525.211,312c0-31.665,17.052-31.665,17.052-63.331c0-31.668-17.052-31.668-17.052-63.335s17.052-31.667,17.052-63.334"/>
      </g>
    )
  }
});

module.exports = smoke;
