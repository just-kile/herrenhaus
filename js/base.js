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
		},
		65:{//a
			duration:"0.5s",
			className:"flipLeft",
			timing:"linear"
		},
		68:{//d
			duration:"0.5s",
			className:"explode",
			timing:"linear"
		},
		87:{//w
			duration:"0.5s",
			className:"flipTop",
			timing:"linear"
		},
		83:{//s
			duration:"0.5s",
			className:"flipBottom",
			timing:"linear"
		},
		69:{//e
			duration:"0.5s",
			className:"saturate",
			timing:"linear"
		}
}



$(function(){
	var logo = $(".logo");
	$(document).on("keydown",function(e){
		
		var animation = keyAnimMap[e.keyCode]
		if(animation){
			e.preventDefault();
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