import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="sticky bg-white shadow-md z-10 backdrop-blur-lg top-0 left-0 right-0">
      <div className=" container py-3">
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
