// import { useEffect, useState } from "react";
// import Image from "./Image";

import Image from "next/image";

// export default function GetImages() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const response = await fetch(
//         `https://api.unsplash.com/photos?client_id=64ndFEQMfgPLuccP5fht1KmVpXHs3CImrH1AqeM21YM`
//       );
//       const data = await response.json();
//       setImages(data);
//       console.log(data);
//     };

//     fetchImages();
//   }, []);

//   return (
//     <>
//       {images.map((image, index) => (
//         <Image key={image.id} {...image} alt="image" />
//       ))}
//     </>
//   );
// }
const getUnsplashData = async () => {
  const res = await fetch("https://api.unsplash.com/photos/random", {
    cache: "no-store",
  });
  console.log(res);
  return res.json();
};

export default async function ListOfPosts() {
  const unsplashImages = await getUnsplashData();

  return (
    <div className="">
      <Image src={unsplashImages.message} alt="dog" height={300} width={300} />
    </div>
  );
}
