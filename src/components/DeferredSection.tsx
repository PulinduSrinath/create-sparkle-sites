import { ReactNode } from "react";
import { useNearViewport } from "@/hooks/use-near-viewport";

type DeferredSectionProps = {
  children: ReactNode;
  minHeight: string;
  rootMargin?: string;
  className?: string;
};

const DeferredSection = ({ children, minHeight, rootMargin, className = "" }: DeferredSectionProps) => {
  const { ref, isNear } = useNearViewport(rootMargin);

  return (
    <div ref={ref} className={className} style={{ minHeight }} aria-hidden={!isNear}>
      {isNear ? children : null}
    </div>
  );
};

export default DeferredSection;
