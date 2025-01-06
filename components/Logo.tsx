import Image from "next/image";
import Link from "next/link";

const Logo = ({ variant = "home" }: { variant?: string }) => {
  const displayLogo = () => {
    switch (variant) {
      case "home":
        return (
          <Link href="/" className="w-fit cursor-pointer">
            <Image
              src="/logos/21ctl-logo.svg"
              width={122}
              height={26}
              alt="21st Century Technologies Logo"
            />
          </Link>
        );
      default:
        return null;
    }
  };

  return <div>{displayLogo()}</div>;
};

export default Logo;
