"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ratedJokes = [];
let ratedJoke = undefined;
const date = new Date();
const dateString = date.toISOString();
// Exercise 1
const nextJokeButton = document.getElementById('btn');
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.joke;
    });
}
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (ratedJoke !== undefined) {
        ratedJokes.push(ratedJoke);
        console.log('ratedJokes:', ratedJokes);
    }
    const joke = yield fetchJoke();
    console.log(joke);
    // Exercise 2
    const jokeParagraph = document.getElementById('jokeParagraph');
    if (jokeParagraph) {
        jokeParagraph.textContent = '';
    }
    jokeParagraph === null || jokeParagraph === void 0 ? void 0 : jokeParagraph.append(joke);
    // Exercise 3
    const ratingButtons = document.getElementById('ratingButtons');
    ratingButtons.style.display = 'block';
    ratedJoke = {
        joke: joke,
        score: undefined,
        date: dateString,
    };
    //console.log(ratedJoke)
}));
const rating1 = document.getElementById('rating1');
const rating2 = document.getElementById('rating2');
const rating3 = document.getElementById('rating3');
rating1 === null || rating1 === void 0 ? void 0 : rating1.addEventListener('click', () => {
    ratedJoke.score = 1;
    //console.log(ratedJoke);
});
rating2 === null || rating2 === void 0 ? void 0 : rating2.addEventListener('click', () => {
    ratedJoke.score = 2;
    //console.log(ratedJoke);
});
rating3 === null || rating3 === void 0 ? void 0 : rating3.addEventListener('click', () => {
    ratedJoke.score = 3;
    //console.log(ratedJoke);
});
