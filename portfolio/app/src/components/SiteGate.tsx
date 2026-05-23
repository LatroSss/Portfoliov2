"use client";

import { useEffect, useState, type ReactNode } from "react";
import Budowa from "./budowa";

type SiteGateProps = {
  children: ReactNode;
};

export default function SiteGate({ children }: SiteGateProps) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/unlock")
      .then((response) => response.json())
      .then((data: { unlocked?: boolean }) => setUnlocked(Boolean(data.unlocked)))
      .catch(() => setUnlocked(false));
  }, []);

  if (unlocked === null) {
    return <div className="min-h-screen bg-base" aria-hidden />;
  }

  if (!unlocked) {
    return <Budowa onUnlock={() => setUnlocked(true)} />;
  }

  return children;
}
