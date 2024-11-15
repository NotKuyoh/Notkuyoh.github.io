let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

// Start with the first word visible
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].classList.add("active");

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  // Rotate out letters of the current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  // After animation, hide the current word and show the next
  setTimeout(() => {
    currentWord.classList.remove("active");
    nextWord.classList.add("active");
  }, 800);

  // Rotate in letters of the next word
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  // Update the current word index
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Start the rotation
rotateText();
setInterval(rotateText, 4000);
