console.log("Hi guys! Welcome to my page!");
console.log("My GitHub repo: https://github.com/DailynR/Full-Stack-Class/tree/pa01-part2);

// 1. String (text in quotes)
let name = "Dailyn";

// 2. Number
let age = 22;

// 3. Boolean
let isWonderful = true;

// 4. Array
let favoriteFoods = ["Pasta", "Chipotle", "Tacos"];

// 5. Object - used to group related data inside { }
let person = {
  firstName: "Dailyn",
  lastName: "Rollins",
  hobby: "nails"
};

// 6. Null - intentionally empty
let middleName = null;

// 1. Arithmetic
let total = 25 + 75;

// 2. Strict comparison
let checkTotal = (total === 100);

// 3. Logical 
let truthCheck = (checkTotal === true && total < 350);

// If/else statement / pass/fail feedback
 
  //getting password from user
document.getElementById("checkPassword").addEventListener("click", function() {
  let password = document.getElementById("password").value;
  let status = document.getElementById("status");

  if(password.length >= 5) {
    status.textContent = "Password approved!";
    status.style.color = "green";
} else {
   status.textContent = "Password too short. Must be at least 5 characters.";
   status.style.color = "red";
  }
};
