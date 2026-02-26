import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { PasswordInput } from "../components";
import { login } from "../features/auth/authSlice";

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8 sm:p-10 flex flex-col gap-6 transition duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Welcome!
        </h2>

        <p className="text-sm text-gray-500 text-center">
          Please enter your credentials to continue.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm text-center px-4 py-2 rounded-xl">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-xl transition"
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
