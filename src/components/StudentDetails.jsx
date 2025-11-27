import React from "react";

const StudentDetails = ({ student, onBack }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '30px auto' }}>
      <h2 style={{ textAlign: "center", marginBottom: '20px' }}>Student Result Details</h2>
      <div className="details-card">
        {/* NEW: Roll Number Display */}
        <div className="detail-row"><strong>Roll Number:</strong> {student.rollNumber || "N/A"}</div>
        <hr />
        
        <div className="detail-row"><strong>ID:</strong> {student.id}</div>
        <div className="detail-row"><strong>Name:</strong> {student.name}</div>
        <div className="detail-row"><strong>Section:</strong> {student.section}</div>
        <hr />
        <div className="detail-row"><strong>Total Marks:</strong> {student.marks}</div>
        <div className="detail-row" style={{ color: '#27ae60', fontWeight: 'bold' }}>
            <strong>Grade:</strong> {student.grade}
        </div>
      </div>
      <br />
      <button className="btn-primary" onClick={onBack}>Back to List</button>
    </div>
  );
};

export default StudentDetails;