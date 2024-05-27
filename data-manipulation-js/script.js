// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  
//   Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(`are all numbers divisible by 5?:${divisibleByFive}`);
// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(`is the first number larger than the last number?:${isFirstLargerThanLast}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
const SubtractFirstFromSecond = n2 - n1;
console.log(`Subtract First number From Second: ${n2} - ${n1} = ${SubtractFirstFromSecond}`);
// Multiply the result by the third number.
const resultMultipliedByThird = SubtractFirstFromSecond * n3;
console.log(`result multiplied by third number is :${SubtractFirstFromSecond} * ${n3} = ${resultMultipliedByThird}`);
// Find the remainder of dividing the result by the fourth number.
const dividingResultByFourth = resultMultipliedByThird / n4;
console.log(`dividing Result By Fourth number: ${resultMultipliedByThird} /${n4} = ${dividingResultByFourth}`);
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const allUnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(` are all numbers Under Or Equal 25 :${allUnderOrEqual25}`);
console.log("*********************************");
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.
const totalDistance = 1500; 
const fuelBudget = 175; 
const fuelCostPerGallon = 3; 
const milesPerHour = [55, 60, 75];
const fuelEfficiency = {
    55: 30,
    60: 28,
    75: 23
}

//calculating gallons needed for each speed
//at 55 MPH
const gallonsForTrip55 = totalDistance / fuelEfficiency[55];
console.log(`gallons needed for the trip at 55 mpr is :${gallonsForTrip55}`);
//at 50 MPH
const gallonsForTrip60 = totalDistance / fuelEfficiency[60];
console.log(`gallons needed for the trip at 60 mpr is :${gallonsForTrip60}`);
//at 75 MPH
const gallonsForTrip75 = totalDistance / fuelEfficiency[75];
console.log(`gallons needed for the trip at 55 mpr is :${gallonsForTrip75}`);
//average gallons needed for the trip
const averageGallonsNeededForTrip = (gallonsForTrip55 + gallonsForTrip60 + gallonsForTrip75) / 3;
console.log(`average Gallons Needed For Trip is :${averageGallonsNeededForTrip}`);

// Will your budget be enough to cover the fuel expense?

if (averageGallonsNeededForTrip * fuelCostPerGallon <= fuelBudget) {
    console.log(`yes my fuelbadget is enough for the trip`)
} else {
     console.log(`no my fuelbadget is not enough for the trip`)
}
// calculating how many hours will the trip take at each speed
// at 55 mph
const totalTripHoursAt55 = totalDistance / 55;
console.log(`total Trip Hours At 55 mpr is :${totalTripHoursAt55}`);
//at 60 mph
const totalTripHoursAt60 = totalDistance / 60;
console.log(`total Trip Hours At 60 mpr is :${totalTripHoursAt60}`);
//at 75 mph
const totalTripHoursAt75 = totalDistance / 75;
console.log(`total Trip Hours At 75 mpr is :${totalTripHoursAt75}`);








