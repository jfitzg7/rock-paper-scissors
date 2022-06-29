function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];

  // generate a random integer between 0 and 2 and use that as the index
  return choices[Math.floor(Math.random() * 3)];
}
