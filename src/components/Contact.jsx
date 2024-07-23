import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="relative bg-blue-600 text-white py-16 px-4 h-screen">
        <div className="absolute inset-0">
          <img
            src="/aboutbg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Get in Touch with
            <span className="text-purple-800">WalkInHire</span>
          </h1>
          <p className="mb-12 text-lg">
            We are here to assist you with your job search and recruitment
            needs.
            <br /> Reach out to us today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-blue-800 bg-opacity-75 rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
              <svg
                className="w-12 h-12 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 3H18C19.1 3 20 3.9 20 5V21L12 17L4 21V5C4 3.9 4.9 3 6 3ZM6 5V15L12 12.5L18 15V5H6Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Immediate Job Openings
              </h3>
              <p>Find the latest walk-in job opportunities.</p>
            </div>
            <div className="bg-blue-800 bg-opacity-75 rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
              <svg
                className="w-12 h-12 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 8H16V6H14V4H10V6H8V8H6V14H8V16H10V18H14V16H16V14H18V8ZM10 8H14V14H10V8Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">On-the-Spot Hiring</h3>
              <p>Get hired instantly through our platform.</p>
            </div>
            <div className="bg-blue-800 bg-opacity-75 rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
              <svg
                className="w-12 h-12 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM11 7V13L16.25 16.15L17 14.92L12.5 12.23V7H11Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Support & Inquiries
              </h3>
              <p>Contact us for any assistance or questions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rgb(237, 244, 252) py-16 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="mb-12 text-lg">
            Whether you are a job seeker or an employer, we are here to help.
            <br />
            Contact us for any inquiries or support.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-8">
            <div className="bg-blue-100 rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Job Seekers</h3>
              <p className="text-blue-500">
                <a href="mailto:support@walkinhire.com">
                  support@walkinhire.com
                </a>
              </p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Employers</h3>
              <p className="text-blue-500">
                <a href="mailto:employers@walkinhire.com">
                  employers@walkinhire.com
                </a>
              </p>
              <p>+1 (555) 234-5678</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">General Inquiry</h3>
              <p className="text-blue-500">
                <a href="mailto:info@walkinhire.com">info@walkinhire.com</a>
              </p>
              <p>+1 (555) 345-6789</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
