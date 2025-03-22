import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              FlexHEG: Flexible Hardware-Enabled Guarantees
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Enabling multilateral, privacy-preserving and trustworthy
              verification for AI technology governance
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/research"
                className="bg-white text-[#1a1f2e] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Research
              </Link>
              <Link
                href="/community"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              FlexHEG mechanisms are designed to enable multilateral,
              privacy-preserving and trustworthy verification and automated
              compliance guarantees for agreements regarding the development and
              use of advanced AI technology.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why It Matters
            </h2>
            <p className="text-gray-300">
              Future AI systems could pose serious risks to public safety and
              international security. Public oversight of powerful AI systems
              and AI-enabled institutions is broadly beneficial, and
              hardware-enabled governance mechanisms offer a promising route to
              promoting such oversight.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Key Research Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Hardware Security
              </h3>
              <p className="text-gray-300">
                Research on secure physical enclosures and tamper-response
                mechanisms
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Cryptography
              </h3>
              <p className="text-gray-300">
                Advanced cryptographic protocols for privacy-preserving
                verification
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                IC Design
              </h3>
              <p className="text-gray-300">
                Integrated circuit design focused on confidential computing and
                security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
