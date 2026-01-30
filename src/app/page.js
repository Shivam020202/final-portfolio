import Hero from "./components/Hero";
import Works from "./components/Works";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Note from "./components/Note";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Works />
      <Resume />
      <ContactForm />
      <Note />
    </div>
  );
}
