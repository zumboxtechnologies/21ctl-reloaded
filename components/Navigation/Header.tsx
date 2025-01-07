import { NavLink } from "@/types";
import Button from "../Button";
import Logo from "../Logo";
import { NavigationMenuLinks } from "./Navigation-menu";

const Header = ({
  navLinks,
  className,
}: {
  navLinks: NavLink[];
  className?: string;
}) => {
  return (
    <nav className="px-[3%] py-6 lg:px-[5%] myFlex justify-between fixed top-0 right-0 left-0">
      <Logo />
      <NavigationMenuLinks navLinks={navLinks} />
      <Button cta="Get Started Now" className={className} polycolor="bg-white"/>
    </nav>
  );
};

export default Header;
