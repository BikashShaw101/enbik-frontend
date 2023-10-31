import React from "react";
import { getUserProfile } from "../../services/index/users";
import Header from "./components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AdminLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (!data?.admin) {
        navigate("/");
        toast.error("You are not allowed to access admin panel");
      }
    },
    onError: (error) => {
      console.log(error);
      navigate("/");
      toast.error("You are not allowed to access admin panel");
    },
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center gap-x-1 ">
        <span className="loading loading-infinity loading-lg text-slate-800"></span>
        <h3 className="text-2xl text-slate-700 font-bold ">Loading..</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className="flex-1 bg-[#f9f9f9] lg:p-6 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
