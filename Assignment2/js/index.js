

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
    checkboxes.forEach((box)=> {
        box.addEventListener('change', ()=>{
            const checkedBoxes = checkboxes.filter((b)=>b.checked);
            if (checkedBoxes.length > max) {
                box.checked = false;
                alert(message);
            }
        });
    });
}

// Limit fruit selections to 3
limitCheckboxGroup('#fruitFieldset input[type="checkbox"]', 3, "You can choose up to 3 fruits/flavours.");

// Limit greens selections to 2
 limitCheckboxGroup('#greensFieldset input[type="checkbox"]', 2, "You can choose up to 2 greens.");

// Smoothie class with properties for each ingredient category
class Smoothie {
    constructor(liquid, fruit, greens, booster, protein) {
        this.liquid = liquid;
        this.fruit = fruit;
        this.greens = greens;
        this.booster = booster;
        this.protein = protein;
    }
}



// Method to display smoothie ingredients chosen by user
describe() {
    const fruitList = this.fruit.length > 0 ? this.fruit.join(', ') : 'none';
    const greensList = this.greens.length > 0 ? this.greens.join(', ') : 'none';
    
    return `Your smoothie contains:
        Liquid: ${this.liquid || 'none'}
        Fruits/Flavours: ${fruitList}
        Greens: ${greensList}
        Super-foods/Flavour Boosters: ${this.booster || 'none'}
        Protein: ${this.protein || 'none'}`;
}







