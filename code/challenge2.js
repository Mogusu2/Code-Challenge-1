function checkSpeed(speed) {
    const speedLimit = 70;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5); // 1 point per every 5 km/h over limit
  
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
  
const carSpeed = parseInt(prompt("Enter car speed (km/h): "));
  
if (isNaN(carSpeed)) {
    console.log("Invalid input. Please enter a number.");
} else {
    checkSpeed(carSpeed);
}
