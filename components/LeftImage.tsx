import Image, { type StaticImageData } from "next/image";
import defaultImage from "@/src/images/ChatGPT Image 25. Feb. 2026, 14_48_07.png";

type LeftImageProps = {
  src?: string | StaticImageData;
  alt?: string;
};

export default function LeftImage({
  src = defaultImage,
  alt = "Chuck Norris",
}: LeftImageProps) {
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
