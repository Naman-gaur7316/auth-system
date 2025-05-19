import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(email.trim() === "" || password.trim() === "") return;
    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/login', { email, password });
      const { user, token } = res.data;
      console.log(user, token)
    localStorage.setItem("token", token);
      setUser(user);
      navigate('/');
      toast.success('Login successfully');

    } catch (err) {
        console.log(err);
      toast.error('Login failed');
    }
  }
  return (
    <div className="w-full h-screen bg-blue-500 flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="max-w-3xl min-w-96 bg-white p-5 rounded-md">
        <div className="mb-6">
          <h3 className="text-xl mb-4">Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-neutral-200 border border-gray-300 p-2 w-full rounded"
            required
            placeholder="example@abc.com*"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-4">Your password</h3>
          <div className="relative">
            <input
              className="bg-neutral-200 border border-gray-300 p-2 w-full rounded pr-10"
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
        </div>
        <button type="submit" className="text-white bg-black px-3 py-2 rounded-full inline-block w-full">
            Login
        </button>
        <p className="text-center my-2">
          New user?{" "}
          <Link
            to="/register"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
export default LoginPage