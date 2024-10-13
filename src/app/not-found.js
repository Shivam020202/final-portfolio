// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex mx-4 flex-col items-center  h-screen  text-white">
      <Image
        src="https://i.pinimg.com/564x/4f/b2/93/4fb293669a4d88691f4d265ae55f843c.jpg"
        width="1000"
        height="1000"
        alt="wolverine chuckling"
        className="w-full rounded-lg object-cover h-auto mt-5"
      />
      <h1 className="text-6xl font-bold mb-4 mt-5 text-red-500">404</h1>
      <p className="text-xl mb-8">
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <p className="text-xl mb-8">What else did you expect bub ?</p>
      {/* <p className="text-xl mb-8">What else did you expect bub ?</p> */}

      <Link href="/">
        <p className="px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700">
          Go back home
        </p>
      </Link>
    </div>
  );
}
