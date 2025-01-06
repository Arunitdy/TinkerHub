console.log("start of index.js");

// Default Profile Image URL
const defaultProfileImage = "https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png";

// People Data
const peopleData = [
    { 
        id: 1, 
        name: "Alice", 
        skills: ["React", "Node.js"],
        profileImage: "https://via.placeholder.com/150",
        socialMedia: {
            facebook: "https://facebook.com/alice",
            instagram: "https://instagram.com/alice",
            linkedin: "https://linkedin.com/in/alice",
            youtube: "https://youtube.com/alice"
        }
    },
    { 
        id: 2, 
        name: "Bob", 
        skills: ["Java", "Spring Boot"],
        profileImage: "",
        socialMedia: {
            facebook: "https://facebook.com/bob",
            instagram: "https://instagram.com/bob",
            linkedin: "https://linkedin.com/in/bob",
            youtube: "https://youtube.com/bob"
        }
    },
    { 
        id: 3, 
        name: "Charlie", 
        skills: ["Python", "Django"],
        profileImage: "https://via.placeholder.com/150",
        socialMedia: {
            facebook: "https://facebook.com/charlie",
            instagram: "https://instagram.com/charlie",
            linkedin: "https://linkedin.com/in/charlie",
            youtube: "https://youtube.com/charlie"
        }
    },
    { 
        id: 4, 
        name: "Diana", 
        skills: ["React", "JavaScript"],
        profileImage: "",
        socialMedia: {
            facebook: "https://facebook.com/diana",
            instagram: "https://instagram.com/diana",
            linkedin: "https://linkedin.com/in/diana",
            youtube: "https://youtube.com/diana"
        }
    }
];

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
            li.className = "result-item";
            li.innerHTML = `<p><strong>Name:</strong> ${person.name}</p><p><strong>Skills:</strong> ${person.skills.join(", ")}</p>`;
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

// Toggle the sliding menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuButton = document.querySelector(".menu-toggle-button");
    menu.classList.toggle("menu-open");
    menuButton.classList.toggle("menu-toggle-button-close");
}

// Generate random blocks
function generateRandomBlocks() {
    const blockContainer = document.getElementById("colorBlock");
    blockContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const block = document.createElement("div");
        block.className = "random-block";
        block.style.position = "absolute";
        block.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        block.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        block.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        block.style.width = "10px";
        block.style.height = "10px";
        block.style.zIndex = "-99";
        block.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        blockContainer.appendChild(block);
    }
}

// Event listeners
window.onload = () => {
    generateRandomBlocks();
};
