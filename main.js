// Select the game space and the panel element
const gameSpace = document.querySelector(".game-space");
const panel = document.querySelector(".container > div:first-child");

// Create 9 divs and add them to the game space
for (let i = 0; i < 9; i++) {
  const div = document.createElement("div");
  gameSpace.appendChild(div).classList.add("center");
}

// Select all the divs in the game space
const fields = document.querySelectorAll(".game-space div");

// Add a click event listener to each div
fields.forEach((field) => {
  field.addEventListener("click", () => {
    // If the div is already filled, return
    if (field.textContent !== "") {
      return;
    }

    // Alternate between X and O and update the panel text
    if (panel.textContent.includes("Game") || panel.textContent === "X") {
      [field.textContent, panel.textContent] = ["X", "O"];
    } else {
      [field.textContent, panel.textContent] = ["O", "X"];
    }

    // Check if there is a winner
    [
      [fields[0], fields[1], fields[2]],
      [fields[3], fields[4], fields[5]],
      [fields[6], fields[7], fields[8]],
      [fields[0], fields[3], fields[6]],
      [fields[1], fields[4], fields[7]],
      [fields[2], fields[5], fields[8]],
      [fields[0], fields[4], fields[8]],
      [fields[2], fields[4], fields[6]],
    ].forEach(([x, y, z]) => {
      if (
        x.textContent === "X" &&
        y.textContent === "X" &&
        z.textContent === "X"
      ) {
        // Update the panel text and change the background color of the winning divs
        panel.textContent = "X is the Winner";
        [x, y, z].forEach((element) => (element.style.background = "Black"));
        end();
      } else if (
        x.textContent === "O" &&
        y.textContent === "O" &&
        z.textContent === "O"
      ) {
        // Update the panel text and change the background color of the winning divs
        panel.textContent = "O is the Winner";
        [x, y, z].forEach((element) => (element.style.background = "Black"));
        end();
      }
    });

    // Check if the game is a draw
    if (Array.from(fields).every((element) => element.textContent !== "")) {
      panel.textContent = "Draw";
      end();
    }
  });
});

// Reload the page after a delay and show loading dots
function end() {
  window.setTimeout(() => location.reload(), 3900);
  window.setInterval(() => (panel.textContent += "."), 1000);
}
