
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);


  return (
    <>
      {[...new Array(number)].map((_, i) => (
        <span
          key={"meteor" + i}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-slate-400 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={meteorStyles[i]}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-400 to-transparent" />
        </span>
      ))}
    </>
  );
};
