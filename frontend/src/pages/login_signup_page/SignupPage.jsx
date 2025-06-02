import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import animationData from "../../lottie-animation/loginAnimation.json";
import axios from "axios";

function SignupPage() {
  const navigate = useNavigate();
  const [strength, setStrength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
    role: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { password, cpassword, ...data } = formData;
    if (password !== cpassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/patient/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        toast.success("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  useEffect(() => {
    checkStrength(formData.password);
  }, [formData.password]);

  const checkStrength = (password) => {
    let strength = 0;

    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
    }
    if (password.match(/([0-9])/)) {
      strength += 1;
    }
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
    }
    if (password.length > 7) {
      strength += 1;
    }

    setStrength(strength);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: "rgb(179, 218, 217)" }}
    >
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <div className="w-1/2 flex justify-center items-center">
        <Lottie 
          options={defaultOptions} 
          height={400} 
          width={400}
          isClickToPauseDisabled={true}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-3xl text-center mb-6">Signup</h1>
          <form className="flex flex-col" onSubmit={handleSignup}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="firstName" className="block mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  id="firstName"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="lastName" className="block mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  id="lastName"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="dob" className="block mb-1">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  id="dob"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="address" className="block mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  id="address"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="phone" className="block mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  id="phone"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="gender" className="block mb-1">
                  Gender:
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  id="gender"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="role" className="block mb-1">
                  Role:
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  id="role"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                >
                  <option value="">Select Role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  id="password"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      strength === 0
                        ? "bg-red-500"
                        : strength === 1
                        ? "bg-orange-500"
                        : strength === 2
                        ? "bg-yellow-500"
                        : strength === 3
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label htmlFor="cpassword" className="block mb-1">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  id="cpassword"
                  required
                  className="border border-gray-300 rounded-md mb-4 p-2 w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mb-4"
              data-sitekey="your-site-key"
              data-action="signup"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 hover:underline"
                style={{ color: "rgb(27, 120, 120)" }}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
