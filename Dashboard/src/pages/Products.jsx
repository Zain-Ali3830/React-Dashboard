import MiniDrawer from "../components/Drawer";
import Modal from "../components/Modal";
import { useState } from "react";

const Fetch = () => {
    const [modal, setModal] = useState(false);
    const [datas, setDatas] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({ title: "", desc: "" });

    function handleModal(){
              if(modal===true){
                setModal(false)
                setButton(false)
              }
              else{
              setModal(true)
              setButton(true)
              }
            }

    function addProduct(newProduct) {
        setDatas([...datas, newProduct]);
    }

    function deleteProduct(index) {
        const filteredData = datas.filter((_, i) => i !== index);
        setDatas(filteredData);
    }

    function startEdit(index) {
        setEditIndex(index);
        setEditData(datas[index]);
    }

    function handleEditChange(e) {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    }

    function saveEdit(index) {
        const updatedData = [...datas];
        updatedData[index] = editData;
        setDatas(updatedData);
        setEditIndex(null);
    }

    return (
        <div style={styles.container}>
            <MiniDrawer showContent={false} />
            <h1 style={styles.heading}>Data From User</h1>

            <div style={styles.dataContainer}>
                {datas.length > 0 ? (
                    datas.map((item, index) => (
                        <div key={index} style={styles.card}>
                            {editIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        name="title"
                                        value={editData.title}
                                        onChange={handleEditChange}
                                        style={styles.input}
                                    />
                                    <input
                                        type="text"
                                        name="desc"
                                        value={editData.desc}
                                        onChange={handleEditChange}
                                        style={styles.input}
                                    />
                                    <button onClick={() => saveEdit(index)} style={styles.saveButton}>Save</button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h2>Title:</h2>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <h2>Description:</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div><h2>Category</h2></div>
                                    <div>
                                        <button onClick={() => deleteProduct(index)} style={styles.deleteButton}>Delete</button>
                                    </div>
                                    <div>
                                        <button onClick={() => startEdit(index)} style={styles.editButton}>Edit</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p style={styles.noDataText}>No data available</p>
                )}
            </div>

            {modal && <Modal closeModal={handleModal} addProduct={addProduct} />}

            <button style={styles.button} onClick={handleModal}>
                {modal ? "Close" : "Open"}
            </button>
        </div>
    );
};

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
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
    dataContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "900px",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "90%",
        maxWidth: "800px",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
    },
    noDataText: {
        color: "#888",
        fontSize: "18px",
    },
    button: {
        marginTop: "30px",
        padding: "12px 25px",
        fontSize: "18px",
        fontWeight: "bold",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "#fff",
        transition: "0.3s ease",
        boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.4)",
    },
    deleteButton: {
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#dc3545",
        color: "#fff",
        marginRight: "10px",
    },
    editButton: {
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#ffc107",
        color: "#000",
    },
    saveButton: {
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#28a745",
        color: "#fff",
        marginLeft: "10px",
    },
    input: {
        padding: "8px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginRight: "10px",
    }
};

export default Fetch;
