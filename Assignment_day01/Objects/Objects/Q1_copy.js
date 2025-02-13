// 1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“? 
// { 
// name:”Harry Potter”, 
// age: 12, 
// address: { 
// details: [“4”, “Privet Drive”], 
// area:”Little Whinging”, 
// city: “Surrey”, 
// state: “England” 
// } 
// } 

const person = { 
    name: "Harry Potter", 
    age: 12, 
    address: { 
        details: ["4", "Privet Drive"], 
        area: "Little Whinging", 
        city: "Surrey", 
        state: "England" 
    } 
};

// Create a new copy with an updated value
const updatedPerson = {
    ...person,
    address: {
        ...person.address,
        details: [...person.address.details] // Copy the array
    }
};

updatedPerson.address.details[0] = "5"; // Modify the copied array

console.log(person);        // Original object remains unchanged
console.log(updatedPerson); // Updated object with modified value


