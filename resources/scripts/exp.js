let levelend = document.getElementById("levelend");
let levelstart = document.getElementById("levelstart");
let expgross = document.getElementById("expgross");
let expbottles = document.getElementById("expbottles");
let expzombies = document.getElementById("expzombies");


function calculate(levelstart, levelend) {
    let expsum = 0;

    // ensures invalid inputs are handled
    if ((levelstart > levelend) || (levelstart <= 0)) {
        return;
    }
    else {
        // starts summation from the starting level
        for (let i = levelstart; i < levelend; i++) {
            // each level from 1-14 has 17xp
            if (i <= 14) {
                expsum = expsum + 17;
            }
            // applies special formulas for the succeeding level ranges
            else if ((i >= 15) && (i <= 29)) {
                expsum = expsum + (17 + ((i-15)*3));
            }
            else {
                expsum = expsum + (62 + ((i-30)*7));
            }
        }

        // encodes the values
        expgross.value = expsum;
        expbottles.value = expsum / 7;
        expzombies.value = expsum / 5;
    }
    

    
}

function check() {
    if (levelend.value != "" && levelstart.value != "") {
        calculate(Number(levelstart.value), Number(levelend.value))
    }
}
