import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import { getAllStudents, createStudent, updateStudent, deleteStudent } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState("list");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  // NEW: Loading State
  const [loading, setLoading] = useState(false);

  const handleLoadStudents = async () => {
    setLoading(true); // Start spinner
    // Simulate a small delay so you can see the spinner (optional)
    // await new Promise(resolve => setTimeout(resolve, 800)); 
    const data = await getAllStudents();
    setStudents(data);
    setLoading(false); // Stop spinner
    setHasLoaded(true);
  };

  const goToList = () => {
    setView("list");
    setSelectedStudent(null);
  };

  const handleAddClick = () => {
    setSelectedStudent(null);
    setView("form");
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setView("form");
  };

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setView("details");
  };

  const handleFormSubmit = async (studentData) => {
    setLoading(true); // Show loading while saving
    if (selectedStudent) {
      await updateStudent(selectedStudent.id, studentData);
      alert("Student Updated Successfully!");
    } else {
      await createStudent(studentData);
      alert("Student Added Successfully!");
    }
    setLoading(false);
    goToList();
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setLoading(true);
      await deleteStudent(id);
      setLoading(false);
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container">
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
         <h1>Student Result Management System</h1>
      </header>

      <main>
        {/* Pass 'loading' to StudentList */}
        {view === "list" && (
          <StudentList
            students={students}
            hasLoaded={hasLoaded}
            loading={loading} 
            onLoad={handleLoadStudents}
            onAdd={handleAddClick}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
            onView={handleViewClick}
          />
        )}

        {view === "form" && (
          <StudentForm
            initialData={selectedStudent}
            onSubmit={handleFormSubmit}
            onCancel={goToList}
          />
        )}

        {view === "details" && (
          <StudentDetails
            student={selectedStudent}
            onBack={goToList}
          />
        )}
      </main>
    </div>
  );
}

export default App;