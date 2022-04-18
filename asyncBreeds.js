/* const fs = require("fs");

const breedDetailsFromFile = function(breed) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    
    if (!error) return data;
  });
}

const bombay = breedDetailsFromFile("Bombay");
console.log("Return value: ", bombay); */

/* Updated code. breedDetailsFromFile takes in and uses a callback.*/

const fs = require("fs");

const breedDetailsFromFile = function (breed, callbackFunction) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) callbackFunction(data);
  });
};

const callbackFunction = breed => {
  console.log("Return Value: ", breed);
};

breedDetailsFromFile("Bombay", callbackFunction);

/* Solution from Compass:
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed); */