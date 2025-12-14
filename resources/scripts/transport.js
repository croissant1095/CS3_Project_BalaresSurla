let startx = document.getElementById("startx");
let startz = document.getElementById("startz");
let finalx = document.getElementById("finalx");
let finalz = document.getElementById("finalz");
let transport = document.getElementById("transport");
let traveltime = document.getElementById("traveltime");

// to find travel time, distance must be divided by speed
function calculate(xstart, zstart, xfinal, zfinal) {
    // using the distance formula for a 2d space
    let distance = Math.sqrt(((xfinal-xstart)**2) + ((zfinal-zstart)**2));
    console.log(distance)
    if (transport.value == "walk") {
        traveltime.value = distance / 4.317; 
    }
    else if (transport.value == "sprint") {
        traveltime.value = distance / 5.612;
    }
    else if (transport.value == "horse") {
        traveltime.value = distance / 9.7;
    }
    else if (transport.value == "boat") {
        traveltime.value = distance / 8;
    }
    else if (transport.value == "elytra") {
        traveltime.value = distance / 33;
    }
    else if (transport.value = "blue") {
        traveltime.value = distance / 72.7;
    }
}


function check() {
    if ((startx.value != "") && (startz.value != "") && (finalx.value !="") && (finalz.value != "") && (transport.value != "")) {
        console.log(transport.value);
        calculate(Number(startx.value), Number(startz.value), Number(finalx.value), Number(finalz.value));
    }
}