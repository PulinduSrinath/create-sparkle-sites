import { RefObject, useEffect, useState } from "react";

type UseInViewOptions = {
  once?: boolean;
  margin?: string;
};

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { once = false, margin = "0px" }: UseInViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, margin]);

  return isInView;
}
