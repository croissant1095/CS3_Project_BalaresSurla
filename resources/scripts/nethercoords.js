let overworldx = document.getElementById("overworldx");
let overworldz = document.getElementById("overworldz");
let netherx = document.getElementById("netherx");
let netherz = document.getElementById("netherz");

function calculateOverworldX(x) {
    overworldx.value = x * 8;
}
function calculateOverworldZ(z) {
    overworldz.value = z*8;
}
function calculateNetherX(x) {
    netherx.value = x / 8;
}

function calculateNetherZ(z) {
    netherz.value = z / 8;
}

function checkOverworldX() {
    let xvalue = overworldx.value;
    if ((xvalue != "") && !isNaN(Number(xvalue))) {
        calculateNetherX(Number(xvalue));
    }
}

function checkOverworldZ() {
    let zvalue = overworldz.value;
    if ((zvalue != "") && !isNaN(Number(zvalue))) {
        calculateNetherZ(zvalue);
    }
}

function checkNetherX() {
    let xvalue2 = netherx.value;
    if ((xvalue2 != "") && !isNaN(Number(xvalue2))) {
        calculateOverworldX(xvalue2);
    }
}

function checkNetherZ() {
    let zvalue2 = netherz.value;
    if ((zvalue2 != "") && !isNaN(Number(zvalue2))) {
        calculateOverworldZ(zvalue2);
    }
}

document.addEventListener("DOMContentLoaded", (event)=> {
    overworldx.addEventListener('input', checkOverworldX);
    overworldz.addEventListener('input', checkOverworldZ);
    netherx.addEventListener('input', checkNetherX);
    netherz.addEventListener('input', checkNetherZ);

})
