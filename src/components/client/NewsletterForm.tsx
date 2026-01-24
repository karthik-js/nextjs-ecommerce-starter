"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      />
      <button
        type="submit"
        className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition"
      >
        Subscribe
      </button>
    </form>
  );
}
