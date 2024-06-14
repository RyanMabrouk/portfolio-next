export function Header() {
  return (
    <header className="fixed left-0 top-0 z-[200] flex h-auto w-full items-center justify-between bg-white px-20 py-7 text-color1 shadow-[0_0_10px_rgba(0,0,0,0.09)]">
      <div className="cursor-normal text-2xl font-bold">Rayen.tech</div>
      <div className="flex flex-row items-center gap-6 text-lg font-semibold">
        <a
          href="#home"
          className="cursor-pointer transition-all ease-linear hover:text-color4"
        >
          Home
        </a>
        <a
          href="#about"
          className="cursor-pointer transition-all ease-linear hover:text-color4"
        >
          About
        </a>
        <a
          href="#projects"
          className="cursor-pointer transition-all ease-linear hover:text-color4"
        >
          Projects
        </a>
        <a
          href="#blog"
          className="cursor-pointer transition-all ease-linear hover:text-color4"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="cursor-pointer transition-all ease-linear hover:text-color4"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
