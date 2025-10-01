"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "./WhatsAppButton";

export default function WhatsAppWrapper() {
  const pathname = usePathname();

  // Hide on /contact only
  if (pathname === "/contact") return null;

  return <WhatsAppButton />;
}