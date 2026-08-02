import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { testimonialApi } from "../services/testimonialApi";
import Rating from "../components/testimonials/Rating";
import TestimonialCard from "../components/testimonials/TestimonialCard";

const PublicWall = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const data = await testimonialApi.getAll("approved");
      setTestimonials(data);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load testimonials.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#080808] px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Customer stories
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            What our customers say
          </h1>
          <p className="mt-4 text-gray-500">
            Real experiences from people using our product every day.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center text-gray-500">
            Loading testimonials...
          </div>
        )}

        {/* Empty */}
        {!loading && testimonials.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-[#111111] py-16 text-center">
            <p className="font-medium">No testimonials yet.</p>
            <p className="mt-2 text-sm text-gray-500">
              Approved customer stories will appear here.
            </p>
          </div>
        )}

        {/* Testimonials */}
        {!loading && testimonials.length > 0 && (
          <div className="columns-1 gap-4 md:columns-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mb-4 break-inside-avoid">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default PublicWall;
