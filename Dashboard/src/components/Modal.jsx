import React, { useState, useEffect } from "react";

function Modal({ closeModal, addProduct }) {
  const [data, setData] = useState({ title: "", desc: "", category: "" });

  function submit() {
    if (data.title.trim() === "" || data.desc.trim() === "" || data.category === "") {
      alert("Please fill out all fields!");
      return;
    }
    addProduct(data);
    setData({ title: "", desc: "", category: "" });
    closeModal();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  // Fade-in animation on open
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("modal-box").style.opacity = "1";
      document.getElementById("modal-box").style.transform = "translateY(0)";
    }, 50);
  }, []);

  const categories = JSON.parse(localStorage.getItem("Keys")) || [];

  return (
    <div style={styles.overlay}>
      <div id="modal-box" style={styles.modal}>
        <button onClick={closeModal} style={styles.closeButton}>
          ✖
        </button>
        <h2 style={styles.heading}>Add Product</h2>

        <label style={styles.label}>Product Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter product title"
        />

        <label style={styles.label}>Product Description</label>
        <textarea
          name="desc"
          value={data.desc}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Enter product description"
        />

        <label style={styles.label}>Category</label>
        <select name="category" value={data.category} onChange={handleChange} style={styles.select}>
          <option value="" disabled>Select a category</option>
          {categories.map((item, index) => (
            <option key={index} value={item} style={styles.option}>
              {item}
            </option>
          ))}
        </select>

        <button onClick={submit} style={styles.submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Modal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    width: "400px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    opacity: "0",
    transform: "translateY(-30px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "white",
  },
  heading: {
    color: "white",
    fontSize: "22px",
    marginBottom: "15px",
  },
  label: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: "14px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    height: "80px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    outline: "none",
    resize: "none",
  },
  select: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    outline: "none",
    cursor: "pointer",
  },
  option: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "black",
    padding: "8px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#FF4C4C",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};
