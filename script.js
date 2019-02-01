"use string";
var kubik=[];
var pers=0;
for (var i = 0; i <= 12; i++) {
	kubik[i]=-6+i;
}

while(pers<20){
	if(pers<0){
		pers=0;
		document.write("_0_сектор. ");
	}else if(pers==6){
		document.write("kabak")
	}
	
	else{
		var kubNumber=Math.floor(Math.random()*12);
		pers+=kubik[kubNumber];
		document.write("Ты сейчас на этой клетке - "+ pers+"<br>");
		
	}
}
var zz=$("#koma");