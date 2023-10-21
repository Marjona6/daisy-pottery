import React from "react";
import NavBar from "../app/components/NavBar";
import PageBody from "../app/components/atoms/PageBody";
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function MainPage() {
  return (
    <main>
      <NavBar />
      <div
        className="fixed w-screen h-screen bg-cover h-min-100vh"
        style={{
          backgroundImage: `url('/daisy4.jpeg')`,
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <PageBody>Main</PageBody>
      </div>
    </main>
  );
}
