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
            Full-Satck Developer <br /> And Startup Co-Founder 📍
          </h4>
          <p className="text-color5">
            Hey, my name is Rayen, and {"I'm"} a Full Stack Developer. My
            primary job is a Software Developer in{" "}
            <strong className="mx-1">Takiacademy</strong> the biggest e-learning
            platform in Tunisia. {"I'm"} also a co-founder of a startup called
            <strong className="mx-1">Evowave</strong>where we build web and
            mobile applications for clients.
            <br />
            <br />
          </p>
        </div>
      </section>
    </>
  );
}
