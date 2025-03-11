
import { useEffect, useRef, useState } from "react";

interface RunningBannerProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const RunningBanner = ({ items, speed = 20, className = "" }: RunningBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicateItems, setDuplicateItems] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate items to create a seamless loop
    setDuplicateItems([...items, ...items]);
  }, [items]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        ref={containerRef}
        className="inline-block animate-marquee"
        style={{
          animation: `marquee ${items.length * speed}s linear infinite`,
        }}
      >
        {duplicateItems.map((item, index) => (
          <span key={index} className="inline-block px-8 py-3">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
