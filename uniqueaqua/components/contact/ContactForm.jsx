'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // API call would go here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      {isSubmitted && (
        <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
          <p className="text-sky-700 text-center font-medium">
            <span className="inline-block mr-2">✓</span>
            Thank you for contacting us! We'll get back to you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div className="group">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name <span className="text-sky-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email ID <span className="text-sky-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Contact Number Field */}
        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Contact Number <span className="text-sky-600">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.contact ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
            placeholder="1234567890"
            maxLength="10"
          />
          {errors.contact && (
            <p className="mt-2 text-sm text-red-600">{errors.contact}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message <span className="text-sky-600">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200 resize-none`}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-sky-700 hover:to-blue-600 focus:ring-4 focus:ring-sky-200 transition duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}