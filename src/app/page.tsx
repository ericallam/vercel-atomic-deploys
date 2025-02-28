"use client";

import { useState } from "react";
import { triggerTaskAction } from "./actions"; // Adjust the import path as needed

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function onButtonClick() {
    setLoading(true);
    try {
      await triggerTaskAction();
    } catch (error) {
      console.error("Error calling server action:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <button
          onClick={onButtonClick}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          {loading ? "Processing..." : "Trigger task"}
        </button>
      </div>
    </main>
  );
}
