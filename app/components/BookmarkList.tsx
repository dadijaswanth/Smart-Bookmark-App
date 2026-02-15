"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  user_id: string;
  created_at: string;
};

export default function BookmarkList({
  user,
  refresh
}: {
  user: User;
  refresh: number;
}) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const loadBookmarks = async () => {
      const { data } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setBookmarks(data || []);
    };

    loadBookmarks();
  }, [user.id, refresh]);

  const deleteBookmark = async (id: string) => {
    setDeletingId(id);

    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", id);

    if (!error) {
      setBookmarks(prev => prev.filter(b => b.id !== id));
    }

    setDeletingId(null);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl mb-6 text-black">Saved Bookmarks</h2>

      {bookmarks.length === 0 && (
        <p className="text-black">No bookmarks added yet</p>
      )}

      <div className="space-y-4">
        {bookmarks.map((b) => (
          <div
            key={b.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-black">{b.title}</p>
              <a
                href={b.url}
                target="_blank"
                className="text-blue-600 text-sm"
              >
                {b.url}
              </a>
            </div>

            <button
              onClick={() => deleteBookmark(b.id)}
              disabled={deletingId === b.id}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-60 cursor-pointer"
            >
              {deletingId === b.id && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {deletingId === b.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
