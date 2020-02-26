function random(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;	
}
for (var i=0; i<150; i++) {
	document.getElementsByTagName('body')[0].innerHTML += '<i class="snow" style="left: '+random(0, 1750)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>';
}
