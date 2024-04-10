const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = {};

const askQuestion = (index) => {
  rl.question(questions[index] + " ", (answer) => {
    answers[index] = answer;
    if (index === questions.length - 1) {
      createProfile();
    } else {
      askQuestion(index + 1);
    }
  });
};

const createProfile = () => {
  console.log("\nHere's your profile:\n");
  console.log(`Name: ${answers[0]}`);
  console.log(`Activity: ${answers[1]}`);
  console.log(`Music: ${answers[2]}`);
  console.log(`Favorite Meal: ${answers[3]}`);
  console.log(`Favorite Food: ${answers[4]}`);
  console.log(`Favorite Sport: ${answers[5]}`);
  console.log(`Superpower: ${answers[6]}`);

  rl.close();
};

askQuestion(0);