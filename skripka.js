'use strict'

// var a=prompt("Как зовут тебя, первый игрок?");
// var b=prompt("Как зовут твоего соперника? (подсказка: лузер)");



function Pers(name, image,n){
    this.name=name;
    this.step=0;
    this.image=image;
    this.position=1;
    return this
}



var pers1=new Pers();
var pers2=new Pers();

var kub=[], kub2=[];
for(var i=1; i<=6; i++){
    kub[i]=i, 
    kub2[i]=-7+i
};
kub.shift(), kub2.shift(), kub2.reverse();
var buk=[];
buk[0]=kub;
buk[1]=kub2;

function kubizm(){
    var kubik1=buk[0][Math.floor(Math.random()*kub.length)]
    return kubik1; 
};

function kubizm2(n){
    var kubik1=buk[n][Math.floor(Math.random()*kub.length)]
    return kubik1;
}


$("#persicon").css({             //Позиция(базовая) персонажа
    position: "absolute",     
    left: 561,
    top: 620
 });
 
var gols=0
var goli=0

var knopka = document.getElementById("btn");
knopka.offset=function(){
    alert("Uraaaaaaa!")
}





var img = document.createElement("img");
img.src = "person_opacity.png";


var iconka = document.getElementById("persicon");
iconka.onmouseover=function(){
    iconka.src = "person_opacity.png";
}
iconka.onmouseout=function(){
    iconka.src = "person.png";
}

var stepan=document.createTextNode("DSSSSSSSSSSSSSSSSSSSSSSSS")




   
    
$('#btn').click(function(){
    var daman=$("#persicon").offset().left
    var daman2=$("#persicon").offset().top
    if(daman>60){
         $("#persicon").animate({ marginLeft: '-=57', marginTop: 0});
            }else if(daman2>60){
                $("#persicon").animate({ marginTop: "-=57"});
            }else{
                $("#persicon").animate({ marginLeft: '+=57'});
            }

         console.log(daman,daman2)    
});

