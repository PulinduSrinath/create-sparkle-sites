type PremiumLogoImageProps = {
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  /** Max rendered width in CSS pixels (used for sizes hint). */
  maxWidth?: number;
};

const PremiumLogoImage = ({
  alt = "ZetasBuild Premium Logo",
  className = "",
  loading = "lazy",
  fetchPriority,
  maxWidth = 400,
}: PremiumLogoImageProps) => (
  <img
    src="/premium-logo-icon.webp"
    srcSet="/premium-logo-icon-256.webp 256w, /premium-logo-icon.webp 320w"
    sizes={`(max-width: 768px) min(90vw, ${maxWidth}px), ${maxWidth}px`}
    alt={alt}
    width={320}
    height={366}
    className={className}
    loading={loading}
    {...(fetchPriority ? { fetchPriority } : {})}
    decoding="async"
  />
);

export default PremiumLogoImage;
