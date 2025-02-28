import { theme } from "@/src/constants/theme";
import Image from "next/image";
import myPhoto from "@/public/photo3.jpeg";
import { links } from "../constants/links";

export function Home() {
  const skillNames = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJs",
    "SCSS",
    "TailwindCSS",
    "ExpressJs",
    "NestJs",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Figma",
    "Git",
    "Docker",
    "prometheus",
    "Jest",
  ].reduce<string[]>(
    (acc, curr, index, array) =>
      index % 2 !== 0
        ? [
            ...acc,
            `icons?i=${array[index - 1].toLowerCase()},${curr.toLowerCase()}`,
          ]
        : acc,
    [],
  );
  return (
    <main
      className="mt-[5rem] h-full bg-color3 py-[10rem] pb-[12rem] max-[750px]:py-[5rem]"
      id="home"
    >
      <section className="mx-auto flex h-full w-fit max-w-[60%] flex-col items-center justify-center gap-4 max-[500px]:max-w-[80%]">
        <div className="flex flex-row-reverse items-center gap-6 max-[530px]:flex-col-reverse">
          <div className="flex max-w-[35rem] flex-col gap-6">
            <div className="my-8 text-[2.5rem] font-bold leading-[1.2] text-color1">
              Software Developer 👋🏻
            </div>
            <div className="max-w-[30rem] text-lg">
              {
                "Hi, I'm Rayen Mabrouk. A passionate Software Developer based in Sousse, Tunisia. 📍"
              }
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  className="cursor-pointer text-[1.75rem] transition-all ease-linear hover:text-color4"
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={myPhoto}
              className="relative min-h-[18rem] min-w-[18rem] animate-morph rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border-[3px] border-solid border-[#2d2e32] bg-[50%] transition-all duration-[1s] ease-[ease-in-out] max-[750px]:h-[10rem] max-[750px]:w-[10rem] max-[540px]:h-[5rem] max-[540px]:w-[5rem]"
              alt=""
            />
          </div>
        </div>
        <footer className="mt-12 flex flex-row items-center justify-center gap-6 max-[650px]:flex-col">
          <div className="mr-2 whitespace-nowrap border-r-2 border-solid border-r-color1 pr-6 text-xl font-normal leading-6 text-color1">
            Tech Stack
          </div>
          <ul className="flex flex-row items-center justify-center gap-6 max-[1300px]:flex-wrap">
            {skillNames.map((iconsLink, index) => (
              <li key={"skill" + index}>
                <Image
                  src={
                    "https://skillicons.dev/" +
                    iconsLink +
                    `&theme=${theme === "dark" ? "light" : "dark"}`
                  }
                  className="size-[6rem] cursor-pointer transition-all duration-300 ease-linear hover:translate-y-[-5px] hover:scale-[120%]"
                  alt=""
                  width={50}
                  height={50}
                />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </main>
  );
}
