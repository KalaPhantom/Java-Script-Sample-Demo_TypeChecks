
//-- =====================================================================
/**
 * Description: Structural Typing
 * 
 * 
 * 
 * 
 */
//-- =====================================================================


 // # Code runner |         node Demo\Nominals.js


//====================================================================>
//# Structural-typing demo

/**
 *  Compatibility is based on the structure, not in types
 */


// -- Example 1  -- Using the same function on two different object types

function greet(person) {
  console.log("Hello " + person.name);
}

const obj1 = { name: "Kilamanjaro" };            // Object with 1 element
const obj2 = { name: "Foxtrot", age: 20 };       // Object with 2 element

greet(obj1);          // Works
greet(obj2);          // will also work despite being a different type


// ====================================================================>

// -- Example 2 -- assigning object values on different object type
let user = { name: "Alice" };
let employee = { name: "Alice", salary: 1000 };

user = employee; 

