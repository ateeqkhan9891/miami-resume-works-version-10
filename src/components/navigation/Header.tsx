import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E1D8]/80 bg-[#F7F5EF]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Logo />
          <DesktopNav />
        </div>

        <HeaderActions />
      </div>
    </header>
  );
}