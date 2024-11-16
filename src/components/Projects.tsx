import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import fitboxImg from "@/public/fitbox.png";
import tuniflixImg from "@/public/tuniflix.jpeg";
import etutor from "@/public/e-tutor.png";
import safari from "@/public/safari.png";
import evowave from "@/public/evowave-2.png";

export function Projects() {
  const randomColors = [
    "text-orange-700",
    "text-blue-700",
    "text-red-700",
    "text-green-700",
    "text-yellow-700",
    "text-purple-700",
    "text-indigo-700",
    "text-pink-700",
  ];
  const projects = [
    {
      title: "Evowave",
      category: ["startup", "software development"],
      description: `
      Evowave is a dynamic startup at the forefront of web innovation, delivering cutting-edge SaaS solutions that redefine digital experiences.
      We specialize in creating powerful, user-centric web tools that address the complex challenges faced by modern businesses in the online space.
    Our team of passionate tech enthusiasts and creative problem-solvers is dedicated to pushing the boundaries of what's possible on the web.`,
      image: evowave,
      liveLink: "https://www.evowave.tech/",
    },
    {
      title: "Fitbox Gym Website",
      category: ["react", "tailwind css", "firebase", "redux toolkit"],
      description: `I created a website for FitBox, my local gym, using React for smooth navigation and interaction.
           The site looks clean and modern thanks to Tailwind CSS. I used Redux toolkit to keep everything organized.
            The website features a gallery showcasing gym facilities and events, timetables for all classes and sessions,
             information on available sessions and trainers, and contact and location details.
              This project demonstrates my ability to build user-friendly and attractive websites.`,
      image: fitboxImg,
      githubLink: "https://github.com/RyanMabrouk/Fitbox?tab=readme-ov-file",
      liveLink: "https://fitbox-gym.web.app/",
    },
    {
      title: "Tuniflix",
      category: ["react", "css", "axios", "redux toolkit"],
      description: `I developed Tuniflix using React and the TMDB API to provide a vast library of movies and TV shows.
           With Tuniflix, users can discover new shows and learn more about their favorites.
            This project showcases my skills in API integration and creating engaging, user-friendly interfaces.`,
      image: tuniflixImg,
      githubLink: "https://github.com/RyanMabrouk/tuniflix?tab=readme-ov-file",
      liveLink: "https://tunifilm-eeca8.web.app/",
    },
    {
      title: "Sfari Kids",
      category: ["next", "react Query", "supabase", "tailwind css"],
      description: ` developed Sfari Kids using Next.js, React Query, and Supabase to
       create an engaging e-commerce platform for children's toys. The site offers a 
       diverse selection of toys, games, and educational products for kids of all ages.
        This project showcases my ability to build interactive and user-friendly websites
         with a strong emphasis on user experience. Additionally, the website includes an
          admin dashboard for managing products and orders efficiently. `,
      image: safari,
      liveLink: "https://safari-kids.vercel.app",
    },
    {
      title: "E-Tutor API",
      category: ["nestjs", "jest", "postgres", "socket.io"],
      description: `I built an API for an e-learning platform using NestJS, enabling features like
         buying courses and lectures, role-based access control (RBAC),
           real-time messaging, notifications and more.. This project demonstrates
            my backend development skills and ability to create robust, scalable systems. `,
      image: etutor,
      githubLink: "https://github.com/RyanMabrouk/E-Tutor-Api",
    },
  ];
  return (
    <section className="flex h-full w-full bg-color3 pt-[4rem]">
      <div className="mx-auto flex flex-col gap-10" id="projects">
        <span className="mb-4 h-full text-[1.5rem] font-bold uppercase text-color4">
          Projects
        </span>
        <div className="flex w-[70rem] flex-col justify-between gap-x-[5rem] gap-y-[3rem] px-10">
          {projects.length > 0 ? (
            projects.map((e, i) => (
              <div key={i} className="flex w-full flex-row gap-4">
                <div
                  className={`group relative h-[17.5rem] w-[50rem] flex-row justify-center gap-4 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-200 ease-linear hover:z-50 hover:rotate-0 hover:scale-105 hover:shadow-xl`}
                >
                  <Image
                    src={e.image}
                    alt=""
                    className="h-full w-full rounded-lg object-cover transition-all duration-[400ms] ease-in-out group-hover:scale-[110%] group-hover:blur-sm group-hover:brightness-50"
                  />
                  <span
                    className={`absolute flex h-fit w-fit flex-row items-center gap-5 text-white opacity-0 group-hover:opacity-100 ${
                      e.githubLink && e.liveLink ? "inset-[40%]" : "inset-[45%]"
                    }`}
                  >
                    {e.githubLink && (
                      <a
                        href={e.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2 cursor-pointer text-[2rem] transition-all ease-linear hover:scale-[120%]"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {e.liveLink && (
                      <a
                        href={e.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2 cursor-pointer text-[2rem] transition-all ease-linear hover:scale-[120%]"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </span>
                </div>
                <div className="z-10 flex h-full w-full flex-col items-start justify-start gap-3 px-4 py-4 transition-all duration-300 ease-linear">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xl font-semibold text-color1">
                      {e.title}
                    </span>
                    <span className="flex flex-row items-center gap-2">
                      {e.githubLink && (
                        <a
                          href={e.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="my-2 cursor-pointer text-[1.25rem] transition-all ease-linear hover:text-color4"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {e.liveLink && (
                        <a
                          href={e.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="my-2 cursor-pointer text-[1.15rem] transition-all ease-linear hover:text-color4"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </span>
                    <span className="flex flex-row gap-2 text-sm">
                      {e.category.map((cat, catI) => {
                        return (
                          <span
                            className={
                              randomColors[(i % 2) * 4 + catI] + " capitalize"
                            }
                            key={"cat" + catI}
                          >
                            {"#" + cat}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <div className="text-color1">
                    <span>
                      {e.description.replace(/<[^>]*>?/gm, "").slice(0, 250)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span className="text-semibold bg-color3 text-center text-2xl">
              New projects coming soon.. 🤠
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
