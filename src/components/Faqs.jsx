function Faqs() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center sm:text-left">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              What is WalkInHire?
            </h3>
            <p className="text-gray-600 mt-2">
              WalkInHire is a job portal that focuses on immediate job openings
              and walk-in interviews.
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              How do I apply for a job?
            </h3>
            <p className="text-gray-600 mt-2">
              Browse our job listings, find a suitable position, and attend the
              walk-in interview.
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Is there a fee to use WalkInHire?
            </h3>
            <p className="text-gray-600 mt-2">
              No, WalkInHire is completely free for job seekers.
            </p>
          </div>
          <hr className="mt-5 mb-5" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
