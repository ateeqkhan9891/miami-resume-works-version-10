import Link from "next/link";
import ResumesMegaMenu from "./mega-menu/ResumesMegaMenu";
import CoverLettersMegaMenu from "./mega-menu/CoverLettersMegaMenu";
import LearningMegaMenu from "./mega-menu/LearningMegaMenu";


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            Resume
          </NavigationMenuTrigger>
          <ResumesMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            Cover Letter
          </NavigationMenuTrigger>
          <CoverLettersMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            Learning
          </NavigationMenuTrigger>
          <LearningMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" className="cursor-pointer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}