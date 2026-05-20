"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((module) => module.default),
  {
    ssr: false,
  }
);

export default function HeroCharacter() {
  return (
    <div className="relative w-full h-[400px] md:h-[550px]">
      <Spline scene="https://prod.spline.design/ce0QbyEMHJYNql2K/scene.splinecode" />
    </div>
  );
}