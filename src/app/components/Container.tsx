// components/Container.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 ${className}`}
    >
      {children}
    </div>
  );
}
