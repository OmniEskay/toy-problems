function checkSpeed(speed) {
    if (speed < 70) {
        console.log("Ok");
        return;
    }
    
    let points = Math.floor((speed - 70) / 5);
    
    if (points > 12) {
        console.log("License suspended");
    } else {
        console.log("Points: " + points);
    }
}


checkSpeed(80);  
checkSpeed(135); 
