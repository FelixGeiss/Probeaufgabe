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
    <div className="relative min-h-[700px] w-1/2">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}
