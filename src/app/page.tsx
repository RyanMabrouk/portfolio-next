import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Footer } from "../components/Footer";
import Blog from "../components/Blog";
import { Projects } from "../components/Projects";

export default async function Page() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-white">
      <Header />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
