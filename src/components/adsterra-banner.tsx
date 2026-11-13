"use client";

import { useEffect, useRef, useState } from "react";

interface AdsterraBannerProps {
  mediaQuery?: string;
  adKey?: string;
  width?: number;
  height?: number;
  scale?: number;
  className?: string;
}

let adScriptQueue = Promise.resolve();

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, never>;
    };
  }
}

export function AdsterraBanner({
  mediaQuery,
  adKey = "025f682c0b126f990846b450d3406f42",
  width = 300,
  height = 250,
  scale = 1,
  className = "my-8",
}: AdsterraBannerProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = adContainerRef.current;
    if (!container) return;

    const media = mediaQuery ? window.matchMedia(mediaQuery) : null;
    let script: HTMLScriptElement | null = null;
    let active = true;
    let enabled = false;

    const syncAd = () => {
      enabled = !media || media.matches;
      if (!enabled) {
        script?.remove();
        script = null;
        container.replaceChildren();
        return;
      }

      if (script) return;

      setLoadError(false);
      const loadAd = adScriptQueue.then(
        () =>
          new Promise<void>((resolve) => {
            if (!active || !enabled) {
              resolve();
              return;
            }

            window.atOptions = {
              key: adKey,
              format: "iframe",
              height,
              width,
              params: {},
            };

            script = document.createElement("script");
            script.src = `https://bauval.org/22/${adKey}`;
            script.async = true;
            script.onload = () => {
              if (!enabled) container.replaceChildren();
              resolve();
            };
            script.onerror = () => {
              console.error(`Failed to load the Adsterra banner script for ad unit ${adKey}.`);
              if (active) setLoadError(true);
              resolve();
            };
            container.appendChild(script);
          }),
      );
      adScriptQueue = loadAd;
    };

    syncAd();
    media?.addEventListener("change", syncAd);

    return () => {
      active = false;
      enabled = false;
      media?.removeEventListener("change", syncAd);
      script?.remove();
      container.replaceChildren();
    };
  }, [adKey, height, mediaQuery, width]);

  return (
    <aside className={className} style={{ transform: `scale(${scale})` }}>
      <div
        ref={adContainerRef}
        className="mx-auto max-w-full overflow-hidden"
        style={{ width, minHeight: height, height }}
      >
        {loadError && (
          <p role="status" className="text-center text-sm text-muted-foreground">
            Advertisement could not be loaded.
          </p>
        )}
      </div>
    </aside>
  );
}
