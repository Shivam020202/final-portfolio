// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export default async function handler(req, res) {
//   const folderName = "portfolio";

//   try {
//     const result = await cloudinary.search
//       .expression(`folder:${folderName}`)
//       .sort_by("public_id", "desc")
//       .max_results(30)
//       .execute();

//     res.status(200).json(result.resources);
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     res.status(500).json({ error: "Error fetching images" });
//   }
// }
