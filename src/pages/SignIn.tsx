
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success") {
        toast({
          title: "Sign in successful",
          description: "Welcome back to CDNC!",
        });
        navigate('/')
      } else {
        toast({
          title: "Sign in un-successful",
          description: "Please try Again",
        });
        navigate('/sign-in')
      }
  })
    .catch(err=> console.log(err))
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="min-h-[calc(100vh-180px)] bg-purple-light/30 py-16 px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-purple/10 p-8">
            <h1 className="text-3xl font-bold mb-6 text-purple-dark text-center">Welcome Back</h1>
            <p className="text-gray-600 mb-8 text-center">
              Sign in to access your caregiver resources and community
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-purple border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="sign-up" className="text-sm text-purple hover:text-purple-dark">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple hover:bg-purple-dark text-white"
              >
                Sign In
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="sign-up" className="text-purple hover:text-purple-dark font-medium">
                  Create one now
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

export default SignIn;
