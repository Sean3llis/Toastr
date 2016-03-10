'use strict';

import React from 'react';

const Handle = ({side, handleClick}) => {
  function _onClick(){
    handleClick(side);
  }
  var leftHandle = (
    <g id="HandleLeft" onClick={_onClick} >
      <polygon fill="#333333" points="136.975,739.122 105.544,739.122 44.032,730.596 106.477,725.661 		"/>
      <polygon fill="#686868" points="73.076,731.501 43.827,731.501 43.827,706.729 110.835,706.729 		"/>
      <polygon fill="#E0E0E0" points="139.104,739.497 72.41,730.782 72.41,706.729 139.104,706.729 		"/>
    </g>
  );

  var rightHandle = (
  	<g id="HandleRight" onClick={_onClick} >
			<polygon fill="#333333" points="212.488,739.122 181.059,739.122 119.546,730.573 181.993,725.653 		"/>
			<polygon fill="#686868" points="148.59,731.501 120.048,731.501 120.048,706.729 186.349,706.729 		"/>
			<polygon fill="#E0E0E0" points="215.324,739.454 148.631,730.739 148.631,706.729 215.324,706.729 		"/>
  	</g>
  );

  var handle = ( side === 'left' ) ? leftHandle : rightHandle;


  return (
    <g>{handle}</g>
  );
}



export default Handle;
