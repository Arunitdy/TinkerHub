// Default Profile Image URL
const defaultProfileImage = "https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png";

// Assuming you have the peopleData array or fetched from a database
const peopleData = [
    { 
        id: 1, 
        name: "Alice", 
        skills: ["React", "Node.js"],
        profileImage: "https://via.placeholder.com/150", // Example of a valid profile image
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
        profileImage: "", // No profile image, should use default
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
        profileImage: "", // No profile image, should use default
        socialMedia: {
            facebook: "https://facebook.com/diana",
            instagram: "https://instagram.com/diana",
            linkedin: "https://linkedin.com/in/diana",
            youtube: "https://youtube.com/diana"
        }
    }
];

// Get the id from the URL query string
const params = new URLSearchParams(window.location.search);
const personId = parseInt(params.get("id"), 10);

// Find the person by id from the peopleData array
const person = peopleData.find(p => p.id === personId);

if (person) {
    // Set the profile name
    document.getElementById("profile-name").innerText = person.name;

    // Set the profile image (use default if no image is available)
    const profileImage = person.profileImage || defaultProfileImage;
    document.getElementById("profileImage").src = profileImage;

    // Display skills
    const skillsList = document.getElementById("profile-skills");
    person.skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    // Set social media links
    document.getElementById("facebook-link").href = person.socialMedia.facebook;
    document.getElementById("instagram-link").href = person.socialMedia.instagram;
    document.getElementById("linkedin-link").href = person.socialMedia.linkedin;
    document.getElementById("youtube-link").href = person.socialMedia.youtube;

} else {
    // If person is not found, show an error message
    document.getElementById("profile-container").innerHTML = "<p>Profile not found.</p>";
}

// Generate random blocks (same as before)
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

window.onload = generateRandomBlocks;
