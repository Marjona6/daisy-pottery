import React from "react";
import About from "../app/components/About";
import NavBar from "../app/components/NavBar";
import "tailwindcss/tailwind.css";
import "../app/globals.css";

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <About />
    </main>
  );
}
