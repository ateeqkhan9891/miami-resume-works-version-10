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
          <NavigationMenuTrigger className="cursor-pointer text-muted-foreground">
            Resume
          </NavigationMenuTrigger>
          <ResumesMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-muted-foreground">
            Cover Letter
          </NavigationMenuTrigger>
          <CoverLettersMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-muted-foreground">
            Learning
          </NavigationMenuTrigger>
          <LearningMegaMenu />
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
              <span className="text-muted-foreground">Pricing</span>
            </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}