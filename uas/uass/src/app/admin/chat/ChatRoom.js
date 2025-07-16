"use client";

import { useState } from "react";
import { groups, initialMessages } from "./data";
import MessageInput from "./MessageInput";
import { IconTrash } from "@tabler/icons-react";

export default function ChatRoom() {
  const [selectedGroupId, setSelectedGroupId] = useState(1);
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const newMessage = { from: "Saya", text };
    setMessages({
      ...messages,
      [selectedGroupId]: [...messages[selectedGroupId], newMessage],
    });
  };

  const handleDelete = (index) => {
    const filtered = messages[selectedGroupId].filter((_, i) => i !== index);
    setMessages({
      ...messages,
      [selectedGroupId]: filtered,
    });
  };

  return (
    <div className="flex p-4 gap-4">

      <aside className="w-1/4 border-r pr-2">
        <h2 className="font-bold mb-2">Grup</h2>
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <button
                onClick={() => setSelectedGroupId(group.id)}
                className={`w-full text-left p-2 rounded ${
                  selectedGroupId === group.id ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                {group.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="w-3/4">
        <h2 className="font-bold mb-2">
          Chat: {groups.find((g) => g.id === selectedGroupId).name}
        </h2>

        <div className="border h-64 p-2 overflow-y-scroll bg-gray-50 rounded">
          {messages[selectedGroupId]?.map((msg, i) => (
            <div key={i} className="mb-2 flex justify-between items-center">
              <div>
                <strong>{msg.from}:</strong> {msg.text}
              </div>
              {msg.from === "Saya" && (
                <button
                  onClick={() => handleDelete(i)}
                  className="ml-2 hover:text-red-600 text-gray-500"
                  title="Hapus pesan"
                >
                  <IconTrash size={18} />
                </button>
              )}
            </div>
          ))}
        </div>

        <MessageInput onSend={handleSend} />
      </section>
    </div>
  );
}
