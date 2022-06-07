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
