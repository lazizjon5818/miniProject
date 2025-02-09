import { useState } from "react";
import { useLoginMutation } from "../../redux/productsApi";
import image from "./Side Image.png";
import { LoginResponse } from "../../types";
import { useNavigate } from "react-router-dom";
import Loading from "../../config/Loading";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      console.error("Username or password is missing!");
      return;
    }

    try {
      const data: LoginResponse = await login({ username, password }).unwrap();
      console.log("Login successful:", data);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        navigate("/");
      } else {
        console.error("Token not found in response:", data);
      }
    } catch (err: any) {
      console.error("Login failed:", err.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white px-4 sm:px-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* LEFT IMAGE SECTION */}
        <div className="md:w-1/2 w-full h-56 md:h-auto flex items-center justify-center bg-gray-100">
          <img
            src={image}
            alt="Login Illustration"
            className="max-w-[80%] md:max-w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">
            Log in to Exclusive
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-6 max-w-sm mx-auto md:mx-0">
            <div>
              <input
                type="text"
                id="username"
                placeholder="Email or Phone Number"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3  border-b transition outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3  border-b transition outline-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`py-3 w-full sm:w-[141px] rounded-md transition text-white ${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {isLoading ? <Loading /> : "Log In"}
              </button>

              <div className="text-right mt-3 sm:mt-0">
                <a href="#" className="text-red-600 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">
                Login failed: {JSON.stringify(error)}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
