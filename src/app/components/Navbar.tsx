export default function Navbar() {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 
      w-[95%] sm:w-[90%] lg:w-[80%] 
      rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg 
      px-4 sm:px-6 py-3 flex items-center justify-between z-50"
    >
      {/* Avatar / Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/avatar.png"
          alt="logo"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30"
        />
      </div>

      {/* Nav Links */}
      <ul className="hidden sm:flex gap-6 md:gap-8 text-white font-mono text-xs sm:text-sm">
        <li><a href="#home" className="hover:text-purple-300">{"</Home>"}</a></li>
        <li><a href="#about" className="hover:text-purple-300">{"</AboutMe>"}</a></li>
        <li><a href="#skills" className="hover:text-purple-300">{"</Skills>"}</a></li>
        <li><a href="#projects" className="hover:text-purple-300">{"</Projects>"}</a></li>
      </ul>
    </nav>
  )
}
