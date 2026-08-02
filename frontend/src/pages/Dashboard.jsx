import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { testimonialApi } from "../services/testimonialApi";
import Rating from "../components/testimonials/Rating";

const Dashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

  const fetchPendingTestimonials = async () => {
    try {
      const data = await testimonialApi.getAll("pending");
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
    fetchPendingTestimonials();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      setActionId(id);

      await testimonialApi.updateStatus(id, status);

      setTestimonials((prev) =>
        prev.filter((testimonial) => testimonial.id !== id),
      );

      toast.success(
        status === "approved"
          ? "Testimonial approved."
          : "Testimonial rejected.",
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update testimonial.",
      );
    } finally {
      setActionId(null);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#080808] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Moderation
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Testimonial requests</h1>
          <p className="mt-2 text-gray-500">
            Review customer testimonials before they appear publicly.
          </p>
        </div>

        {loading ? (
          <div className="rounded-xl border border-white/10 bg-[#111111] p-10 text-center text-gray-500">
            Loading testimonials...
          </div>
        ) : testimonials.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-[#111111] p-12 text-center">
            <p className="font-medium">No pending testimonials</p>
            <p className="mt-2 text-sm text-gray-500">
              New submissions will appear here for review.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {testimonials.map((testimonial) => {
              const isProcessing = actionId === testimonial.id;

              const initials = testimonial.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <article
                  key={testimonial.id}
                  className="rounded-xl border border-white/10 bg-[#111111] p-5"
                >
                  {/* Rating */}
                  <Rating rating={testimonial.rating} />

                  {/* Testimonial */}
                  <p className="mt-4 text-lg leading-7 text-gray-300">
                    {testimonial.content}
                  </p>

                  {/* User + Actions */}
                  <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-4">
                      {/* Photo */}
                      {testimonial.photo ? (
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="h-12 w-12 object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white/10 font-medium text-white">
                          {initials}
                        </div>
                      )}

                      {/* User details */}
                      <div>
                        <p className="font-medium text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.email}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 gap-3">
                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() =>
                          handleStatusUpdate(testimonial.id, "rejected")
                        }
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Reject
                      </button>
                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() =>
                          handleStatusUpdate(testimonial.id, "approved")
                        }
                        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isProcessing ? "Updating..." : "Approve"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
