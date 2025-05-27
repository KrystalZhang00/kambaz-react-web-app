import React, { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children); // Convert from JSX/ReactNode to number
  return <span id="wd-square">{num * num}</span>;
}
