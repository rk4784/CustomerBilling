$(".button-collapse").sideNav();
$(document).ready(function () {
	$('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('.slider').slider({
		full_width: true
		, indicators: false
	});
	console.log("document loaded");
});
$(window).load(function () {
	console.log("window loaded");
});
var app = angular.module("mainApp", ['ngRoute']);
app.controller('loginController', function ($scope) {
	$scope.loginButtonClicked = function () {
		window.location.href = "/Yogesh/Uploadfile.php";
	}
});
window.onerror = function (msg, url, linenumber) {
	alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
	return true;
}