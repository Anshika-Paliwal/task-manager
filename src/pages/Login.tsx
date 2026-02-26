import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import { PasswordInput, ThemeToggle } from "../components";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "test" && password === "test123") {
      const fakeToken = "fake-jwt-token-123456";

      dispatch(
        login({
          user: { username: "test" },
          token: fakeToken,
        }),
      );

      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 sm:p-10 flex flex-col gap-6 transition-colors duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white">
          Welcome!
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
          Please enter your credentials to continue.
        </p>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 text-sm text-center px-4 py-2 rounded-xl">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 outline-none p-3 rounded-xl transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput value={password} onChange={setPassword} />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
