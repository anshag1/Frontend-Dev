"use strict";
// Q5 Hoisting Lab Fix
let score=50;
function announce(){ console.log("Game started"); }
let status="ready";
function startGame(){ console.log(status); }
announce();
startGame();
