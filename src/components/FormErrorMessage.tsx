import React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function FormErrorMessage({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <p
      className={twMerge(
        "text-[0.75rem] leading-[1.66] mt-2 tracking-[0.03em] text-[var(--color-red)]",
        className
      )}
    >
      {children}
    </p>
  );
}
