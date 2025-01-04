import React, { useState ,useEffect} from "react";
import './App.css';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [results, setResults] = useState([]);
  const [blocks, setBlocks] = useState([]);

  const allSkills = [
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const [filteredSkills, setFilteredSkills] = useState(allSkills);

  const peopleData = [
    { id: 1, name: "Alice", skills: ["React", "Node.js"] },
    { id: 2, name: "Bob", skills: ["Java", "Spring Boot"] },
    { id: 3, name: "Charlie", skills: ["Python", "Django"] },
    { id: 4, name: "Diana", skills: ["React", "JavaScript"] },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSkillInputChange = (event) => {
    const value = event.target.value;
    setSkillInput(value);
    if (value) {
      setFilteredSkills(
        allSkills.filter((skill) =>
          skill.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setFilteredSkills(allSkills);
    }
  };

  const handleAddSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillInput("");
    setFilteredSkills(allSkills);
  };

  const handleSearch = () => {
    const filteredResults = peopleData.filter((person) => {
      const matchesName = name ? person.name.toLowerCase().includes(name.toLowerCase()) : true;
      const matchesSkills = selectedSkills.length
        ? selectedSkills.every((skill) => person.skills.includes(skill))
        : true;
      return matchesName && matchesSkills;
    });
    setResults(filteredResults);
  };

   // Function to generate random blocks
  const generateRandomBlocks = () => {
    const newBlocks = [];
    for (let i = 0; i < 10; i++) {
      newBlocks.push({
        id: i,
        left: Math.floor(Math.random() * window.innerWidth) + "px",  // Random left position
        top: Math.floor(Math.random() * window.innerHeight) + "px", // Random top position
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
        width: "10px",  // Fixed width of 2px
        height: `10px`,
        zIndex: "-99",  // Random height between 10px and 60px
        rotate: `${Math.floor(Math.random() * 360)}deg`,
      });
    }
    setBlocks(newBlocks);
  };

  useEffect(() => {
    generateRandomBlocks();
  }, []);

  return (
    <div className="app-container">
      {/* tinker Hub logo */}
      <div className="logo"><h3>Tinker Hub</h3>
      <img src="./public/TinkerHub.png"/></div>
       {/* Random color blocks  */}
      <div className="color-block">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="random-block"
            style={{
              position: "absolute",
              left: block.left,
              top: block.top,
              backgroundColor: block.backgroundColor,
              width: block.width,
              height: block.height,
              zIndex: -99,
              transform: `rotate(${block.rotate})`, // Apply the random rotation
            }}
          ></div>
        ))}
      </div>
      {/* Top Menu Button */}
      <button  onClick={toggleMenu}  className="menu-toggle-button">
        <>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </>
      </button>

      {/* Sliding Menu */}
      <div className={`sliding-menu ${menuOpen ? "menu-open" : "menu-closed"}`}>
        <div className="menu-content">
          <h2 className="menu-title">Menu {/* Top Menu Button */}
            <button onClick={toggleMenu}  className="menu-toggle-button-close">
               <div className="close-icon">&times;</div> 
            </button></h2>
         

          <ul className="menu-list">
            <li>
              <button className="menu-item">Profile</button>
            </li>
            <li>
              <button className="menu-item">Login</button>
            </li>
            <li>
              <button className="menu-item">Settings</button>
            </li>
          </ul>

          <hr className="menu-divider" />

        </div>
      </div>
              
          <h2 className="search-title">Search People</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="Enter skill"
          value={skillInput}
          onChange={handleSkillInputChange}
          className="skill-input"
        />

        {/* Dropdown for skills */}
        {skillInput && (
          <ul className="skill-dropdown">
            {filteredSkills.map((skill) => (
              <li
                key={skill}
                onClick={() => handleAddSkill(skill)}
                className="skill-dropdown-item"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

      <div className="selected-skills-container">
        <h3 className="selected-skills-title">Selected Skills:</h3>
        <div className="selected-skills">
          {selectedSkills.map((skill) => (
            <span
              key={skill}
              className="selected-skill-badge"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="search-button"
      >
        Search
      </button>
      {/* Results */}
      <div className="results-container">
        <h2 className="results-title">Results</h2>
        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((person) => (
              <li
                key={person.id}
                className="result-item"
              >
                <p>
                  <strong className="result-label">Name:</strong> {person.name}
                </p>
                <p>
                  <strong className="result-label">Skills:</strong> {person.skills.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results-message">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
