/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//function deceration//
function calcNewVel(velocity, acceleration, time) {
  if (typeof velocity !== "number" || typeof acceleration !== "number" || typeof time !== "number") {
    throw new Error("Incorrect input: velocity, acceleration andd time should be a number");
    
  }
  return velocity + (acceleration * time);
}
// Pick up an error with how the function below is called and make it robust to such errors
try {
  const newDistance = initialDistance + (velocity * (time / 3600)); // Calculate new distance (convert time to hours)
  const remainingFuelAfterBurn = remainingFuel - (fuelBurnRate * time); // Calculate remaining fuel
  const newVelocity = calcNewVel(velocity, acceleration, time); // Calculate new velocity

  if (remainingFuelAfterBurn < 0) throw new Error("Fuel exhausted.");

  console.log(`New Velocity: ${Math.round(newVelocity)} km/h`);
  console.log(`New Distance: ${Math.round(newDistance)} km`);
  console.log(`Remaining Fuel: ${Math.round(remainingFuelAfterBurn)} kg`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}






