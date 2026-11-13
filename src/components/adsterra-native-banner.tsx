"use client";

import { useEffect, useRef } from "react";

const adKey = "ad82b2485ec0e774d928d159cb39743d";

export function AdsterraNativeBanner() {
  const adRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = adRootRef.current;
    if (!root) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = `https://bauval.org/21/${adKey}`;

    const container = document.createElement("div");
    container.id = `container-${adKey}`;

    root.append(script, container);
    script.onerror = () => {
      console.error(`Failed to load the Adsterra native banner script for ad unit ${adKey}.`);
    };

    return () => {
      script.remove();
      container.remove();
    };
  }, []);

  return (
    <aside className="mx-auto my-6 w-full max-w-6xl px-4">
      <div ref={adRootRef} className="w-full" />
    </aside>
  );
}
