const ratedJokes: Array<object> = [];
let ratedJoke: any = undefined;

const date = new Date()
const dateString = date.toISOString();

// Exercise 1
const nextJokeButton = document.getElementById('btn');

async function fetchJoke(): Promise<string> {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {'Accept': 'application/json'}
  });

  const data = await response.json();
  return data.joke;
}

nextJokeButton?.addEventListener('click', async () => {
  if (ratedJoke !== undefined) {
    ratedJokes.push(ratedJoke)
    console.log('ratedJokes:', ratedJokes);
  }

  const joke = await fetchJoke();
  console.log(joke);
  
  // Exercise 2
  const jokeParagraph = document.getElementById('jokeParagraph');
  if (jokeParagraph) {
    jokeParagraph.textContent = '';
  }
  jokeParagraph?.append(joke);

  // Exercise 3
  const ratingButtons = document.getElementById('ratingButtons') as HTMLDivElement
  ratingButtons.style.display = 'block'

  ratedJoke = {
    joke: joke,
    score: undefined,
    date: dateString,
  };
  //console.log(ratedJoke)
});

const rating1 = document.getElementById('rating1') as HTMLButtonElement
const rating2 = document.getElementById('rating2') as HTMLButtonElement
const rating3 = document.getElementById('rating3') as HTMLButtonElement

rating1?.addEventListener('click', () => {
  ratedJoke.score = 1
  //console.log(ratedJoke);
});

rating2?.addEventListener('click', () => {
  ratedJoke.score = 2
  //console.log(ratedJoke);
});

rating3?.addEventListener('click', () => {
  ratedJoke.score = 3
  //console.log(ratedJoke);
});