console.log("Hi guys! Welcome to my page!");
console.log("My GitHub repo: https://github.com/DailynR/Full-Stack-Class/tree/pa01-part2");

// 1. String (text in quotes)
let name = "Dailyn";

// 2. Number
let age = 22;

// 3. Boolean
let isWonderful = true;

// 4. Array
let favoriteFoods = ["Pasta", "Chipotle", "Tacos"];

let foodList = document.getElementById("foodList");

favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;
  foodList.appendChild(li);
});

// 5. Object - used to group related data inside { }
let person = {
  firstName: "Dailyn",
  lastName: "Rollins",
  hobby: "nails"
};

// 6. Null - intentionally empty
let middleName = null;
let nickname;

// 1. Arithmetic
let total = 25 + 75;

// 2. Strict comparison
let checkTotal = (total === 100);

// 3. Logical 
let truthCheck = (checkTotal === true && total < 350);
let apiData = [];

// If/else statement / pass/fail feedback
 
  //getting password from user
document.getElementById("checkPassword").addEventListener("click", function (event) {
  event.preventDefault();
  let password = document.getElementById("password").value;
  let status = document.getElementById("status");

document.getElementById("filterCategory").addEventListener("input", function () {
  if(password.length >= 5) {
    status.textContent = "Password approved!";
    status.style.color = "green";
} else {
   status.textContent = "Password too short. Must be at least 5 characters.";
   status.style.color = "red";
  }
});

document.getElementById("password").addEventListener("input", function () {
  document.getElementById("status").textContent = "";
});

document.getElementById("loadData").addEventListener("click", async function () {
  const status = document.getElementById("fetchStatus");
  const apiList = document.getElementById("apiList");

  status.textContent = "Loading...";
  apiList.innerHTML = "";

  try {
    const response = await fetch("https://api.publicapis.org/entries");
    const data = await response.json();
    apiData = data.entries.slice(0, 10);


    if (apiData.length === 0) {
      status.textContent = "No results found.";
      return;
    }

    apiData.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.API + " - " + item.Category;
      apiList.appendChild(li);
    });

    status.textContent = "Data loaded successfully!";
    
  // Secondary filter: filter by category

  const apiList = document.getElementById("apiList");

  // Filter apiData by category
  const filter = this.value.toLowerCase();


  if (filteredData.length === 0) {
    apiList.textContent = "No results found for this category.";
    return;
  }

  filteredData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.API + " - " + item.Category;
    apiList.appendChild(li);
  });
});
    
  } catch (error) {
    status.textContent = "Error loading data.";
  }
});

document.getElementById("sortAZ").addEventListener("click", function () {
  apiData.sort((a, b) => a.API.localeCompare(b.API));

  const apiList = document.getElementById("apiList");
  apiList.innerHTML = "";

  apiData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.API + " - " + item.Category;
    apiList.appendChild(li);
  });
});
