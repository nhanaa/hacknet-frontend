"use client";
import { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";
export default function Confetti() {
  const { width, height } = useWindowSize();
  return (
    <>
      <ReactConfetti tweenDuration={10} width={width} height={height} />
    </>
  );
}
