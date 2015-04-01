propaganda = ["clinton.gif", "waving.gif"]//, "favicon.gif"] //, " "waving-flag.gif", reagan.jpg", "portrait.jpg"];
colors = ["red", "white", "navy"];
words = "Ronald Reagan, American Cheese, America, McDonald's, Bald Eagles, Stephen Colbert, Guns, Second Amendment, Civil Rights,"+
"Country Music, Jazz, Not Rob Ford, George Washington, 2-Ply Toilet Paper, Obesity, Kobe Bryant, Kanye West, Bernie Madoff, The Star Spangled Banner,"+
"Freedom, Liberty, Values, Monogamy, Prison-Industrial Complex, Mountains, Plains, Railroads,Capitalism,Nature,National Parks,"+
"Theodore Roosevelt,Independence,Independence Day,Cowboys,Bootstraps,John Wayne,Ellis Island,The Grand Canyon,Football,World Series Champions,"+
"John Deere,Nascar,Donuts,Norman Rockwell,Thanksgiving,Jesus,Army,Navy,Marines,Air Force,ShamWOW!,The Kardashians,Times Square,Uncle Sam,"+
"Invading other countries for their oil,Route 66,Yellowstone,Hollywood,Religious Freedom,The First Amendment,Free speech,Right to a Trial by Jury,"+
"Cadillac,Johnny Cash,The Statue of Liberty,Paul Revere,John Adams,Mount Rushmore,Coca Cola,Baseball,Apple Pie,The Constitution,"+
"The Moon,America,Taylor Swift,Turkeys,Benjamin Franklin,military,Democracy,Trail of Tears,opportunity,immigrants,checks and balances,"+
"bicameral congress,High Fructose Corn Syrup,student loan debt,Twain,Poe,E Pluribus Unum,Oak Tree,Private ownership of property,"+
"The Bill of Rights";
words = words.split(',')
var mqdiv = document.createElement('span');
mqdiv.id = 'thisisme';
for(j=words.length;j>=0;j--){
	k = Math.floor(Math.random()*j);
	var usaspan = document.createElement('span');
	var wrd = words[k];
	if(wrd){
		usaspan.innerHTML = wrd.toUpperCase();
		usaspan.style.color = colors[j%3];
	}
	mqdiv.appendChild(usaspan);
	words.splice(k,1);
}
//mqdiv = document.createTextNode("what");
//console.log(mqdiv.children.length);

lines = ["Open My Eyes", "Take Me Wonder by Wonder", "Show Me a Whole New World", "Unbelievable Sights"]
lyriccounter = 0;

function pickElement(lst){
	picked = lst[Math.floor(Math.random()*lst.length)];
	return(picked);
}

function changeBackground(){
	document.body.style.backgroundImage = "url(propaganda/" + pickElement(propaganda) + ")";
}

function dothings(el){
	if(Math.random() < 0.1){
		if(Math.random() < 0.05){
			document.body.style.backgroundImage="url(propaganda/favicon.gif";
		}else{
			document.body.style.backgroundImage="url(propaganda/reagan.jpg";
		}
	}else{
		changeBackground();
	}
	lyriccounter++;
	el.innerHTML = lines[lyriccounter%lines.length];
}

function tspin(el){
	if(el.className == "spinning"){
		el.className = "stopspin";
	} else {
		el.className = "spinning";
	}
}

changeBackground();

count = 0;
window.onload = function(){
	document.getElementById('mymarquee').appendChild(mqdiv);
	setInterval(function(){
		cycle = document.getElementById("cycle")
		for(var i=0;i<cycle.children.length;i++){
			cycle.children[i].style.color = colors[(i+count)% cycle.children.length]
		}
		count = (count + 1)% cycle.children.length;
	}, 1000);
}
