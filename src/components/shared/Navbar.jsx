import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ProfilePopover } from "../ProfilePopover";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { authUser } = useSelector((store) => store.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-slate-200 sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <h1 className="text-2xl font-bold flex items-center">
            <img
              src="/walkinhire.png"
              alt="walkinhire Logo"
              className="h-6 w-6 md:h-10 md:w-10 mr-2"
            />
            WalkInHire
          </h1>
        </Link>
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex items-center gap-12 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row font-medium items-center gap-5 bg-slate-200 md:bg-transparent w-full md:w-auto absolute md:relative top-16 left-0 md:top-auto md:left-auto p-4 md:p-0 shadow-md md:shadow-none">
            {authUser && authUser.role === "recruiter" ? (
              <>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/browse">Browse</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
              </>
            )}
          </ul>
          {!authUser ? (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-slate-200 md:bg-transparent p-4 md:p-0">
              <Link to="/login">
                <Button variant={"outline"}>Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#435f8a] hover:bg-[#263851]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <ProfilePopover />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
