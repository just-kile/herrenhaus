var keyAnimMap = {
		32:{//space
			duration:"0.5s",
			className:"h_pulse",
			timing:"ease-out"
		},
		81:{//q
			duration:"0.5s",
			className:"h_blurPulse",
			timing:"ease-out"
		},
		65:{//a
			duration:"0.5s",
			className:"h_flipLeft",
			timing:"linear"
		},
		68:{//d
			duration:"0.5s",
			className:"h_explode",
			timing:"linear"
		},
		87:{//w
			duration:"0.5s",
			className:"h_flipTop",
			timing:"linear"
		},
		83:{//s
			duration:"0.5s",
			className:"h_flipBottom",
			timing:"linear"
		},
		69:{//e
			duration:"0.5s",
			className:"h_saturate",
			timing:"linear"
		},
		82:{//r
			duration:"1s",
			className:"flip",
			timing:"linear"
		},
		70:{//f
			duration:"0.5s",
			className:"swing",
			timing:"linear"
		},
		88:{//x
			duration:"0.5s",
			className:"lightSpeedIn",
			timing:"ease-out"
		},
		89:{//y
			duration:"0.5s",
			className:"flash",
			timing:"ease-out"
		},
		
		67:{//c
			duration:"1s",
			className:"tada",
			timing:"ease-out"
		},
		49:{//1
			duration:"0.5s",
			className:"rollIn",
			timing:"ease-out"
		},		50:{//2
			duration:"1s",
			className:"hinge",
			timing:"ease-out"
		},
		51:{//3
			duration:"1s",
			className:"rotateInDownRight",
			timing:"ease-out"
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