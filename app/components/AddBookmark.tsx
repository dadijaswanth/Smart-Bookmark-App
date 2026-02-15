"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function AddBookmark({
  user,
  onAdded
}: {
  user: User;
  onAdded: () => void;
}) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const addBookmark = async () => {
    if (!title || !url) return;

    setLoading(true);

    const { error } = await supabase.from("bookmarks").insert([
      {
        title,
        url,
        user_id: user.id,
      },
    ]);

    setLoading(false);

    if (!error) {
      onAdded();
      setTitle("");
      setUrl("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">
      <h2 className="text-xl font-semibold mb-6 text-black">Add New Bookmark</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Title</label>
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Google"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-black">URL</label>
          <input
            className="w-full border rounded-lg p-2"
            placeholder="https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          onClick={addBookmark}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Adding..." : "Add Bookmark"}
        </button>
      </div>
    </div>
  );
}
