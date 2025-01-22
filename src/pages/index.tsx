import React from "react";
import { Navbar } from "@/components/Navbar";
import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Projects />
      <Contacts />
    </>
  );
}
