// premena je inicializovana(odchytila som si h1 cez jej id "heading")
let h1 = document.getElementById("heading");

// funkcia a jej nazov (parametre ktore si viem nazvat ako len chcem)
function myFunction1(zatvorky,cislo) {
    // vraciam vysledok (lepi parametre kedze su string ak by boli cisla tak pocita)
    return zatvorky + cislo;  
}

// pridelujem hodnotu do vnutorneho html mojej h1-co je vysledok funkcie ( {} )7
h1.innerHTML = myFunction1( "( {} )",7);


// funkcia je deklarovana s 3 parametrami
function kalkulacka(prveCislo, druheCislo, znamienko) {
    // ak je podmienka true - znamienko je plus
    if (znamienko == "+") {
        // tak vraciam prve cislo + druhe cislo cez KEYWORD return
        return prveCislo + druheCislo;
    }
}
// Function Invocation-vyvolanie funkcie
// vyvolavam funkciu do konzole (cez nazov funkcie a pridanim hodnot argumentov(1,5,"+"))
console.log(kalkulacka(1,5,"+"));