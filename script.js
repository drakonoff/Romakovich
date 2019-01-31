"use string";
var kubik=[];
var pers=0;
for (var i = 0; i <= 12; i++) {
	kubik[i]=-6+i;
}

while(pers<20){
	if(pers<0){
		pers=0;
		document.write("_0_сектор. ")
	} else{
		var kubNumber=Math.floor(Math.random()*12);
		pers+=kubik[kubNumber];
		document.write("Ты сейчас на этой клетке - "+ pers+"<br>");
		
	}
}
var vvodite=prompt("Какой лучше?")
var h=$("#klaus")
h.text(vvodite)
h.fadeout(3000)
$("h1").fadeOut(3000);
$("body").append("<p>Хэппи энд, поздравляем</p>")