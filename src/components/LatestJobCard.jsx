/* eslint-disable react/prop-types */
import { Badge } from "./ui/badge";

const LatestJobCard = ({ job }) => {
  return (
    <div className="p-4 sm:p-5 rounded-md shadow-md bg-white border border-gray-100 cursor-pointer">
      <div className="mb-4">
        <h1 className="text-lg sm:text-xl font-medium">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div className="mb-4">
        <h1 className="text-lg sm:text-xl font-bold my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge
          className="text-blue-950 font-bold text-xs sm:text-sm"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-[#200c07] font-bold text-xs sm:text-sm"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-[#0a1a2d] font-bold text-xs sm:text-sm"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
