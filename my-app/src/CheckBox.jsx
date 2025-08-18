import React, { useState } from "react";

const services = [
  "Website Design", "UX/UI", "Motion Design", "Landing page",
  "Content Creation", "SEO", "Branding", "Webflow Development",
];

const budgets = ["Free", "≤ $10k", "> $10k"];

export default function FullContactForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    interests: [], budget: "", projectDetails: "", isHuman: false,
  });

  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 sm:px-6">
      
      {/* Name, Company, Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Evan"
            className="w-full border-b border-gray-300 outline-none text-gray-600 placeholder-gray-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Company</label>
          <input
            type="text"
            placeholder="Microsoft"
            className="w-full border-b border-gray-300 outline-none text-gray-600 placeholder-gray-400"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 mt-4 md:mt-0">Your Email</label>
          <input
            type="email"
            placeholder="evan@microsoft.com"
            className="w-full border-b border-gray-300 outline-none text-gray-600 placeholder-gray-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 mt-4 md:mt-0">Your Phone</label>
          <input
            type="text"
            placeholder="Your number phone"
            className="w-full border-b border-gray-300 outline-none text-gray-600 placeholder-gray-400"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Interests */}
      <div className="mt-10">
        <p className="font-medium mb-3">I’m interested in...</p>
        <div className="flex flex-wrap gap-3">
          {services.map((option) => {
            const selected = form.interests.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleInterest(option)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm border transition ${
                  selected
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget */}
      <div className="mt-10">
        <p className="font-medium mb-3">Project Budget (USD)</p>
        <div className="flex gap-3 flex-wrap">
          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setForm({ ...form, budget })}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm border transition ${
                form.budget === budget
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }`}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-10">
        <label className="block font-medium mb-1">Tell us about your project</label>
        <textarea
          rows={4}
          placeholder="Describe your project here..."
          className="w-full border border-gray-300 p-3 rounded-md outline-none text-gray-600 placeholder-gray-400"
          value={form.projectDetails}
          onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
        ></textarea>
      </div>

      {/* I'm not a robot checkbox */}
      <div className="mt-6 flex items-center gap-2">
        <input
          type="checkbox"
          id="robot"
          checked={form.isHuman}
          onChange={(e) => setForm({ ...form, isHuman: e.target.checked })}
        />
        <label htmlFor="robot" className="text-sm">I’m not a robot</label>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
