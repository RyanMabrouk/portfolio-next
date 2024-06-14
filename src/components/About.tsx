import pcPicture from "@/public/pc.webp";
import title from "@/public/title.png";
import Image from "next/image";

export function About() {
  return (
    <>
      <div id="about" className="-mt-[10rem] mb-[10rem] bg-red-500"></div>
      <section className="mx-auto flex h-full max-w-[80rem] flex-row items-center justify-center gap-12 bg-white px-16 py-14">
        <div className="relative">
          <span className="absolute bottom-[0.5rem] right-[2.7rem] z-10 text-[4.5rem]">
            👨🏼‍💻
          </span>
          <Image
            src={pcPicture}
            alt="mee"
            className="h-[25rem] w-[30rem] rounded-[1.5rem]"
          />
          <Image
            src={title}
            alt=""
            className="absolute -bottom-[3rem] -right-[1.5rem] z-0 size-[13rem] animate-rotate rounded-full bg-white"
          />
        </div>
        <div className="max-w-[35rem] pr-6">
          <h3 className="mb-4 text-[1.2rem] font-bold uppercase text-color4">
            About me
          </h3>
          <h4 className="mb-8 text-[2rem] leading-[1.4] text-color1">
            Full-Satck Developer <br /> based in Sousse, Tunisia 📍
          </h4>
          <p className="text-color5">
            {
              "Hey, my name is Rayen, and I'm a Full Stack Developer. My passion is to create and develop comprehensive solutions, from a clean UI/UX on the front-end to robust and efficient systems on the back-end."
            }
            <br />
            <br />
            Currently, my primary tech stack includes Next.js for building user
            interfaces, Tailwind CSS for styling, and TypeScript for adding
            static types to JavaScript. I also use Nest.js for building
            efficient, scalable Node.js server-side applications, Supabase as an
            open source Firebase alternative, and Docker for creating,
            deploying, and running applications by using containerization.
          </p>
        </div>
      </section>
    </>
  );
}
