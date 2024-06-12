import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Footer } from "../components/Footer";
import Blog from "../components/Blog";

export default async function Page() {
  return (
    <main className="flex h-screen w-screen flex-col overflow-x-hidden bg-white">
      <Header />
      <Home />
      <About />
      <section
        id="projects"
        className="flex h-full w-full flex-col items-center justify-center bg-color3 py-[4rem] pb-[7rem] text-left"
      >
        <div className="mx-auto min-h-[50dvh] w-fit">
          <span className="mb-4 text-[1.5rem] font-bold uppercase text-color4">
            Projects
          </span>
          <div className="mx-auto flex h-full w-[68rem] flex-col">
            <div className="flex h-full flex-col items-center justify-center gap-8 px-10 pt-16 perspective">
              <span className="text-semibold bg-color3 text-center text-2xl">
                New projects coming soon.. 🤠
              </span>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
