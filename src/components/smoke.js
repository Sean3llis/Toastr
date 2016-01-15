"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var smoke = React.createClass({
  getDefaultProps: function(){
    return {
      dashArray: "200",
      dashOffset: "200.5"
    }
  },

  componentWillMount: function(){
    Velocity.RegisterEffect('smoke:float', {
			defaultDuration: 2200,
			calls: [
				[ { strokeDashoffset: "-=200.5", opacity: 1 }, 1, { stagger: 200, easing: 'swing'}],
				[ { opacity: 0 }, 0.2, { stagger: 200, easing: 'swing'}],
			]
		});
  },

  componentDidUpdate: function(){
    var smoke = ReactDOM.findDOMNode(this);
    var wisps = smoke.childNodes;
    console.log(this.props.status);
    if(this.props.status === 'toasting'){
      Velocity(wisps, 'smoke:float');
    } else {
      Velocity(wisps, {opacity: 0});
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
