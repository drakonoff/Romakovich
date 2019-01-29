"use strict";

var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
    };

var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];


console.log(pickRandomWord(randomWords))
