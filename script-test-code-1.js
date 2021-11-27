const poll = {
  question: "What is your favorite programming language ?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

const newline = "\n";

const optionchoice = (obj) => {
  let stringoption = "";
  for (const item of obj.options) {
    stringoption = stringoption + item + newline;
  }
  return stringoption;
};

const displayResults = (type = "array") => {
  if (type === "array") {
    console.log(poll.answers);
  } else if (type === "string") {
    console.log(`Poll results are ${poll.answers.join(", ")} `);
  }
};

const registerNewAnswer = () => {
  const choice = Number(prompt(poll.question + newline + optionchoice(poll)));
  const pollanswer = poll.answers;
  for (let i = 0; i < pollanswer.length; i++) {
    pollanswer[i] = i === choice ? pollanswer[i] + 1 : pollanswer[i];
  }

  displayResults();
  displayResults("string");
};

document.querySelector(".answer").addEventListener("click", registerNewAnswer);
