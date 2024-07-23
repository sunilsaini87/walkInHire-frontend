import { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Jobnotfound from "./Jobnotfound";

const Jobs = () => {
  const { authUser } = useSelector((store) => store.auth);
  const { allJobs = [], searchText = "" } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchText) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.description.toLowerCase().includes(searchText.toLowerCase()) ||
          job?.location?.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchText]);

  useEffect(() => {
    if (authUser?.role === "recruiter") {
      navigate("/admin/jobs");
    }
  }, [authUser, navigate]);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto mt-5 w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/4">
            <button
              className="md:hidden bg-blue-950 text-white px-4 py-2 rounded mb-4"
              onClick={toggleFilter}
            >
              {showFilter ? "Hide Filters" : "Show Filters"}
            </button>
            {showFilter && <FilterCard />}
            <div className="hidden md:block">
              <FilterCard />
            </div>
          </div>
          {filterJobs && filterJobs.length === 0 ? (
            <Jobnotfound />
          ) : (
            <div className="flex-1 overflow-y-auto no-scrollbar pb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs &&
                  filterJobs.map((job) => (
                    <motion.div
                      key={job._id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
