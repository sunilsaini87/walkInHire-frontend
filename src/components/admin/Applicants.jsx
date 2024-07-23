import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { setAllApplicants } from "@/redux/applicationSlice";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";

const Applicants = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/api/v1/application/${id}/applicants`
        );
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    fetchAllApplicants();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-medium my-5">
          Applicants ({applicants?.applications?.length || 0})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
