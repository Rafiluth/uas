"use client";
import { useRouter } from "next/navigation";
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data,setData] = useState({
    username:"",
    password:""});

  console.log (data);

  function handleSubmit() {
    router.push("/admin/users");
  }
  
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-3 items-center p-8 border-2 border-slate-300 rounded-xl w-[420px]">
        <p className="font-bold text">Connect With Us</p>
        <Input placeholder="Masukkan Email" 
        onChange={(e) =>
          setData((CurrentData) => ({
            ...CurrentData,
            username: e.target.value,
          }))
        }
        />

        <Input placeholder="Masukkan Password" onChange={(e) =>
          setData((CurrentData) => ({
            ...CurrentData,
            password: e.target.value,
          }))
        }
        />

        <Button onClick={(handleSubmit)}>Sign In</Button>
      </div>
    </main>
  );
}