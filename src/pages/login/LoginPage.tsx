import { useState } from "react";
import { useLoginMutation } from "../../redux/productsApi";
import image from './Side Image.png'
import { LoginResponse } from "../../types";
import { useNavigate } from "react-router-dom";
import Loading from "../../config/Loading";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

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
        console.log(localStorage.getItem("token"));
    } catch (err) {
        console.error("Login failed:", JSON.stringify(err));
    }
};



  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="w-[1170px] h-[781px] flex">
        
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={image}
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center px-16">
          <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                id="username"
                placeholder="Email or Phone Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300  focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex justify-between items-center">
              {isLoading ? (
                <Loading />
              ) : (
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-red-600 text-white py-3 w-[141px] rounded-md hover:bg-red-700 transition"
                >
                  Log In
                </button>
              )}
              {error && <p style={{ color: 'red' }}>Login failed: {JSON.stringify(error)}</p>}
              <div className="text-right mt-3">
                <a href="#" className="text-red-600 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
