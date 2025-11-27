import React, { useState } from "react";

const StudentForm = ({ onSubmit, initialData, onCancel }) => {
  const [rollNumber, setRollNumber] = useState(initialData ? initialData.rollNumber : "");
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [section, setSection] = useState(initialData ? initialData.section : "");
  const [marks, setMarks] = useState(initialData ? initialData.marks : "");
  const [grade, setGrade] = useState(initialData ? initialData.grade : "");

  const [errors, setErrors] = useState({});

  // --- NEW: Helper to calculate grade automatically ---
  const calculateGrade = (score) => {
    const m = parseFloat(score);
    if (isNaN(m)) return "";
    if (m >= 91) return "O";
    if (m >= 81) return "A+";
    if (m >= 71) return "A";
    if (m >= 61) return "B+";
    if (m >= 51) return "B";
    if (m >= 41) return "C";
    if (m >= 33) return "P";
    return "F";
  };

  // --- NEW: Handle Marks Change ---
  const handleMarksChange = (e) => {
    const val = e.target.value;
    setMarks(val);
    
    // Auto-select grade if the value is a valid number
    if (val !== "") {
      const autoGrade = calculateGrade(val);
      setGrade(autoGrade);
    } else {
      setGrade(""); // Reset if marks are empty
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!rollNumber || !String(rollNumber).trim()) newErrors.rollNumber = "Roll Number is required";
    if (!name.trim()) newErrors.name = "Name is required";
    if (!section.trim()) newErrors.section = "Section is required";
    
    if (marks === "") {
        newErrors.marks = "Marks are required";
    } else if (marks < 0 || marks > 100) {
        newErrors.marks = "Marks must be between 0 and 100";
    }
    
    // Grade is now auto-calculated, but we still ensure it exists
    if (!grade) newErrors.grade = "Grade is required (Enter valid marks)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        const studentData = { rollNumber, name, section, marks, grade };
        onSubmit(studentData);
    }
  };

  return (
    <div className="form-card-wrapper">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {initialData ? "Edit Student" : "Add New Student"}
      </h2>
      
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Roll Number</label>
          <input 
            type="text" 
            value={rollNumber} 
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="e.g. 101" 
          />
          {errors.rollNumber && <div className="error-text">{errors.rollNumber}</div>}
        </div>

        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name" 
          />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Section</label>
          <input 
            type="text" 
            value={section} 
            onChange={(e) => setSection(e.target.value)} 
            placeholder="e.g. Class 10-A"
          />
          {errors.section && <div className="error-text">{errors.section}</div>}
        </div>

        <div className="form-group">
          <label>Marks (0-100)</label>
          <input 
            type="number" 
            value={marks} 
            onChange={handleMarksChange} /* NEW: Uses the auto-handler */
            placeholder="Enter marks to auto-select grade"
          />
          {errors.marks && <div className="error-text">{errors.marks}</div>}
        </div>

        <div className="form-group">
          <label>Grade (Auto-calculated)</label>
          <select 
            value={grade} 
            disabled /* NEW: User cannot manually change this anymore */
            style={{ backgroundColor: '#f9f9f9', cursor: 'not-allowed' }}
          >
            <option value="">-- Auto-selected --</option>
            <option value="O">O (91-100)</option>
            <option value="A+">A+ (81-89)</option>
            <option value="A">A (71-80)</option>
            <option value="B+">B+ (61-70)</option>
            <option value="B">B (51-60)</option>
            <option value="C">C (41-50)</option>
            <option value="P">P (33-40)</option>
            <option value="F">F (Below 33)</option>
          </select>
          {errors.grade && <div className="error-text">{errors.grade}</div>}
        </div>

        <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-success">
              {initialData ? "Update Student" : "Save Student"}
            </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;