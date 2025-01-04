import React, { useState } from "react";
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [results, setResults] = useState([]);

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

  return (
    <div className="app-container">
      {/* Top Menu Button */}
      <button
        onClick={toggleMenu}
        className="menu-toggle-button"
      >
        Menu
      </button>

      {/* Sliding Menu */}
      <div
        className={`sliding-menu ${menuOpen ? "menu-open" : "menu-closed"}`}
      >
        <div className="menu-content">
          <h2 className="menu-title">Menu</h2>

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
        </div>
      </div>

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
