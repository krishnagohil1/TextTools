import { AdsterraBanner } from "@/components/adsterra-banner";
import { AdsterraNativeBanner } from "@/components/adsterra-native-banner";

interface ToolPageAdProps {
  position: "top" | "bottom";
}

export function ToolPageAd({ position }: ToolPageAdProps) {
  if (position === "top") {
    return <AdsterraNativeBanner />;
  }

  return (
    <AdsterraBanner
      width={400}
      height={250}
      className="mx-auto my-6"
    />
  );
}
