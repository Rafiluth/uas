"use client";

import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Tulis pesan..."
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Kirim
      </button>
    </form>
  );
}
