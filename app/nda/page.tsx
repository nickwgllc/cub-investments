import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDA | Cub Investments",
  description: "Non-disclosure agreement for Cub Investments deal review.",
};

export default function NdaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Confidentiality
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">NDA</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Complete the form below to execute a non-disclosure agreement with Cub Investments.
        </p>
      </div>

      <iframe
        id="JotFormIFrame-212905940045048"
        title="Cub Investments NDA"
        src="https://form.jotform.com/212905940045048"
        allow="geolocation; microphone; camera"
        allowFullScreen
        className="w-full border-0 rounded-xl"
        style={{ minHeight: "700px" }}
      />
    </div>
  );
}
