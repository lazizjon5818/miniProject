import { useState } from "react";
import { useLoginMutation } from "../../redux/productsApi";
import image from './Side Image.png'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login({ username, password }).unwrap();
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
    } catch (err) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      {/* Asosiy container: 1170x781 */}
      <div className="w-[1170px] h-[781px] flex">
        
        {/* Chap taraf - Rasm */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={image} // Shu joyga rasm joylash kerak
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* O‘ng taraf - Login form */}
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
                <button 
                type="submit"
                disabled={isLoading}
                className=" bg-red-600 text-white py-3 w-[141px] rounded-md hover:bg-red-700 transition"
                >
                {isLoading ? "Logging in..." : "Log In"}
                </button>
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
