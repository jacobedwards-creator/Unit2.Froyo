// Prompt the user to enter a list of flavors seperated by commas
let userInput = prompt("Enter Your Froyo flavors seperated by commas(e.g., vanilla, strawberry, coffee):");
//split the list into an array of flavors and trim whitespace
let flavorsarray = userInput.split(',').map(flavor => flavor.trim());
//create an object to count the occurrences of each flavor
let flavorcount = {};
//count each flavor
flavorsarray.forEach(flavor=>{
    if (flavorcount[flavor]) {
        flavorcount[flavor]++;
    }
    else{flavorcount[flavor]=1;}
});
//log the results of the function in a table in the console
console.table(flavorcount);
