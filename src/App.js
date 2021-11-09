import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="372afcad-55f8-4255-bf03-3514f6947291"
        userName="Admin"
        userSecret="pass1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <a
        href="https://www.youtube.com/watch?v=jcOKU9f86XE&ab_channel=JavaScriptMastery"
        target="_blank"
        rel="noreferrer"
      >
        Youtube Link
      </a>
    </>
  );
}

export default App;
