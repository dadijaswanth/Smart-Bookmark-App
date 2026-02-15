"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import AddBookmark from "../components/AddBookmark";
import BookmarkList from "../components/BookmarkList";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [refresh, setRefresh] = useState(0);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  const reload = () => setRefresh(prev => prev + 1);

  const logout = async () => {
    setLoggingOut(true);
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">My Bookmarks</h1>

        <button
          onClick={logout}
          disabled={loggingOut}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold disabled:opacity-60"
        >
          {loggingOut && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>

      {/* BODY */}
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8">
        <AddBookmark user={user} onAdded={reload} />
        <BookmarkList user={user} refresh={refresh} />
      </div>
    </div>
  );
}
