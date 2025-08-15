/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
1.Declare
2.Initialize
3.Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Captain Waffle"; 
let age = 21;
let isSuperhero = true;
let specialPowers = ["flying", "talking to squirrels", "able to smell pizza from abnormally long distances"];
let favoriteFood = "pizza";

// Grab DOM elements we will manipulate
const descriptionEl = document.querySelector("#characterDescription");
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const generateButton = document.querySelector("#generateButton");
const updateAgeButton = document.querySelector("#updateAgeButton");
const increaseAgeButton = document.querySelector("#increaseAgeButton");
const decreaseAgeButton = document.querySelector("#decreaseAgeButton");

// Utility function to generate a random integer between min and max
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random character description
function generateRandomCharacterDescription() {
  // Pools to pick random values from
  // Name options referenced from: https://www.heroscapers.com/threads/funny-super-hero-names.3716/page-2
   const nameOptions  = [
    "Captain Waffles", "Dr. Noodle", "Sir Pancake", "Agent Pickles", "Queen Zucchini",
    "Captain Cliff Beefpile", "Sledge Riprock", "Tank Concrete", "Bronc Drywall", "Stump Hugelarge",
    "Chunk Pylon", "Chunk Man", "Captain Ron Codpiece", "Sledge Fisthammer", "Clint Stompheader",
    "Captain Chuck Hardslab", "Chunk Ironchest", "Captain Obvious", "The Fry", "Running Commentary Man",
    "The Nip", "Ms. Sogyny", "General Disarray", "Captain Chaos", "Lightbulb Man", "Sir. Smel Za Lot",
    "Captain Underpants", "HypoAllergenic Woman", "Mx. Coco Nuts", "Jo Mama", "The Incr-Edible Egghead",
    "Cowboy Boy", "CowGirl Girl", "Incredible Violence", "The Red Scare", "The Pink Scare", "The Bear",
    "Wonder Bread", "Princess Prince", "Queen King", "Dr. Clobber-Octopus"
  ];
  const foodOptions  = ["pizza", "sushi", "tacos", "poutine", "ramen"];
  const powerOptions = ["fly faster than light", "turn invisible", "shoot rainbow lasers", "teleport", "freeze time"];

  // Random name, food, and boolean superhero status
  characterName = nameOptions[randomInt(0, nameOptions.length - 1)];
  favoriteFood = foodOptions[randomInt(0, foodOptions.length - 1)];
  isSuperhero = randomInt(0, 1) === 1; 

  // Random age between 1 and 111
  age = randomInt(1, 111);

  // Choose 1–3 random powers from the powerOptions array without duplicates
  const count = randomInt(1, 3);
  const poolCopy = powerOptions.slice();
  specialPowers = []; 
  for (let i = 0; i < count; i++) {
    const pickIndex = randomInt(0, poolCopy.length - 1);
    specialPowers.push(poolCopy[pickIndex]);
    poolCopy.splice(pickIndex, 1);
  }

  // Update the screen with new variables
  updateCharacterDescription();
}

// Functions to update character's age
function setAgeFromInput() {
  const parsed = +ageInput.value;
  if (!isNaN(parsed) && parsed >= 0) {
    age = parsed;
    updateCharacterDescription();
  }
}

// Function to increase age by 1
function increaseAge() {
  age = age + 1;
  updateCharacterDescription();
}

// Function to decrease age by 1
function decreaseAge() {
  if (age > 0) {
    age = age - 1;
  }
  updateCharacterDescription();
}

// Function to update the character's description after changing
function updateCharacterDescription() {
  // Create a description string using template literals
  const description = `${characterName} is a ${age}-year-old ${isSuperhero ? "superhero" : "ordinary person"} who loves ${favoriteFood}. Their special powers include: ${specialPowers.join(", ")}.`;

  // Update the description element in the DOM
  descriptionEl.textContent = description;
}

// Add event listeners for buttons using querySelector
generateButton.addEventListener("click", generateRandomCharacterDescription);
updateAgeButton.addEventListener("click", setAgeFromInput);
increaseAgeButton.addEventListener("click", increaseAge);
decreaseAgeButton.addEventListener("click", decreaseAge);

// Show initial description on page load
updateCharacterDescription();

