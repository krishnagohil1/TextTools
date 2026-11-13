import { AdsterraBanner } from "@/components/adsterra-banner";
import { HilltopBanner } from "@/components/hilltop-banner";

interface LatestToolPageAdsProps {
  position: "top" | "bottom";
}

export function LatestToolPageAds({ position }: LatestToolPageAdsProps) {
  if (position === "top") {
    return (
      <div className="mx-auto my-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
        <HilltopBanner />
        <AdsterraBanner
          width={300}
          height={250}
          className=""
        />
      </div>
    );
  }

  return (
    <AdsterraBanner
      width={300}
      height={250}
      className="mx-auto my-6"
    />
  );
}
