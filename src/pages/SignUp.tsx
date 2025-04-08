import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const SignUp = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    province: "",
    zipCode: "",
    description: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("https://cdnc-backend.onrender.com/register", formData)
        .then((result) => {
            console.log("Success:", result);
            toast({
                title: "Sign up successful",
                description: "Welcome to CDNC!",
            });
            navigate("/sign-in");
        })
        .catch((err) => console.log("Error:", err));
    };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast({
//       title: "Sign up successful",
//       description: "Welcome to CDNC!",
//     });
//     setFormData({
//       fullName: "",
//       email: "",
//       city: "",
//       province: "",
//       zipCode: "",
//       description: "",
//     });
//   };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="min-h-[calc(100vh-180px)] bg-purple-light/30 py-16 px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-purple/10 p-8">
            <h1 className="text-3xl font-bold mb-6 text-purple-dark text-center">Join Us</h1>
            <p className="text-gray-600 mb-8 text-center">
              Sign up to be part of the CDNC community
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Why are you joining?
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <textarea
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  rows={1}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <Button type="submit"
               className="w-full bg-purple hover:bg-purple-dark text-white">
                    Sign Up
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account? {" "}
                <a href="sign-in" className="text-purple hover:text-purple-dark font-medium">
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
