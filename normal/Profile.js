console.log("start of profile.js");

// Default Profile Image URL
const defaultProfileImage = "https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png";


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
