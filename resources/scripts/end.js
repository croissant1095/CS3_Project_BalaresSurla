let x1 = document.getElementById("x1");
let z1 = document.getElementById("z1");
let a1 = document.getElementById("a1");
let x2 = document.getElementById("x2");
let z2 = document.getElementById("z2");
let a2 = document.getElementById("a2");
let xport = document.getElementById("xport");
let zport = document.getElementById("zport");

// verifier
function check(val) {
    const v = val.value.trim();
    return v !== "" && !Number.isNaN(Number(v));
}

function checkall() {
    const go = check(x1) &&
         check(z1) &&
         check(a1) &&
         check(x2) &&
         check(z2) &&
         check(a2);
    if (go) {
        find(Number(x1.value), 
             Number(z1.value), 
             Number(a1.value), 
             Number(x2.value), 
             Number(z2.value), 
             Number(a2.value)) // can never be too safe, right?
    }
    else {
        alert("Inputs are incomplete or invalid.")
    }
}

// actual meat
function find(x1, z1, a1, x2, z2, a2) {
    // convert absolute angles to radians
    const r1 = a1*Math.PI/180; 
    const r2 = a2*Math.PI/180;
    
    // define vector lines
    // increasing angles turn counterclockwise irl but clockwise in mc; negate sine

    const dx1 = -Math.sin(r1);
    const dz1 = Math.cos(r1);
    const dx2 = -Math.sin(r2);
    const dz2 = Math.cos(r2);

    // calculate determinant to solve for intersection

    const det = dx1*dz2 - dx2*dz1;

    // accuracy becomes extremely little if throws are near-parallel, warn user
    
    if (Math.abs(det)<1e-8) {
        alert("Warning: Throws are nearly parallel. Please redo.");
        return;
    }

    // otherwise... (this math really sucks)

    const t = ((x2 - x1) * dz2 - (z2 - z1) * dx2) / det; // intersection parameter

    const xp = x1 + t * dx1;
    const zp = z1 + t * dz1;

    xport.value = xp.toFixed(1);
    zport.value = zp.toFixed(1);

} 
