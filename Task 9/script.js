/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(movieTitle, movieDirector, movieBudget) {
        this.title = movieTitle;
        this.director = movieDirector;
        this.budget = movieBudget;
    };

    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        };
    };
};

const movie1 = new Movie("Interstellar", "Cristopher Nolan", 165000000);

console.log(movie1);

console.log(movie1.wasExpensive());
