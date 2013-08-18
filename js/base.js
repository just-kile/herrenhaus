var keyAnimMap = {
		32:{//space
			duration:"0.5s",
			className:"pulse",
			timing:"ease-out"
		},
		81:{//q
			duration:"0.5s",
			className:"blurPulse",
			timing:"ease-out"
		}
}



$(function(){
	var logo = $(".logo");
	$(document).on("keydown",function(e){
		e.preventDefault();
		var animation = keyAnimMap[e.keyCode]
		if(animation){
			console.log("Animation "+animation.className+" found")
			logo.css("-webkit-animation","");
			setTimeout(function(){
				logo.css("-webkit-animation",[animation.className,animation.duration,animation.timing].join(" "));
				console.log("Animation "+animation.className+" executed")
			},0);
		}else{
			console.log("Didnt found animation!")
		}
	});
	logo.on("webkitAnimationEnd",function(){
		logo.css("-webkit-animation","");
		console.log("Remove webkit animation");
	});
	
	
});