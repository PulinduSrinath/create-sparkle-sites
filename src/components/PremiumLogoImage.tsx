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
    src="/logo-rebranded.webp"
    srcSet="/logo-rebranded-256.webp 256w, /logo-rebranded.webp 320w"
    sizes={`(max-width: 768px) min(90vw, ${maxWidth}px), ${maxWidth}px`}
    alt={alt}
    width={402}
    height={441}
    className={className}
    loading={loading}
    {...(fetchPriority ? { fetchPriority } : {})}
    decoding="async"
  />
);

export default PremiumLogoImage;
