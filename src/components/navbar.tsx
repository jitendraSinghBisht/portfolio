"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 w-full z-50 flex justify-around",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" />
        <MenuItem setActive={setActive} active={active} item="Home" />
        <MenuItem setActive={setActive} active={active} item="Contact" />
      </Menu>
    </div>
  );
}
