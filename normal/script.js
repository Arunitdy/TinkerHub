console.log("start of index.js");

// Default Profile Image URL

// Handle search function
function handleSearch() {
    const nameInput = document.getElementById("nameInput").value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    const filteredResults = peopleData.filter(person => {
        const matchesName = nameInput ? person.name.toLowerCase().includes(nameInput) : true;
        return matchesName;
    });

    if (filteredResults.length > 0) {
        filteredResults.forEach(person => {
            const li = document.createElement("li");
            let img=(person.profileImage)?person.profileImage:defaultProfileImage;
            console.log(img)
            li.className = "result-item";
            li.innerHTML = `<img  class="profileImg" src="${img}" atl="profile img of ${person.name}">
                            <div class="details">
                                <p><strong>Name:</strong> ${person.name}</p>
                                <p><strong>Skills:</strong> ${person.skills.join(", ")}</p>
                            </div>`;
            li.onclick = () => viewProfile(person.id);
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = "<p class='no-results-message'>No results found.</p>";
    }
}
handleSearch();  // Load all list initially

// Handle keydown for enter
function handleKeyDown(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
}

// View profile page when a result is clicked
function viewProfile(personId) {
    const person = peopleData.find(p => p.id === personId);

    if (person) {
        // Redirect to profile.html with the person's ID in the query string
        window.location.href = `profile.html?id=${person.id}`;
    }
}

/*
// Toggle the sliding menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuButton = document.querySelector(".menu-toggle-button");
    menu.classList.toggle("menu-open");
    menuButton.classList.toggle("menu-toggle-button-close");
}
*/

//color block
function generateRandomBlocks() {
    const blockContainer = document.getElementById("colorBlock");

    // Clear existing blocks
    blockContainer.innerHTML = "";

    const blockSize = 10; // Size of each block (width and height)

    for (let i = 0; i < 10; i++) {
        const block = document.createElement("div");
        block.className = "random-block";
        block.style.position = "absolute";

        // Set random positions within the visible area, considering the block size
        block.style.left = Math.floor(Math.random() * (window.innerWidth - blockSize)) + "px";
        block.style.top = Math.floor(Math.random() * (window.innerHeight - blockSize)) + "px";

        block.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        block.style.width = blockSize + "px";
        block.style.height = blockSize + "px";
        block.style.zIndex = "-99";
        block.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

        blockContainer.appendChild(block);
    }
}


// Event listeners
window.onload = () => {
    generateRandomBlocks();
};
