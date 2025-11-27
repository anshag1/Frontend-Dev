const API_URL = "http://localhost:5000/students";

export const getAllStudents = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const createStudent = async (student) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding student:", error);
  }
};

export const updateStudent = async (id, student) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating student:", error);
  }
};

export const deleteStudent = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};
