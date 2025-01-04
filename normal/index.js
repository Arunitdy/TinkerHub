const allSkills = ["React", "Node.js", "Java", "Spring Boot", "Python", "Django", "JavaScript", "HTML", "CSS"];
const peopleData = [
  { id: 1, name: "Alice", skills: ["React", "Node.js"] },
  { id: 2, name: "Bob", skills: ["Java", "Spring Boot"] },
  { id: 3, name: "Charlie", skills: ["Python", "Django"] },
  { id: 4, name: "Diana", skills: ["React", "JavaScript"] },
];

let selectedSkills = [];
let menuOpen = false;

function toggleMenu() {
  const menu = document.getElementById("menu");
  menuOpen = !menuOpen;
  menu.className = menuOpen ? "sliding-menu menu-open" : "sliding-menu menu-closed";
}

function handleSkillInputChange() {
  const input = document.getElementById("skillInput").value.toLowerCase();
  const dropdown = document.getElementById("skillDropdown");
  dropdown.innerHTML = "";

  if (input) {
    const filteredSkills = allSkills.filter(skill => skill.toLowerCase().startsWith(input));
    filteredSkills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      li.className = "skill-dropdown-item";
      li.onclick = () => handleAddSkill(skill);
      dropdown.appendChild(li);
    });
  }
}

function handleAddSkill(skill) {
  if (!selectedSkills.includes(skill)) {
    selectedSkills.push(skill);
    renderSelectedSkills();
  }
  document.getElementById("skillInput").value = "";
  document.getElementById("skillDropdown").innerHTML = "";
}

function handleRemoveSkill(skill) {
  selectedSkills = selectedSkills.filter(s => s !== skill);
  renderSelectedSkills();
}

function renderSelectedSkills() {
  const container = document.getElementById("selectedSkills");
  container.innerHTML = "";
  selectedSkills.forEach(skill => {
    const badge = document.createElement("span");
    badge.className = "selected-skill-badge";
    badge.textContent = skill;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-skill-button";
    removeButton.textContent = "×";
    removeButton.onclick = () => handleRemoveSkill(skill);

    badge.appendChild(removeButton);
    container.appendChild(badge);
  });
}

function handleSearch() {
  const nameInput = document.getElementById("nameInput").value.toLowerCase();
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  const filteredResults = peopleData.filter(person => {
    const matchesName = nameInput ? person.name.toLowerCase().includes(nameInput) : true;
    const matchesSkills = selectedSkills.length
      ? selectedSkills.every(skill => person.skills.includes(skill))
      : true;
    return matchesName && matchesSkills;
  });

  if (filteredResults.length > 0) {
    filteredResults.forEach(person => {
      const li = document.createElement("li");
      li.className = "result-item";
      li.innerHTML = `<p><strong>Name:</strong> ${person.name}</p><p><strong>Skills:</strong> ${person.skills.join(", ")}</p>`;
      resultsList.appendChild(li);
    });
  } else {
    resultsList.innerHTML = "<p class='no-results-message'>No results found.</p>";
  }
}

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