"use strict"

var react = require('react');

(function(w){
	var Toastr = w.Toastr = Toastr || {};
	Toastr.SVG = {};
	Toastr.init = function(){
		console.log(document.getElementById('ToastRight'));
		Velocity(document.getElementById('ToastRight'), {
			transformX: "-100px"
		});
	}
})(window)