import {
  MdAccessTime,
  MdHandshake,
  MdLocationOn,
  MdPersonAdd,
  MdWork,
  MdEventAvailable,
} from "react-icons/md";

function HomeContent() {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <MdAccessTime
                    className="h-6 w-6 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Real-Time Job Postings
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Stay updated with the latest walk-in job opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <MdHandshake
                    className="h-6 w-6 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  On-the-Spot Hiring
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get hired immediately with our on-the-spot hiring events.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <MdLocationOn
                    className="h-6 w-6 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  User-Friendly Navigation
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Easily find jobs that match your skills and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How to Get Hired Quickly
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Follow these simple steps to land your next job through
              WalkInHire.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <MdPersonAdd
                  className="h-6 w-6 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Sign Up
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Create a free account to start your job search.
              </p>
            </div>
            <div className="my-8 h-px w-0.5 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <MdWork className="h-6 w-6 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Browse Jobs
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Explore available walk-in job opportunities.
              </p>
            </div>
            <div className="my-8 h-px w-0.5 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <MdEventAvailable
                  className="h-6 w-6 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Attend Interviews
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Participate in walk-in interviews and get hired on the spot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 flex justify-center">
        <div className="max-w-lg px-6">
          <div className="flex items-center mb-4 justify-center">
            <div className="flex text-blue-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.37 2.451a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.371-2.451a1 1 0 00-1.175 0l-3.37 2.451c-.785.57-1.84-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.267 9.385c-.783-.57-.381-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-center text-lg text-gray-800 mb-4">
            WalkInHire helped me find a job within a week! The process was
            smooth and efficient. Highly recommend!
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://via.placeholder.com/150"
              alt="John Doe"
            />
            <div className="text-left">
              <p className="text-gray-900 leading-none">John Doe</p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl px-4 ml-96 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <hr className="mt-5 mb-5" />
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              What is WalkInHire?
            </h3>
            <p className="text-gray-600 mt-2">
              WalkInHire is a job portal that focuses on immediate job openings
              and walk-in interviews.
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              How do I apply for a job?
            </h3>
            <p className="text-gray-600 mt-2">
              Browse our job listings, find a suitable position, and attend the
              walk-in interview.
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="mb-6">
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
    </>
  );
}

export default HomeContent;
