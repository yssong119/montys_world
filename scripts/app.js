$(document).ready(function() {
	"use strict";

	$("#menu-open").click(function() {
		$("#main-menu-container").toggleClass("show");
	});

	$("#menu-close").click(function() {
		$("#main-menu-container").toggleClass("show");
	});

	$("#main-nav a").click(function() {
		let aid = $(this).attr("href");
		$('html, body').animate({scrollTop: $(aid).offset().top},'slow');
		$("#main-menu-container").toggleClass("show");
	});

	$(window).scroll(function() {
		if($(this).scrollTop() < 150) {
			$(".scroll-icon-container").fadeIn();
		}
		else {
			$(".scroll-icon-container").fadeOut();
		}
	});

	// jQuery plugin for snap scrolling.
	// https://www.jqueryscript.net/animation/Snap-To-Section-SnapScroll.html
	$("header, #main-content > *").SnapScroll();
	// var snapScroll = $("header, #main-content > *").SnapScroll({
	// 	hashes:true
	// });
	// console.log(snapScroll);

	// Listen for active element change
	// You could listen globally like $(document)
	// $("header").on(snapScroll.eventChangeActive, function(evt, newActive){
	// 	console.log(evt, newActive);
	// });

	// Listen for visible element change
	// You could listen on a specific element like $("header")
	// $(document).on(snapScroll.eventChangeVisible, function(evt, visibleList){
	// 	console.log(evt, visibleList.data);
	// });
});