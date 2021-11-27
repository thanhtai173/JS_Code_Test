const poll = {
  question: "What is your favorite programming language ?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // Initialize function in obj
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n Write option number: `
      )
    );
    // Short coding - Short Circuiting
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    //--------------------------------
    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".answer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// Call one function in obj for addEventListener, need to use bind function to which obj

// Test data: [5,2,3] [1,5,3,9,6,1]
const testdata1 = { answers: [5, 2, 3] };
const testdata2 = { answers: [1, 5, 3, 9, 6, 1] };

poll.displayResult.call(testdata1, "string");
poll.displayResult.call(testdata2, "string");
