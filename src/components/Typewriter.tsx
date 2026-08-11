import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  pause?: number;
}

export default function Typewriter({
  text,
  speed = 45,
  deleteSpeed = 25,
  delay = 700,
  pause = 2500,
}: TypewriterProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Finished typing
    if (!deleting && charIndex === text.length) {
      const timeout = setTimeout(() => {
        setDeleting(true);
      }, pause);

      return () => clearTimeout(timeout);
    }

    // Finished deleting
    if (deleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
      }, 500);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setCharIndex((prev) =>
          deleting ? prev - 1 : prev + 1
        );
      },
      deleting
        ? deleteSpeed
        : charIndex === 0
          ? delay
          : speed
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deleting,
    text,
    speed,
    deleteSpeed,
    delay,
    pause,
  ]);

  return (
    <span className="whitespace-pre-wrap">
      {text.slice(0, charIndex)}

      <span className="ml-2 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-pulse bg-blue-400" />
    </span>
  );
}