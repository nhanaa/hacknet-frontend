"use client";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
export default function Confetti() {
  const [windowDimen, setWindowDimen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setWindowDimen({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimen]);
  return (
    <>
      <ReactConfetti
        tweenDuration={10}
        width={windowDimen.width}
        height={windowDimen.height}
      />
    </>
  );
}
