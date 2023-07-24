import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-10 bg-white shadow-md backdrop-blur-lg">
      <div className="container py-3">
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
