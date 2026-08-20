type PhotoPictureProps = {
  id: string;
  alt: string;
  objectPosition: string;
  sizes: string;
  eager?: boolean;
  className?: string;
};

const WIDTHS = [800, 1200, 1600, 2000];

export function PhotoPicture({
  id,
  alt,
  objectPosition,
  sizes,
  eager = false,
  className = "photo-img",
}: PhotoPictureProps) {
  const avif = WIDTHS.map((w) => `/photos/${id}-${w}.avif ${w}w`).join(", ");
  const webp = WIDTHS.map((w) => `/photos/${id}-${w}.webp ${w}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={`/photos/${id}-800.webp`}
        srcSet={webp}
        sizes={sizes}
        alt={alt}
        className={className}
        style={{ objectPosition }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        draggable={false}
        width={800}
        height={1040}
      />
    </picture>
  );
}
