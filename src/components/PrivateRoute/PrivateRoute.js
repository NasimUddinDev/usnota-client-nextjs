"use client";
import Login from "@/app/(pages)/(Public-Pages)/login/page";
import { UseContext } from "@/app/context/context";

export default function PrivateRoute ({ children }) {
  const { loggedUser, loading } = UseContext();

  if (loading && !loggedUser?.status) {
    return "Loading...";
    // return <Loader />;
  }

  if(loggedUser?.status === "success" && !loading){
    return <main>{children}</main>;
  }

  if (loggedUser?.status !== "success" && !loading) {
    return <Login />;
  }

};
