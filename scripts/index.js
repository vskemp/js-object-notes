let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user ={         // an object
    name: "John",   // by key "name" store value "john"
    age: 30         // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// Creates alert pop up windows with the values being called

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

// To remove a property, we can use delete operator:

delete user.age;

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


//The last property in the list may end with a comma:

let user = {
    name: "John",
    age: 30,
}

// For multiword properties, the dot access doesn’t work:

 // this would give a syntax error
user.likes birds = true // <---DONT DO THAT


// There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

let user = {
    name: "John",
    age: 30
};
let key = prompt("What do you want to know about the user?", "name");
// access sby variable
alert(user[key]); // John (if enter "name")

//The dot notation cannot be used in a similar way:

let user = {
    name: "John",
    age: 30
};

let key = "name";
alert( user.key ) // undefined
