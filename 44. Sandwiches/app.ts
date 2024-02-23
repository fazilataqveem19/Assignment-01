/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function make_sandwich(...items: string[]): void {
    console.log("Sandwiches Summary:");
    if (items.length === 0) {
        console.log("   - You ordered empty Sandwich. Please add some items.");
    } else {
        items.forEach((item, index) => {
            console.log(`   ${index + 1}. ${item}`);
        })
    }
    console.log("\n");
}

// Call the Function with different number of Arguments.

make_sandwich();
make_sandwich("Egg", "Ham", "Chicken");
make_sandwich("Cuban", "Tomato", "Cheese");
make_sandwich("Peanut Butter", "Veggie & Cream", "Beef")



