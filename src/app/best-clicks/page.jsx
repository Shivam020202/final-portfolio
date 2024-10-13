import React from "react";

const page = () => {
  return <div>I am kind of working on the gallery part right now </div>;
};

export default page;

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Page = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("/api/getImages");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setImages(data);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {images.map((image) => (
//         <Link
//           key={image.public_id}
//           href={image.secure_url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             src={image.secure_url}
//             alt={image.public_id}
//             width={1000}
//             height={1000}
//             className="w-full h-auto"
//           />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Page;
