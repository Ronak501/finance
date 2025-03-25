import { CheckCircle } from "lucide-react";

export default function TrackRecordApproach() {
  const approaches = [
    "Extensive experience in SME investing and capital market strategy",
    "Robust due diligence and risk management frameworks",
    "Strong networks across founders, advisors, and institutional stakeholders",
    "Active involvement in unlocking operational and strategic value",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-[#2C7C41] text-center">
            What Sets Our Approach Apart
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#2C7C41] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{approach}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-lg font-medium">
              We're not just investors—we're long-term partners committed to
              transforming potential into performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
