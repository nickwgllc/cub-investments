import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting | Cub Investments",
  description: "Schedule a 30-minute call with Nick Haschka at Cub Investments.",
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Schedule a Call
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Meeting</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          30-minute call with Nick Haschka via Google Meet. Pick a time that works for you.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0JLgyYEDPa-EfbzAoC67Wz5wjdfK6-poADveVgNh4U6QUHZwVG_FNxt_OVAQxYcudwzX8FrQ9d?gv=true"
          title="Book a meeting with Nick Haschka"
          className="w-full border-0"
          style={{ minHeight: "700px" }}
        />
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        Prefer to call? Reach Nick at 831-521-9519. Leave your number so he knows who&apos;s calling.
      </p>
    </div>
  );
}
