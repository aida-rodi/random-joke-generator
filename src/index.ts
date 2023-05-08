function sayHelloWorld(): void {
  console.log("Hello World from Type Script code.");
}

sayHelloWorld();

// Exercise 1
const button = document.getElementById('btn');

async function fetchJoke(): Promise<string> {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {'Accept': 'application/json'}
  });

  const data = await response.json();
  return data.joke;
}

button?.addEventListener('click', async () => {
  const joke = await fetchJoke();
  console.log(joke);
});