/* eslint-disable @next/next/no-img-element */
"use client";

import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Smart Bookmark App
        </h1>

        <p className="text-gray-500 mb-6">
          Save and manage your bookmarks privately
        </p>

        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
        >
          <img
            src="/assets/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

      </div>
    </main>
  );
}
