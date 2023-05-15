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
// Exercise 4
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&current_weather=true');
    const data = yield response.json();
    const currentWeather = data['current_weather'];
    let weatherIcon = 'icon';
    if (currentWeather.weathercode === 0) {
        weatherIcon = '☀️';
    }
    else if (currentWeather.weathercode === 1) {
        weatherIcon = '🌤️';
    }
    else if (currentWeather.weathercode === 2) {
        weatherIcon = '⛅';
    }
    else if (currentWeather.weathercode === 3) {
        weatherIcon = '☁️';
    }
    else if (currentWeather.weathercode === 45) {
        weatherIcon = '🌫️';
    }
    else if (currentWeather.weathercode === 48) {
        weatherIcon = '🌫️';
    }
    else if (currentWeather.weathercode === 51 || currentWeather.weathercode === 53 || currentWeather.weathercode === 55) {
        weatherIcon = '🌦️';
    }
    else if (currentWeather.weathercode === 61) {
        weatherIcon = '🌧️';
    }
    else if (currentWeather.weathercode === 63) {
        weatherIcon = '🌧️🌧️';
    }
    else if (currentWeather.weathercode === 65) {
        weatherIcon = '🌧️🌧️🌧️';
    }
    else if (currentWeather.weathercode === 71 || currentWeather.weathercode === 73 || currentWeather.weathercode === 75) {
        weatherIcon = '🌨️';
    }
    else if (currentWeather.weathercode === 95) {
        weatherIcon = '⛈️';
    }
    else {
        weatherIcon = '⚠️';
    }
    ;
    console.log(`Temperature: ${currentWeather.temperature}°C`);
    console.log(`Icon: ${weatherIcon}`);
    const weatherParagraph = document.getElementById('weatherParagraph');
    if (weatherParagraph) {
        weatherParagraph.textContent = '';
    }
    weatherParagraph === null || weatherParagraph === void 0 ? void 0 : weatherParagraph.append(`${weatherIcon}  ${currentWeather.temperature}ºC`);
}));
// **************
const ratedJokes = [];
let ratedJoke = { score: undefined };
const date = new Date();
const dateString = date.toISOString();
// Exercise 1
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.joke;
    });
}
// Exercise 5
function fetchChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.chucknorris.io/jokes/random');
        const data = yield response.json();
        return data.value;
    });
}
;
const nextJokeButton = document.getElementById('btn');
nextJokeButton === null || nextJokeButton === void 0 ? void 0 : nextJokeButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (ratedJoke.score !== undefined) {
        ratedJokes.push(ratedJoke);
        console.log('ratedJokes:', ratedJokes);
    }
    const randomJoke = Math.ceil(Math.random() * 2);
    let joke;
    if (randomJoke === 1) {
        joke = yield fetchJoke();
        console.log(joke);
        const jokeParagraph = document.getElementById('jokeParagraph');
        if (jokeParagraph) {
            jokeParagraph.textContent = '';
        }
        jokeParagraph === null || jokeParagraph === void 0 ? void 0 : jokeParagraph.append(joke);
    }
    if (randomJoke === 2) {
        joke = yield fetchChuckNorrisJoke();
        console.log(joke);
        const jokeParagraph = document.getElementById('jokeParagraph');
        if (jokeParagraph) {
            jokeParagraph.textContent = '';
        }
        jokeParagraph === null || jokeParagraph === void 0 ? void 0 : jokeParagraph.append(joke);
    }
    // Exercise 2
    /* const jokeParagraph = document.getElementById('jokeParagraph');
    if (jokeParagraph) {
      jokeParagraph.textContent = '';
    }
    jokeParagraph?.append(joke); */
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
});
rating2 === null || rating2 === void 0 ? void 0 : rating2.addEventListener('click', () => {
    ratedJoke.score = 2;
});
rating3 === null || rating3 === void 0 ? void 0 : rating3.addEventListener('click', () => {
    ratedJoke.score = 3;
});
