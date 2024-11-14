const cardData = [
    {
        letter: "A",
        imgPath: "./assets/images/css-letter-a.png"
    },
    {
        letter: "B",
        imgPath: "./assets/images/css-letter-b.png"
    },
    {
        letter: "C",
        imgPath: "./assets/images/css-letter-c.png"
    }
];

// Function to create and append cards to the container
function createCards() {
    const container = document.getElementById("cards-container");

    cardData.forEach(data => {
        // Create card elements
        const card = document.createElement("div");
        card.className = "card";

        // Create the result div, initially hidden
        const result = document.createElement("div");
        result.className = "result";
        result.id = `result-${data.letter}`;

        // Add the image inside the result div
        const resultImg = document.createElement("img");
        resultImg.src = data.imgPath;
        resultImg.alt = `Result for ${data.letter}`;

        // Add the "Hide Result" button inside the result div
        const hideButton = document.createElement("button");
        hideButton.textContent = "Hide Result";
        hideButton.className = "hide-button";
        hideButton.addEventListener("click", () => toggleVisibility(data.letter));

        // Append image and hide button to the result div
        result.appendChild(resultImg);
        result.appendChild(hideButton);

        // Append result div to the card
        card.appendChild(result);

        // Create the main button to reveal the result, placed after the result div
        const button = document.createElement("button");
        button.textContent = data.letter;
        button.addEventListener("click", () => toggleVisibility(data.letter));
        
        // Append the main button to the bottom of the card
        card.appendChild(button);

        // Append card to the container
        container.appendChild(card);
    });
}

// Function to toggle visibility of each result section
function toggleVisibility(letter) {
    const result = document.getElementById(`result-${letter}`);
    result.style.display = result.style.display === "none" || result.style.display === "" ? "block" : "none";
}

// Initial call to create cards when the page loads
createCards();
