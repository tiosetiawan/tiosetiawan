export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-2 md:top-3 w-full z-50 px-4">
      <nav className="flex gap-0.5 md:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur flex-wrap justify-center">
        <a
          href="#home"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 text-xs md:text-sm"
        >
          Home
        </a>
        <a href="#projects" className="nav-item text-xs md:text-sm">
          Projects
        </a>
        <a href="#about" className="nav-item text-xs md:text-sm">
          About
        </a>
        <a href="#contact" className="nav-item text-xs md:text-sm">
          Contact
        </a>
      </nav>
    </div>
  );
};
