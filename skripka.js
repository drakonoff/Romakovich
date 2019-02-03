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


$("#persicon").css({
    position: "absolute",
    left: 480,
    top: 250
 });
 
/*
var gols=0
var goli=0
$("#persicon").click(function () {
       $(this).offset(function(i, coord){
            var proizv=Math.floor(Math.random()*2)
            var chex=53.5*kubizm2(proizv)
            var  newCoord = {};
            newCoord.left=478;
            newCoord.left = coord.left + chex;
            if(newCoord.left<=100){
                newCoord.left==100,
                goli++
                alert("Гоооол! Шотландцы: Ирландцы. " + gols + ":" + goli)
                newCoord.left=478
                $("#scet").text(gols +":" + goli)
            } else if(newCoord.left>=850){
                newCoord.left==850,
                gols++,
                alert("Гоооол! Шотландцы: Ирландцы. " + gols + ":" + goli)
                newCoord.left=478,
                $("#scet").text(gols +":" + goli)
            }
            return newCoord;
       });
    });
$("#scet").text(gols +":" + goli)
$("#scet").css({
    position: "absolute",
    left: 494,
    top: -18,
    'color':'#15b300',
    'fontSize': 40
 });
 */

$("#persicon").click(function(){
    $("#persicon").animate(function(index, value){
        var newvalue={};
        newvalue=value.left*50
        return newvalue
    });
});
    /*var proizv=Math.floor(Math.random()*2)
    $("#persicon").animate({"left": 90}, "slow");
     
  });*/

  function dv(){
      var ds=1+1;
      alert(ds)
  }
  (dv())