import Image from "next/image";

const Logo = ({ variant = "home" }: { variant?: string }) => {
  const displayLogo = () => {
    switch (variant) {
      case "home":
        return (
          <Image
            src="/logos/21ctl-logo.svg"
            width={122}
            height={26}
            alt="21st Century Technologies Logo"
          />
        );
      default:
        return null;
    }
  };

  return <div>{displayLogo()}</div>;
};

export default Logo;
