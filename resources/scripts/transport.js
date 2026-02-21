const KEY = "data"
let startx = document.getElementById("startx");
let startz = document.getElementById("startz");
let finalx = document.getElementById("finalx");
let finalz = document.getElementById("finalz");
let transport = document.getElementById("transport");
let traveltime = document.getElementById("traveltime");
let distanceoutput = document.getElementById("distance")

// to find travel time, distance must be divided by speed
function calculate(xstart, zstart, xfinal, zfinal) {
    // using the distance formula for a 2d space
    let vals = [xstart, zstart, xfinal, zfinal];
    let distance = Math.sqrt(((xfinal-xstart)**2) + ((zfinal-zstart)**2));
    distanceoutput.value = distance.toFixed(1);
    console.log(distance)
    if (transport.value == "walk") {
        traveltime.value = (distance / 4.317).toFixed(1); 
        vals.push(traveltime.value);
    }
    else if (transport.value == "sprint") {
        traveltime.value = (distance / 5.612).toFixed(1);
        vals.push(traveltime.value);
    }
    else if (transport.value == "horse") {
        traveltime.value = (distance / 9.7).toFixed(1);
        vals.push(traveltime.value);
    }
    else if (transport.value == "boat") {
        traveltime.value = (distance / 8).toFixed(1);
        vals.push(traveltime.value);
    }
    else if (transport.value == "elytra") {
        traveltime.value = (distance / 33).toFixed(1);
        vals.push(traveltime.value);
    }
    else if (transport.value = "blue") {
        traveltime.value = (distance / 72.7).toFixed(1);
        vals.push(traveltime.value);
    }

    return vals;
}


function check() {
    if ((startx.value != "") && (startz.value != "") && (finalx.value !="") && (finalz.value != "") && (transport.value != "")) {
        console.log(transport.value);
        let data = calculate(Number(startx.value), Number(startz.value), Number(finalx.value), Number(finalz.value));
        add_history(data);
    }
}

// flow:
// when calculation goes through, record data in a localstorage object
// show all info in a collapsable table

function load_history() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}
function add_history(values){
    // wherein values is [xstart,zstart,xfinal,zfinal,traveltime.value]
    // console.log(values);
    const obj = {};
    obj[xstart] = values[0];
    obj[zstart] = values[1];
    obj[xfinal] = values[2];
    obj[zfinal] = values[3];
    obj[traveltime] = values[4];
    const history = load_history();
    history.push(obj);
    save_history(history);
}

function save_history(data) {
    localStorage.setItem(KEY, JSON.stringify(data))
}