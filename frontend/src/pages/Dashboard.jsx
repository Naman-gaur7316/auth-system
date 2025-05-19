import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/login");
    toast.success("Logged Out");
  };
  return (
    <div>
      <div className="bg-black py-7 px-3 flex justify-between items-center text-white">
        <span className="text-3xl font-bold">Home</span>
        <button
          onClick={logout}
          className="bg-white text-black p-4 rounded-full font-bold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
