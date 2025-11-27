import React, { useState } from "react";

const StudentList = ({ students, hasLoaded, loading, onLoad, onAdd, onEdit, onDelete, onView }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showList, setShowList] = useState(true);

  // --- Logic: Filter -> Sort -> Paginate ---
  const filteredStudents = students.filter((student) => {
    // NEW: Allow searching by Roll Number as well
    const term = searchTerm.toLowerCase();
    const rollNo = student.rollNumber ? String(student.rollNumber).toLowerCase() : "";
    
    return (
      student.name.toLowerCase().includes(term) ||
      student.section.toLowerCase().includes(term) ||
      rollNo.includes(term)
    );
  });

  const sortedStudents = [...filteredStudents];
  if (sortConfig.key !== null) {
    sortedStudents.sort((a, b) => {
      // Handle potential missing values safely
      let valA = a[sortConfig.key] || "";
      let valB = b[sortConfig.key] || "";

      // Special handling for numeric sorting if needed, but string compare usually works for simple needs
      if (valA < valB) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = sortedStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);

  // --- RENDER ---
  return (
    <div className="list-card-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2 style={{ margin: 0, color: '#2c3e50' }}>Student List</h2>
        <div>
            <button className="btn-primary" onClick={onLoad}>Load Students</button>
            <button className="btn-success" onClick={onAdd}>+ Add Student</button>
        </div>
      </div>

      {loading && <div className="spinner"></div>}

      {!loading && students.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#777", fontSize: "1.1em" }}>
          {hasLoaded 
            ? "No students added yet. Click '+ Add Student' to create one." 
            : "No students loaded. Click 'Load Students' to begin."
          }
        </p>
      )}

      {!loading && students.length > 0 && showList && (
        <>
          <div className="search-wrapper">
            <input
              type="text"
              className="modern-search"
              placeholder="🔍 Search by Roll No, Name, or Section..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <table className="styled-table">
            <thead>
              <tr>
                {/* NEW: Roll No Column */}
                <th className="sortable" onClick={() => handleSort('rollNumber')}>
                    Roll No {sortConfig.key === 'rollNumber' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
                </th>
                <th className="sortable" onClick={() => handleSort('name')}>
                    Name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
                </th>
                <th className="sortable" onClick={() => handleSort('section')}>
                    Section {sortConfig.key === 'section' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
                </th>
                <th className="sortable" onClick={() => handleSort('marks')}>
                    Marks {sortConfig.key === 'marks' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
                </th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.length > 0 ? (
                currentStudents.map((student) => (
                  <tr key={student.id}>
                    {/* NEW: Display Roll Number */}
                    <td>{student.rollNumber || "-"}</td>
                    <td><strong>{student.name}</strong></td>
                    <td>{student.section}</td>
                    <td>{student.marks}</td>
                    <td>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: student.grade === 'F' ? '#e74c3c' : '#27ae60' 
                        }}>
                            {student.grade}
                        </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-secondary" onClick={() => onView(student)}>View</button>
                        <button className="btn-warning" onClick={() => onEdit(student)}>Edit</button>
                        <button className="btn-danger" onClick={() => onDelete(student.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                 <tr>
                    <td colSpan="6" style={{textAlign: 'center', padding: '30px', color: '#888'}}>
                        No matching students found
                    </td>
                 </tr>
              )}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo; Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                 <button
                    key={index}
                    className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                 >
                    {index + 1}
                 </button>
              ))}

              <button 
                className="page-btn" 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &raquo;
              </button>
            </div>
          )}
        </>
      )}

      {!loading && students.length > 0 && (
        <div className="bottom-actions">
            <button 
                className="btn-secondary" 
                style={{ minWidth: '130px' }} 
                onClick={() => setShowList(!showList)}
            >
                {showList ? "Hide List 🔼" : "Show List 🔽"}
            </button>
        </div>
      )}

    </div>
  );
};

export default StudentList;