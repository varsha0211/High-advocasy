import { useState } from "react";
import { toast } from "react-toastify";
import { testimonialApi } from "../services/testimonialApi";

const initialForm = {
  name: "",
  email: "",
  company: "",
  content: "",
  rating: 5,
};

const SubmitTestimonial = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (rating) => {
    setForm((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await testimonialApi.create({
        ...form,
        rating: Number(form.rating),
      });
      setForm(initialForm);
      toast.success("Thanks! Your testimonial has been submitted for review.");
    } catch (error) {
      console.log("Error in submit form: ", error);
      toast.error(
        error.response?.data?.message || "Failed to submit testimonial.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-xl">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Customer feedback</p>
          <h1 className="mt-2 text-3xl font-semibold">Share your experience</h1>
          <p className="mt-2 text-gray-500">
            Tell us about your experience with our product.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-gray-800 bg-gray-900 p-6"
        >
          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-md border border-gray-800 bg-black px-4 py-3 text-sm outline-none focus:border-gray-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full rounded-md border border-gray-800 bg-black px-4 py-3 text-sm outline-none focus:border-gray-600"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">Company</label>
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              required
              className="w-full rounded-md border border-gray-800 bg-black px-4 py-3 text-sm outline-none focus:border-gray-600"
            />
          </div>

          {/* Rating */}
          <div className="">
            <p className="mb-2 text-sm text-gray-400">Rating</p>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  className={
                    star <= form.rating
                      ? "text-xl text-yellow-500"
                      : "text-xl text-gray-700"
                  }
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Testimonial
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Tell us about your experience..."
              rows="4"
              required
              className="w-full resize-none rounded-md border border-gray-800 bg-black px-4 py-3 text-sm outline-none focus:border-gray-600"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-white px-4 py-3 font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit testimonial"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default SubmitTestimonial;
