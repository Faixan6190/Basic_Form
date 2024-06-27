import { useState } from "react";
import "./App.css";
import AppRouter from "./config/routes";
import User from "./context/UserContext";
import Chat from "./context/ChatContext";
import { useReducer } from "react";

const INITIAL_STATE = {
  theme: "light",
  title: "test",
  header: "testing",
  footer: "footer",
};

function reducer(state, action) {
  return state;
}

function App() {
  const [user, setUser] = useState({ email: "faizan@gmail.com", name: "Faizan" });
  const [chat, setChat] = useState({ text: "Hello... How Are You...!" });
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log("state", state);
  return (
    <div>
      <h1>Use Reducer</h1>
    </div>
    // <User.Provider value={{ user, setUser }}>
    //   <Chat.Provider value={{ chat, setChat }}>
    //     <AppRouter />
    //   </Chat.Provider>
    // </User.Provider>
  );
}

export default App;
