export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              The FlexHEG website has been moved to <a style={{color: '#80aaf2', textDecoration: 'none'}} href='https://flexheg.com'>flexheg.com</a>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              See you there!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
