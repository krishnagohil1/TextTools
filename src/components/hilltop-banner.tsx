"use client";

import { useEffect, useId, useRef } from "react";

interface HilltopScriptElement extends HTMLScriptElement {
  settings?: {
    appendTo: string;
  };
}

declare global {
  interface Window {
    abc170?: boolean;
  }
}

export function HilltopBanner() {
  const slotRef = useRef<HTMLDivElement>(null);
  const slotId = `hilltop-ad-slot-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    const script = document.createElement("script") as HilltopScriptElement;
    script.settings = { appendTo: `#${slotId}` };
    script.src =
      "https://fond-appointment.com/b/X/V.sQdfGglR0fYCW/cn/AeWmx9gueZhUklckyPVTmcr2GMpjQIh4rMpjmEFtlNzz/YgylMZj_geylNeQw";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    script.onerror = () => {
      console.error("Failed to load the Hilltop banner script.");
    };

    window.abc170 = false;
    slot.appendChild(script);

    return () => {
      script.remove();
      slot.replaceChildren();
    };
  }, [slotId]);

  return (
    <div
      aria-label="Hilltop advertisement"
      className="relative h-[200px] w-[240px] overflow-hidden"
    >
      <div
        id={slotId}
        ref={slotRef}
        className="absolute left-0 top-0 h-[250px] w-[300px] origin-top-left scale-[0.8]"
      />
    </div>
  );
}
