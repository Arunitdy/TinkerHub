
console.log("start of js");

const peopleData = [
    { id: 1, name: "Alice", skills: ["React", "Node.js"] },
    { id: 2, name: "Bob", skills: ["Java", "Spring Boot"] },
    { id: 3, name: "Charlie", skills: ["Python", "Django"] },
    { id: 4, name: "Diana", skills: ["React", "JavaScript"] },
  ];
  handleSearch();

  let menuOpen = false;
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menuOpen = !menuOpen;
    menu.className = menuOpen ? "sliding-menu menu-open" : "sliding-menu menu-closed";
  }
  
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
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = "<p class='no-results-message'>No results found.</p>";
    }
  }
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
  //random color block
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
  