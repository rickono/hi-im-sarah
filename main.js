const noButton = document.getElementById('no-button');
console.log(noButton);
const greeting = document.getElementById('greeting');

const greetings = ["Hi I'm Sarah", "Hi I'm Rick"];
let currentGreeting = 0;

noButton.addEventListener('click', () => {
  currentGreeting = (currentGreeting + 1) % greetings.length;
  greeting.textContent = greetings[currentGreeting];
});
