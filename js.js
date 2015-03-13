propaganda = ["clinton.gif",  "waving.gif", "waving-flag.gif"] //, "reagan.jpg", "portrait.jpg"];
function pickElement(lst){
	picked = lst[Math.floor(Math.random()*lst.length)];
	return(picked);
}

function changeBackground(){
	document.body.style.backgroundImage = "url(propaganda/" + pickElement(propaganda) + ")";
}

changeBackground();

colors = ["red", "white", "navy"];
count = 0;
window.onload = function(){
	setInterval(function(){
		cycle = document.getElementById("cycle")
		for(var i=0;i<cycle.children.length;i++){
			cycle.children[i].style.color = colors[(i+count)% cycle.children.length]
		}
		count = (count + 1)% cycle.children.length;
	}, 1000);
}