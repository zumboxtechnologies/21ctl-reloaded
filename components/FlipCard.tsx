import { cn } from "@/lib/utils";
import Image from "next/image";

const FlipCard = ({
  imageUrl,
  title,
  description,
  icon,
  imageUrl2,
  className,
}: {
  imageUrl: string;
  title?: string;
  description?: string;
  icon?: string;
  imageUrl2?: string;
  className?: string;
}) => {
  return (
    <div className={cn("absolute w-[180px] h-[212.5px]", className)}>
      <div className="relative duration-500 [perspective:1000px] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute w-fit h-fit [backface-visibility:hidden]">
          <div className="relative">
            <Image
              width={180}
              height={212.5}
              src={imageUrl}
              alt="top-left hexagon"
            />
            {imageUrl2 ? (
              <Image
                width={120.28}
                height={25.34}
                src={imageUrl2}
                alt="top-left hexagon"
                className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]"
              />
            ) : (
              <div className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] myFlex flex-col justify-center gap-1">
                {icon && <Image width={24} height={24} src={icon} alt="icon" />}
                <p className="font-neuebold text-primaryGray">{title}</p>
              </div>
            )}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute w-fit h-fit [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative">
            <Image
              width={180}
              height={212.5}
              src={imageUrl}
              alt="top-left hexagon"
            />
            {imageUrl2 ? (
              <Image
                width={120.28}
                height={25.34}
                src={imageUrl2}
                alt="top-left hexagon"
                className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]"
              />
            ) : (
              <div className="absolute text-primaryGray top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] myFlex flex-col justify-center gap-1">
                {icon && <Image width={24} height={24} src={icon} alt="icon" />}
                <p className="font-neuebold">{title}</p>
                <p className="text-center text-xs">{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
