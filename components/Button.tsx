import Link from "next/link";
import Polygon from "./Polygon";
import { cn } from "@/lib/utils";

const Button = ({
  cta,
  link,
  className,
  action,
}: {
  cta: string;
  link?: string;
  className?: string;
  action?: () => void;
}) => {
  return (
    <button onClick={action ? () => action() : undefined}>
      <div
        className={cn(
          "relative bg-primary text-primaryBlack font-semibold myFlex justify-center px-4 w-fit h-[43px]",
          className
        )}
      >
        {/* Cut Corner */}
        <Polygon className="w-3 h-3 bg-white" />
        {link ? <Link href={link}>{cta}</Link> : <span>{cta}</span>}
      </div>
    </button>
  );
};

export default Button;
