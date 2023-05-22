const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    this.state = Math.floor(Math.random() * 2);
  },
  toString: function () { 
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    return this.state === 0 ? "Heads" : "Tails";
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    image.src = this.state === 0 ? "images/heads.png" : "images/tails.png";
    image.alt = this.toString();
    return image;
  },
};

function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  const outputContainer = document.createElement("div");

  for (let i = 0; i < 20; i++) {
    coin.flip();
    const result = coin.toString();
    results.push(result);

    const flipResult = document.createElement("p");
    flipResult.textContent = result;
    outputContainer.appendChild(flipResult);
  }

  document.body.appendChild(outputContainer);
  return results;
}

function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  const outputContainer = document.createElement("div");

  for (let i = 0; i < 20; i++) {
    coin.flip();
    const result = coin.toHTML();
    results.push(result);

    outputContainer.appendChild(result);
  }

  document.body.appendChild(outputContainer);
  return results;
}

// Invokes the display functions
display20Flips();
display20Images();




