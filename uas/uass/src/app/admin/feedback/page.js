"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { IconSend, IconCheck, IconX } from "@tabler/icons-react";

export default function FeedbackPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nama.trim().length < 3 || pesan.trim().length < 5) {
      setStatus("error");
      setErrorMsg("Nama minimal 3 huruf dan pesan minimal 5 karakter.");
      return;
    }

    const { error } = await supabase.from("feedback").insert([
      { nama: nama.trim(), pesan: pesan.trim() },
    ]);

    if (error) {
      setStatus("error");
      setErrorMsg("Gagal mengirim feedback.");
    } else {
      setStatus("success");
      setNama("");
      setPesan("");
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Kirim Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nama Anda"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Tulis feedback di sini..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <IconSend size={18} /> Kirim
        </button>

        {status === "success" && (
          <p className="flex items-center text-green-600 gap-2 mt-2">
            <IconCheck size={16} /> Feedback berhasil dikirim!
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center text-red-600 gap-2 mt-2">
            <IconX size={16} /> {errorMsg}
          </p>
        )}
      </form>
    </main>
  );
}
