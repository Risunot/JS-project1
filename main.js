function calculateAge(birth) {
    return 2022 - birth;
}

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 64 - age;

    if(retirement >= 0){
        console.log("Počet rokov do dôchodku je " + retirement + " u " + firstName );
    } else {
        retirement =-(retirement);
        console.log(firstName + " " + "Je už v dôchodku " + retirement + " rokov.");
    } 
}

yearsUntilRetirement(1996, "Ivana");
yearsUntilRetirement(1970, "Peter");
yearsUntilRetirement(1950, "Zdena");

// ==================================================================================

const divContainer = document.getElementById("container");
function myFunction(prepinak) {
    if(prepinak == "flex"){
        divContainer.classList.add("flex-container");
        divContainer.classList.remove("grid-container")
        divContainer.classList.remove("block-container")
    } else if(prepinak == "grid"){
        divContainer.classList.remove("flex-container")
        divContainer.classList.add("grid-container");
        divContainer.classList.remove("block-container")
    } else if(prepinak == "block"){
        divContainer.classList.add("block-container")
        divContainer.classList.remove("grid-container")
        divContainer.classList.remove("flex-container")
    }
}


function thisFunction(e) {
    let activeButton = document.querySelector(".active");
    if(activeButton !==null){
        activeButton.classList.remove("active");
    }
   e.target.className = "active";
  }

// ===============================================================================================


//1. Create a new array of four item into the variable.
const bestGames = ["Last of us", "Witcher", "Got of war", "League of Legends"];
// 2. Write to the console the array and the first item from the array separately.
console.log(bestGames, bestGames[0]);
// 3. Modify the first item, to some other favorite game by assigning via bracket notation []
bestGames[0] = "Assassin's creed";
// 4. Add new item of the favorite game to the array by using via bracket notation
bestGames[4] = "wow";
// 5. Add new item of the favorite game to the array by another approach.
//  Use one of the javascript native method(function).
bestGames.push("Horizon Zero Down");
// 6. Try to remove the first item from thebestGames array.
bestGames.shift();
// 7. Do the same as in the previous task, except that you store the deleted value in a variable so that you can use it later.
const witcher3 = bestGames.shift();
// 8. Now, return this removed item back to the bestGames array
bestGames.unshift(witcher3);
bestGames.splice(0,0, "Last of us");
// 9. Imagine a situation where you need to find out how many items are in an array, but 
// someone can always change that number of items in the array. It would be good to always 
// find the right number.
let dlzka = bestGames.length;
console.log(dlzka);
// 10. Modify index 0 of the bestGames array. But not just simply rewriting actual value. Modify
//  it by replacing with array of values  Last of us 1 and Last of us 2.
bestGames[0] = ["Last of us1", "Last of us2"];
// 11. Add new item to the new created nested (multidimensional) array and print it output to the
//  console.log() method. You can use whatever approach you want.
// bestGames[0].splice(2,2, 'lol');
bestGames[0].push("Hogwarts Legacy");
console.log(bestGames[0][2]);

// ==============================================================================================================================