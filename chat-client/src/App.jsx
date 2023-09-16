import { useState, useRef } from "react";
import "./App.css";

const wsc = new WebSocket("ws://localhost:8000/connect");
function App() {
  const input = useRef();
  const userId = useRef();
  const [chats, setChats] = useState([]);

  wsc.onmessage = (e) => {
    setChats([...chats, e.data]);
  };

  const style = {
    container: {
      width: "600px",
      backgroundColor: "#000f",
      margin: "20px auto",
      padding: "20px",
    },
    item: {
      backgroundColor: "grey",
      margin: "20px",
      padding: "10px",
      borderRadius: "10px",
    },
    form: {
      margin: "20px",
      padding: "10px",
      display: "flex",
    },
    input: {
      flexGrow: 1,
    },
  };
  const send = () => {
    const msg = input.current.value;
    const uid = userId.current.value;
    if (!msg) return;
    wsc.send(JSON.stringify({ msg, uid }));

    input.current.value = "";
    input.current.focus();
  };
  return (
    <div style={style.container}>
      {chats?.map((chat) => {
        return (
          <div key={chat} style={style.item}>
            {chat}
          </div>
        );
      })}

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        style={style.form}
      >
        <input type="text" placeholder="Name" ref={userId} />
        <input
          type="text"
          placeholder="Ur Message"
          ref={input}
          style={style.input}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
