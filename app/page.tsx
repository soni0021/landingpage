"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";
import Benefits from "@/components/Benefits";
import TestInfo from "@/components/TestInfo";
import PastRecords from "@/components/PastRecords";
import TargetAudience from "@/components/TargetAudience";
import LowestFee from "@/components/LowestFee";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TargetAudience />
      <Comparison />
      <LowestFee />
      <RegistrationForm />
      <Benefits />
      <TestInfo />
      <PastRecords />
      <Footer />
    </main>
  );
}

