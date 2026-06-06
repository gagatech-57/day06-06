import { useState } from "react";

const MarkList = () => {
  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState("");

  const handleAddMark = () => {
    const mark = Number(newMark);

    if (newMark.trim() === "") {
      alert("Please enter a mark.");
      return;
    }

    if (mark > 100 || mark < 0) {
      alert("Please enter a valid mark between 0 and 100.");
      return;
    }

    if (mark >= 90) {
      alert("Grade is A");
      alert(
        "You are eligible for clarification. Use it for your future. Dream Big!"
      );
    } else if (mark >= 80) {
      alert("Grade is B");

      alert(
        "You are eligible for clarification. Use it for your future. Dream Big!"
      );
    } else if (mark >= 70) {
      alert("Grade is C");
      alert(
        "You are not eligible for clarification"
      );
    } else if (mark >= 60) {
      alert("Grade is D");
      alert(
        "You are not eligible for clarification"
      );
    } else if (mark >= 35) {
      alert("Grade is E");
      alert(
        "You are not eligible for clarification"
      );
    } else {
      alert("Grade is F");
      alert(
        "Next time, work harder and try to improve your performance. Don't give up!"
      );
    }

    setMarks([...marks, mark]);
    setNewMark("");
  };
  const style = {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: "poppins, sans-serif",
    fontSize: "25px",
    fontWeight: "bold",
    boder: "1px solid #e72525",
    borderRadius: "20px ",
  };
  const titleStyle = {
    color: "#000000",
    marginBottom: "10px",
  };
  const inputStyle = {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #0d2450",
    fontSize: "16px",
    };
    const buttonStyle = {
      padding: "10px 20px",
      margin: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#007bff",
        color: "#0e1749",

        cursor: "pointer",
        fontSize: "16px",
      };
      const buttonHoverStyle = {
        backgroundColor: "#0056b3",
      };


  return (
    <div style={style}>
      <h1 style={titleStyle}>Mark List</h1>

      <input
        type="number"
        value={newMark}
        onChange={(e) => setNewMark(e.target.value)}
        placeholder="Enter a mark" style={inputStyle}
      />
      <button onClick={handleAddMark} style={buttonStyle}>Add Mark</button>
    
   <ul>
      {marks.map((mark, index) => (
        <li key={index}>{mark}</li>
      ))}  
    </ul>

    </div>
  );
};

export default MarkList;