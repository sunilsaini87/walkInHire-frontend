import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ProfilePopover } from "../ProfilePopover";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { authUser } = useSelector((store) => store.auth);
  return (
    <div className="bg-slate-200 sticky top-0">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <img
              src="/walkinhire.png"
              alt="walkinhire Logo"
              className="h-6 w-6 md:h-10 md:w-10 mr-2 inline-block"
            />
            WalkInHire
          </h1>
        </Link>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {authUser && authUser.role === "recruiter" ? (
              <>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to={"/admin/companies"}>Companies</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to={"/admin/jobs"}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
                <li className="hover:text-[#435f8a] cursor-pointer">
                  <Link to={"/browse"}>Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!authUser ? (
            <div className="flex items-center gap-2">
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
