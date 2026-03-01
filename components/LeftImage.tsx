import Image, { type StaticImageData } from "next/image";
import defaultImage from "@/src/images/ChatGPT Image 25. Feb. 2026, 14_48_07.png";

export type LeftImageProps = {
  /**
   * Overrides the default image source when provided.
   */
  src?: string | StaticImageData;
  /**
   * Overrides the default alt text used for accessibility.
   */
  alt?: string;
};

/**
 * Renders the responsive hero image shown on the left side.
 *
 * @param props Optional image source and alt text overrides.
 * @returns The responsive image container.
 */
export default function LeftImage(props: LeftImageProps) {
  const { src = defaultImage, alt = "Chuck Norris" } = props;

  return (
    <div className="relative my-4 min-h-[320px] w-full sm:min-h-[500px] md:min-h-[700px] md:w-1/2">
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />
    </div>
  );
}
