"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {IconLogout2,IconUser,IconUsersPlus,IconNews,IconPhotoCheck, IconUpload, IconReport, IconBook, IconMessage,
} from "@tabler/icons-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/users", label: "User", icon: <IconUser /> },
    { href: "/admin/roles", label: "Hak Akses", icon: <IconUsersPlus /> },
    { href: "/admin/chat", label: "Chat Room", icon: <IconMessage /> },
    { href: "/admin/news", label: "Berita", icon: <IconNews /> },
    { href: "/admin/feed", label: "Feed", icon: <IconPhotoCheck /> },
    { href: "/admin/feedback", label: "Feed back", icon: <IconBook /> },
  ];

  return (
    <section className="flex h-screen justify-center">
      <aside className="bg-white w-[15%] border-r border-gray-300 p-4">
        <h1 className="text-[30px] mb-5 font-sans font-bold text-center">Connect</h1>
        <nav className="flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="w-full">
                <button
                  className={`flex items-center gap-2 py-2 px-5 w-[90%] rounded-[10px] border ${
                    isActive ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              </Link>
            );
          })}
          <Link href="..">
            <button className="flex items-center gap-2 py-2 px-5 w-[90%] hover:bg-gray-100 rounded-[10px] border">
              <IconLogout2 /> Logout
            </button>
          </Link>
        </nav>
      </aside>

      <main className="bg-white w-[80%]">{children}</main>
    </section>
  );
}
