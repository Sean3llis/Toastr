import React, { Component } from 'react';


class Notifier extends Component {
  constructor(props) {
    super(props);
    this.buildNotis = this.buildNotis.bind(this);
  }

  buildNotis() {
    return this.props.notis.map((noti, i) => {
      return (
        <div className="noti" key={i} >{noti}</div>
      )
    })
  }


  render() {
    return (
      <div id="notifier">
        <div id="inner">
          {this.buildNotis()}
        </div>
      </div>
    );
  }
}

export default Notifier
