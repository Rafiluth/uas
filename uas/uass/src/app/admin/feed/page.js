"use client";

import { useState } from "react";
import useSWR from "swr";
import { IconMessageCircle, IconThumbUp } from "@tabler/icons-react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FeedPage() {
  const { data: posts, isLoading: loadingPosts, error: errorPosts } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  const { data: comments, isLoading: loadingComments, error: errorComments } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  const [openPostId, setOpenPostId] = useState(null);
  const [likes, setLikes] = useState({}); // key = post.id, value = jumlah like

  const handleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
  };

  if (loadingPosts || loadingComments)
    return <p className="p-4">Memuat...</p>;

  if (errorPosts || errorComments)
    return <p className="p-4 text-red-500">Gagal mengambil data.</p>;

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Feed</h1>

      {posts.slice(0, 10).map((post) => {
        const postComments = comments.filter((c) => c.postId === post.id);

        return (
          <div key={post.id} className="mb-4 p-4 border rounded shadow-sm">
            <img
              src={`https://picsum.photos/id/${post.id + 10}/600/300`}
              alt={post.title}
              className="mb-2 w-full h-[200px] object-cover rounded"
            />

            <h2 className="font-bold text-lg mb-1">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.body}</p>

            <div className="flex items-center gap-4 text-sm mb-2">
              <button
                onClick={() => setOpenPostId(openPostId === post.id ? null : post.id)}
                className="text-blue-600 flex items-center hover:underline"
              >
                <IconMessageCircle className="w-4 h-4 mr-1" />
                {openPostId === post.id ? "Sembunyikan Komentar" : "Lihat Komentar"}
              </button>

              <button
                onClick={() => handleLike(post.id)}
                className="text-gray-700 flex items-center hover:text-blue-600"
              >
                <IconThumbUp className="w-4 h-4 mr-1" />
                {likes[post.id] || 0} Like
              </button>
            </div>

            {openPostId === post.id && (
              <div className="mt-2 pl-4 text-sm text-gray-600 space-y-1">
                {postComments.map((comment) => (
                  <div key={comment.id} className="border-l border-gray-300 pl-2">
                    <p className="font-semibold">{comment.name}</p>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
