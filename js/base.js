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



var H = H||{};
var interval = null;
H.startRandomAnimation = function(){
	var keys= Object.keys(keyAnimMap);
	var keyNum = Math.round((Math.random()*100))%keys.length;
	var animation = keyAnimMap[keys[keyNum]];
	H.animate(animation);
	interval = setTimeout(H.startRandomAnimation,parseFloat(animation.duration)*1000);
}
H.stopRandomAnimation = function(){
	if(interval){
		clearTimeout(interval);
		interval = null;
	}
}
H.animate = function(animation){
	console.log("Animation "+animation.className+" found")
	H.logo.css("-webkit-animation","");
	setTimeout(function(){
		H.logo.css("-webkit-animation",[animation.className,animation.duration,animation.timing].join(" "));
		console.log("Animation "+animation.className+" executed")
	},0);
}
H.reset = function(){
	H.logo.css("-webkit-animation","");
	console.log("Remove webkit animation");
}
$(function(){
	H.logo = $(".logo");
	$(document).on("keydown",function(e){
		
		var animation = keyAnimMap[e.keyCode]
		var cAnimation = keyCustomAnimMap[e.keyCode]
		if(animation){
			e.preventDefault();
			H.animate(animation)
		}else if(cAnimation){
			cAnimation.isRunning?cAnimation.stop():cAnimation.start();
			cAnimation.isRunning = !cAnimation.isRunning;
		}else{
			console.log("Didnt found animation!")
		}
	});
	H.logo.on("webkitAnimationEnd",H.reset);
	
	
});
var keyCustomAnimMap = {
		13:{
			start:H.startRandomAnimation,
			stop:H.stopRandomAnimation,
			isRunning:false
		}
}