import Message from "./Message";
import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((mess) => (
        <Message message={mess} key={mess.id} />
      ))}
    </div>
  );
};

export default Messages;
