import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchText(query));
    navigate("/browse");
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-black px-6 md:px-12">
          <h1 className="text-6xl font-extrabold">
            Search, Apply & Get Your{" "}
            <span className="text-[#6a42b5]">Dream Jobs</span>
          </h1>
          <br />
          <p className="text-lg md:text-xl mb-6 text-rose-950">
            Explore immediate job openings and walk-in interviews.
            <br /> Start your career journey with{" "}
            <span className="text-violet-700 font-bold">WalkInHire!</span>
          </p>
          <div className="flex flex-col gap-5 my-10">
            <div className="flex w-[40%] shadow-lg bg-white border pl-3 border-gray-200 rounded-full items-center gap-4 mx-auto">
              <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find your dream jobs"
                className="outline-none border-none w-full bg-transparent"
              />
              <Button
                onClick={searchJobHandler}
                className="rounded-r-full bg-[#13335f]"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
