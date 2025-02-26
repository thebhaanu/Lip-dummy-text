function generateText() {
  const wordCount = document.getElementById('wordCount').value;
  const format = document.getElementById('format').value;

  if (wordCount <= 0) {
      document.getElementById("output").innerText = "Please enter a valid number of words.";
      return;
  }

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Phasellus fermentum, nisi et sagittis consequat, ligula mi tempus elit, nec pharetra orci metus nec lacus. Vivamus vehicula justo nec eros facilisis, sit amet tristique nulla laoreet. Nulla facilisi. Proin eget dui eget velit convallis posuere.`.split(" ");

  let words = [];
  for (let i = 0; i < wordCount; i++) {
      words.push(lorem[i % lorem.length]);
  }

  let output = words.join(" ");
  if (format === "html") {
      output = `<p>${output}</p>`;
  } else if (format === "markdown") {
      output = `**${output}**`;
  }

  document.getElementById("output").innerText = output;
}

function copyText() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
  });
}
