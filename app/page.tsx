import React from "react";
import NavBar from "../app/components/NavBar";
import PageBody from "../app/components/atoms/PageBody";

export default function MainPage() {
  return (
    <main>
      <NavBar />
      <div
        className="fixed w-screen h-screen bg-cover"
        style={{
          backgroundImage: `url('/daisy4.jpeg')`,
          height: "100%",
        }}
      >
        <PageBody>Main</PageBody>
      </div>
    </main>
  );
}
