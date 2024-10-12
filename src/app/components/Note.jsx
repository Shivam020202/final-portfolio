import React from "react";
import Link from "next/link";

const Note = () => {
  return (
    <div className="md:border-2 flex-col border-[#1c1c1c] md:bg-[#161616] md:bg-opacity-50 mt-10 mb-10 max-w-2xl flex  rounded-xl md:p-8 p-4">
      <p className="font-bold">Note -</p>
      <p className="text-[#919191] pt-2">
        This is a simple portfolio website created using Next.js and Tailwind .
        This is still under development and new changes to it are being uploaded
        quite frequently.
      </p>
      <br />
      <p className="italic text-[#919191]">I guess so ?</p>
      <br />
      <p className="text-[#919191]">
        Anyways check out it's progress and maybe you can learn something from
        it. It's open source. But it is not top quality code by any standards ,
        so don't judge me on that. I am using pinterest to host my images , it
        was quicker. lol <br />
        <br />
        Link to github -
      </p>
      <Link href="https://github.com/Shivam020202/final-portfolio">
        <p className="text-blue-500">My portfolio</p>
      </Link>
    </div>
  );
};

export default Note;
