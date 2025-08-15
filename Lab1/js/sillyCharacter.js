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

    // referenced from: https://www.listchallenges.com/100-random-foods/list/3
    const foodOptions  = [
        "Avocado", "Watercress Sandwich", "Flan", "Calamari", "Raspberry Lemon Meringue Pie",
        "Baked Potato Soup", "Oysters Rockefeller", "Sticky Toffee Pudding", "Chicken Fried Steak", "Cinnamon Bread",
        "Maple Bacon Doughnut", "Bagel and Lox", "Persimmon", "Eggplant", "Udon", "Hibiscus Tea", "Cactus Fries",
        "Pomelo", "Jumbalaya", "Chicken Noodle Soup", "Pho", "Black Forest Cake", "Butter Chicken",
        "Philly Cheese Steak", "Fettucini Alfredo", "Spaghetti Squash", "Frittata", "Masala Dosa", "Eel",
        "Profiteroles", "Escargots", "Cream Cheese Frosting", "Pineapple", "Zucchini Flowers",
        "Arugula Blackberry Salad", "Dragonfruit", "Carbonara", "Chia Pudding", "Mango Lassi", "Corned Beef Sandwich",
        "BLT", "Bubble Tea", "Chocolate Raspberry Brownies", "Clam Cakes", "Lamb Chops", "Smith Island Cake",
        "Cheese Stuffed Jalapenos", "Alligator", "Mexican Street Corn", "Chow Mein", "Corn Chowder",
        "Peanut Butter, Banana, and Bacon - Tennessee", "Coconut Cream Pie", "Huevos Rancheros", "Banh Mi", "Empanada",
        "Vindaloo", "Vanilla Pudding", "Blue Moon Ice Cream", "Blueberry Pineapple Smoothie", "Elk",
        "Eggplant Parmesan", "Swedish Meatballs", "Squared Watermelon", "Fig Jam", "Octopus", "Bone Marrow",
        "Gallo Pinto", "Crab Rangoon", "Crêpe Suzette", "Pico De Gallo", "Salmon Pasta Bake", "Cucumber Sandwiches",
        "Caramel Latte", "Lemon Chicken", "Saltine Crackers", "Ants on a Log", "English Breakfast",
        "Chorizo Pizza", "Chicken Waffle", "Sausage, Peppers and Onions on a Hoagie", "Fried Green Tomatoes",
        "Cassoulet", "Blueberry Cream Cheese French Toast Casserole", "Snickerdoodles", "Dutch Baby Pancake",
        "Roast Turkey and Stuffing", "Rueben Sandwich", "Lemon Cookies", "Strawberry Rhubarb Pie",
        "Bacon Wrapped Pineapple", "Marzipan Dates", "Pistachio Muffin", "Spaghetti Bolognese", "Sugar Cane",
        "Potato Cake", "Garlic Knots", "Gazpacho", "Huckleberry Ice Cream", "Gulab Jamun"
    ];
  
    const powerOptions = [
        "fly faster than light", "turn invisible", "shoot rainbow lasers", "teleport", "freeze time",
        "ability to change the television channel with a click of the fingers",
        "instant dish washing",
        "ability to build a perfect lego replica of any building or object",
        "perfect hair",
        "can always find the nearest gas station",
        "always knowing the number of beans in a jar",
        "never getting drunk",
        "the ability to read heavy metal album covers, no matter how spiky the logo",
        "always having 20 bucks in their pocket",
        "always the second hottest person in the room",
        "shapeshifting (but specifically in ways that are small and barely noticeable)",
        "unscrambling eggs",
        "never missing the wastebasket on a three-point paper-ball free throw",
        "flawlessly juggling any number of anything no matter how ludicrous or unlikely",
        "making lemonade out of things that are not lemons",
        "opening any jar on the first go",
        "always rolling a 6 (even on a dice with no 6 on it)",
        "total sunburn immunity",
        "total spice immunity",
        "total freezeburn immunity",
        "the ability to hail a taxi in less than a minute (in any situation)",
        "the ability to instill in a person within line of eyesight the intense need to urinate",
        "surviving anything ONCE",
        "can remember anything forever as long as they say it three times"
    ];

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
  const description = `${characterName} is a ${age}-year-old ${isSuperhero ? "superhero" : "ordinary person"} who loves eating ONLY ${favoriteFood}. Their special powers include: ${specialPowers.join(", ")}.`;

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

