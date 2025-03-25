import MiniDrawer from "../components/Drawer";
import React, { useEffect, useState } from "react";

function Categories() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("Keys")) || []
  );

  useEffect(() => {
    localStorage.setItem("Keys", JSON.stringify(categories));
    const result = JSON.parse(localStorage.getItem("Keys"));
    console.log("Result", result, typeof result);
   
  }, [categories]);

  function handleInputChange(e) {
    setCategory(e.target.value);
  }

  function addCategory() {
    if (category.trim() !== "") {
      setCategories([...categories, category]);
      setCategory("");
    }
  }

  

  return (
    <div style={styles.container}>
    <MiniDrawer showContent={false} />
      <h1 style={styles.heading}>Categories</h1>

      {/* Input Field and Button */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={category}
          onChange={handleInputChange}
          placeholder="Enter category..."
          style={styles.input}
        />
        <button onClick={addCategory} style={styles.button}>
          Add
        </button>
      </div>

      {/* Display Categories */}
      <div style={styles.categoriesContainer}>
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <div key={index} style={styles.categoryCard}>
              {item}
            </div>
          ))
        ) : (
          <p style={styles.noCategoryText}>No categories added yet</p>
        )}
      </div>
    </div>
  );
}

// Styling Object
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "250px",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    transition: "0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.4)",
  },
  categoriesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "600px",
    justifyContent: "center",
    marginTop: "20px",
  },
  categoryCard: {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
    transition: "0.3s ease",
  },
  noCategoryText: {
    color: "#888",
    fontSize: "18px",
  },
};

export default Categories;
