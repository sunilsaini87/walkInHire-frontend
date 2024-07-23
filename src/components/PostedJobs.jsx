import { useEffect, useState } from "react";
import JobTable from "./JobTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import Navbar from "./shared/Navbar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchAdminJobs } from "@/redux/jobSlice";

function PostedJobs() {
  useGetAllAdminJobs();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchAdminJobs(text));
  }, [text]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-4">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 md:w-[30%] mb-4 md:mb-0"
            placeholder="Filter by company name & role"
          />
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            className="w-full md:w-auto"
          >
            New Jobs
          </Button>
        </div>
        <JobTable />
      </div>
    </div>
  );
}

export default PostedJobs;
