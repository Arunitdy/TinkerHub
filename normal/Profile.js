console.log("start of profile.js");

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

// Load profile details
function loadProfile() {
    const params = new URLSearchParams(window.location.search);
    const personId = parseInt(params.get("id"), 10);

    const person = peopleData.find(p => p.id === personId);

    if (person) {
        document.getElementById("profile-name").innerText = person.name;

        // Set profile image (use default if no image is available)
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
    }
}

// Event listeners
window.onload = () => {
    loadProfile();
};
