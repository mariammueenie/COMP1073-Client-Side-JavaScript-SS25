

// plan:

// Define smoothie class

// Define ingredients as properties of the smoothie class 

// Restrict number of ingredients that can be selected

// Create method to display smoothie ingredients
    // return all ingredients selected
    // need to return each property of smoothie class
    // need to return "none" if no ingredient selected

// Create object to hold user selections

// Add event listener to form submission

// Render smoothie with user selections and display
// =================================

// Limit the number of selections for each ingredient category
function limitCheckboxGroup(selector, max, message) {
  const checkboxes = Array.from(document.querySelectorAll(selector));
  checkboxes.forEach((box) => {
    box.addEventListener("change", () => {
      const checkedBoxes = checkboxes.filter((b) => b.checked);
      if (checkedBoxes.length > max) {
        box.checked = false;
        alert(message);
      }
    });
  });
}

// Limit fruit selections to 3
limitCheckboxGroup('fieldset.fruit input[type="checkbox"]', 3, "You can choose up to 3 fruits/flavours.");

// Limit greens selections to 2
limitCheckboxGroup('fieldset.greens input[type="checkbox"]', 2, "You can choose up to 2 greens.");


// Smoothie class with properties for each ingredient category
class Smoothie {
  constructor(liquid, fruits, greens, booster, protein) {
    this.liquid = liquid;
    // Ensures fruit and greens are arrays
    this.fruits = fruits;   
    this.greens = greens;   
    this.booster = booster;
    this.protein = protein;
  }

  // Method to display smoothie ingredients chosen by user
  describe() {
    const fruitList = this.fruits && this.fruits.length > 0 ? this.fruits.join(", ") : "none";
    const greensList = this.greens && this.greens.length > 0 ? this.greens.join(", ") : "none";

    return `Your smoothie contains:
  Liquid: ${this.liquid || "none"}
  Fruits/Flavours: ${fruitList}
  Greens: ${greensList}
  Super-foods/Flavour Boosters: ${this.booster || "none"}
  Protein: ${this.protein || "none"}`;
  }
}


// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("smoothieForm");
    const summaryEI = document.getElementById("orderSummary");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get userS selections  
    const liquid = document.querySelector('input[name="liquid"]:checked')?.value || "";
   
    const fruits = Array.from(
        document.querySelectorAll('input[name="fruit"]:checked')
        ).map((el) => el.value);

    const greens = Array.from(
        document.querySelectorAll('input[name="greens"]:checked')
        ).map((el) => el.value);

    const booster = document.querySelector('input[name="booster"]:checked')?.value || "";
    const protein = document.querySelector('input[name="protein"]:checked')?.value || "";

    // Create smoothie object with user selections
    const smoothie = new Smoothie(liquid, fruits, greens, booster, protein);

    // Display smoothie summary
    summaryEI.textContent = smoothie.describe();
  });
});






