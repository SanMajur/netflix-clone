import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      <div className="">
        <Link to="/login">
          <button className="text-white pr-4 capitalize">sign in</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer capitalize">
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
