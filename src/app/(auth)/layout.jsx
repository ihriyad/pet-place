import Navbar from "@/components/nav/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
};

export default AuthLayout;
