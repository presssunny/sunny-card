import "./App.css";
import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);
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
          <input placeholder="insert your name "></input>
          <input placeholder="insert your email "></input>
          <input placeholder="message "></input>
          <button className="send"> send the message</button>
          <div> </div>
          <button className=" close the window"> close the window </button>
        </div>
      )}
    </div>
  );
}

export default App;
