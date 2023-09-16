import { useState, useRef } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const wsc = new WebSocket("ws://localhost:8000/connect");
function App() {
  const input = useRef();
  const userId = useRef();
  const [chats, setChats] = useState([]);
  const [id, setId] = useLocalStorage("id");
  wsc.onmessage = (e) => {
    setChats([...chats, e.data]);
  };

  const send = () => {
    const msg = input.current.value;
    const uid = userId.current.value;
    if (!msg) return;
    wsc.send(JSON.stringify({ msg, uid }));

    input.current.value = "";
    input.current.focus();
  };
  return !id ? <Login setId={setId} /> : <Dashboard id={id} />;
}

export default App;
