import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import Footer from "../shared/Footer";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading, authUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (authUser?.role === "recruiter") {
      navigate("/admin/companies");
    } else if (authUser?.role === "student") {
      navigate("/");
    }
  }, [authUser, navigate]);

  return (
    <>
      <section className="bg-[url('/walkin.jpg')] bg-contain bg-no-repeat bg-center min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow items-center justify-center px-6 py-8 mx-auto w-full">
          <div className="w-full bg-slate-200 text-black rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={submitHandler} className="space-y-2 md:space-y-6">
                <h1 className="font-bold text-xl mb-1 text-center">Sign Up</h1>
                <div className="my-1">
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    value={input.fullname}
                    name="fullname"
                    onChange={changeEventHandler}
                    placeholder="Full Name"
                    className="w-full"
                  />
                </div>
                <div className="my-1">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={input.email}
                    name="email"
                    onChange={changeEventHandler}
                    placeholder="Email@gmail.com"
                    className="w-full"
                  />
                </div>
                <div className="my-1">
                  <Label>Phone Number</Label>
                  <Input
                    type="text"
                    value={input.phoneNumber}
                    name="phoneNumber"
                    onChange={changeEventHandler}
                    placeholder="+911234567890"
                    className="w-full"
                  />
                </div>
                <div className="my-1">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    placeholder="Password"
                    className="w-full"
                  />
                </div>
                <div className="my-1">
                  <Label>Role</Label>
                  <RadioGroup className="flex items-center gap-4 my-1">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        name="role"
                        value="student"
                        checked={input.role === "student"}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                      />
                      <Label htmlFor="r1">Students</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        name="role"
                        value="recruiter"
                        checked={input.role === "recruiter"}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                      />
                      <Label htmlFor="r2">Recruiter</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="my-1">
                  <Label>Profile</Label>
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="cursor-pointer"
                  />
                </div>
                {loading ? (
                  <Button className="w-full my-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full my-4">
                    Sign Up
                  </Button>
                )}
                <span className="text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-400 cursor-pointer underline"
                  >
                    Login
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Signup;
