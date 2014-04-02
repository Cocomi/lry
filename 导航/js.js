$(document).ready(function(){
	$(".nav li").hover(
		//mouseover事件
		function(){
			$(".nav_box").removeClass("none").addClass("block");
		},
		//mouseout事件
		function(){
			$(".nav_box").removeClass("block").addClass("none");
		}
	);
	
	$(".nav_box li").hover(
		//mouseover事件
		function(){
			$(".nav_box3").removeClass("none").addClass("block");
		},
		//mouseout事件
		function(){
			$(".nav_box3").removeClass("block").addClass("none");
		}
	);
});