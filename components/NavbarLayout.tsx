import React from "react";
import Navbar from "./Navbar";

type NavbarLayoutType = {
  children: React.ReactNode;
};
export default function NavbarLayout({ children }: NavbarLayoutType) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
