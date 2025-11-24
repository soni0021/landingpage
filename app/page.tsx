"use client";

import Navbar from "@/components/Navbar";
import HeroWithForm from "@/components/HeroWithForm";
import TestDates from "@/components/TestDates";
import Benefits from "@/components/Benefits";
import TestInfo from "@/components/TestInfo";
import TargetAudience from "@/components/TargetAudience";
import Comparison from "@/components/Comparison";
import PastRecords from "@/components/PastRecords";
import LowestFee from "@/components/LowestFee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroWithForm />
      <TestDates />
      <LowestFee />
      <Benefits />
      <TestInfo />
      <TargetAudience />
      <Comparison />
      <PastRecords />
      <Footer />
    </main>
  );
}

