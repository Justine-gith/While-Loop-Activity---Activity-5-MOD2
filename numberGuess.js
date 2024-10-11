function guessNum(){
  let count = 3;
  let number = prompt("Guess a number between 1 and 10: ");
  while (number != count) {
      if (number < count) {
          alert("Too Low");
      } else {
          alert("Too High");
      }
      number = prompt("Guess a number between 1 and 10");
  }
  alert("Correct! the number is 3");
}