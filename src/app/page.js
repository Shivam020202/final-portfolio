import Image from "next/image";
import Hero from "./components/Hero";
import ContactForm from "./components/Contact"; // Make sure this is your contact form component
import Resume from "./components/Resume";
import Note from "./components/Note";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="flex justify-center flex-col max-w-2xl mx-auto">
      <Hero />
      <Resume />
      <Works />
      <Note />
      {/* Add an ID to the ContactForm */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
