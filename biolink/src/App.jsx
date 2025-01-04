import React, { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [results, setResults] = useState([]);

  // List of all skills
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

  // Simulated data
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

    // Filter skills dynamically based on input
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
    setSkillInput(""); // Clear input
    setFilteredSkills(allSkills); // Reset filtered skills
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
    <div className="min-h-screen bg-gray-100">
      {/* Top Menu Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Menu
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md w-64 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>

          <ul>
            <li className="mb-4">
              <button className="w-full text-left px-4 py-2 text-lg">Profile</button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left px-4 py-2 text-lg">Login</button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left px-4 py-2 text-lg">Settings</button>
            </li>
          </ul>

          <hr className="my-4" />

          <h2 className="text-xl font-semibold mb-4">Search People</h2>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            placeholder="Enter skill"
            value={skillInput}
            onChange={handleSkillInputChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />

          {/* Dropdown for skills */}
          {skillInput && (
            <ul className="border border-gray-300 rounded bg-white max-h-40 overflow-y-auto">
              {filteredSkills.map((skill) => (
                <li
                  key={skill}
                  onClick={() => handleAddSkill(skill)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4">
            <h3 className="font-semibold">Selected Skills:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Results</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((person) => (
              <li
                key={person.id}
                className="p-4 border border-gray-300 rounded mb-2"
              >
                <p>
                  <strong>Name:</strong> {person.name}
                </p>
                <p>
                  <strong>Skills:</strong> {person.skills.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
