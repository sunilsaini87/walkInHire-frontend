import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Engineer",
  "Data Science",
  "Graphic Designer",
  "UI Developer",
  "Wordpress Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Mobile Developer",
  "Software Engineer",
  "Database Administrator",
  "Systems Analyst",
  "Network Engineer",
  "Cybersecurity Specialist",
  "Cloud Engineer",
  "AI/ML Engineer",
  "QA Engineer",
  "Project Manager",
  "Product Manager",
  "IT Support Specialist",
  "Game Developer",
  "Data Analyst",
  "Business Analyst",
  "IT Consultant",
  "Software Architect",
];

export function CategoryCarousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Carousel className="w-full max-w-xl mx-auto my-20">
      <CarouselContent>
        {category.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
          >
            <Button
              onClick={() => {
                dispatch(setSearchText(item));
                navigate("/browse");
              }}
              variant="outline"
              className="w-full rounded-full"
            >
              {item}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
