import { links } from "../constants/links";

export function Footer() {
  return (
    <footer className="w-full bg-color1 px-0 py-10">
      <div className="mx-auto my-0 max-w-[75rem] px-16 py-0 max-[800px]:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-white">
            Copyright © 2024. All rights are reserved
          </h3>
          <div className="mt-4 flex items-center justify-center gap-5">
            {links.map((link, index) => (
              <a
                className="cursor-pointer text-[1.75rem] text-white transition-all ease-linear hover:scale-[120%]"
                key={index}
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href={link.link}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
