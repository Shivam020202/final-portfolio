import React from "react";
import Link from "next/link";

const Note = () => {
  return (
    <div className="md:border-2 flex-col border-[#1c1c1c] md:bg-[#161616] md:bg-opacity-60 mt-10 mb-10 max-w-2xl flex  rounded-xl md:p-8 p-4">
      <p className="font-bold">Note -</p>
      <p className="text-[#919191] pt-2">
        This is a simple portfolio website created using Next.js and Tailwind .
        This is still under development and new changes to it are being updated
        quite frequently.
      </p>
      <br />
      <p className="italic text-[#919191]">I guess so ?</p>
      <br />
      {/* <p className="text-[#494949] text-base mb-4">
        the contact form is not working as of now , backend work is pending
      </p> */}
      <p className="text-[#919191]">
        Anyways check out its progress and maybe you can learn something from
        it. It&apos;s open source. But it is not top quality code by any
        standards , so don&apos;t judge me on that. I am using pinterest to host
        my images , it was quicker. lol <br />
        <br />
        Link to github -
      </p>

      <Link
        href="https://github.com/Shivam020202/final-portfolio"
        className="w-fit"
      >
        <p className="text-blue-500 hover:underline">My portfolio</p>
      </Link>

      <p className="mt-4 text-[#919191]">Try going here -</p>
      <ul className="w-fit">
        <li>
          <Link href="/404">
            <p className="text-red-500 hover:underline ">/404</p>
          </Link>
        </li>
        <li>
          <Link className="text-green-700 hover:underline" href="/whatsapp">
            <p>/whatsapp</p>
          </Link>
        </li>
        <li>
          <Link className="text-yellow-500 hover:underline" href="/message">
            <p>/message</p>
          </Link>
        </li>
        <li>
          <Link className="text-purple-500 hover:underline" href="/best-clicks">
            <p>/best-clicks</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Note;
