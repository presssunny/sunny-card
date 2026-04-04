import "./App.css";
import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [insertName, setInsertName] = useState("");
  const [insertEmail, setInsertEmail] = useState("");
  const [insertMessage, setInsertMessage] = useState("");

  const sendEmail = () => {};

  return (
    <div className="card">
      <h1>Sunny Press</h1>
      <p> Software Developer</p>
      <p> presssunny@gmail.com</p>
      <button className="btn" onClick={() => setShowMessage(true)}>
        contact with me
      </button>
      {showMessage && (
        <div className="modal">
          <input
            value={insertName}
            onChange={(e) => setInsertName(e.target.value)}
            placeholder="insert your name "
          />
          <input
            value={insertEmail}
            onChange={(e) => setInsertEmail(e.target.value)}
            placeholder="insert your email "
          />
          <input
            value={insertMessage}
            onChange={(e) => setInsertMessage(e.target.value)}
            placeholder="message "
          />
          <button className="send"> send the message now!</button>
          <div> </div>
          <button className=" close-btn" onClick={() => setShowMessage(false)}>
            close the window{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
