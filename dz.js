"use strict";
var vava=document.getElementById("title");
vava.innerHTML="Мы продаем только подлинную технику Apple";
vava.style.backgroundColor="blue"
var caca=document.getElementsByClassName("adv");
caca[0].remove();
var xsx=document.getElementsByClassName("menu-item");

var menu=document.querySelector(".menu")
console.log(menu)
menu.insertBefore(xsx[2],xsx[1])
var appla=prompt("как вам эпл?")
var prooomt=document.getElementById("prompt")
prooomt.append(appla)
