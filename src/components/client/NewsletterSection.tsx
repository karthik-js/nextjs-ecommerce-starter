"use client";

import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-emerald-100 mb-8">
          Subscribe to our newsletter for exclusive deals and updates
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
