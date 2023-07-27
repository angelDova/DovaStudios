import Image from "next/image";

// const getPostsData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// const getDogData = async () => {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
//     cache: "no-store",
//   });
//   return res.json();
// };

// export default async function ListOfPosts() {
//   const dog = await getDogData();

//   return (
//     <div className="">
//       <Image src={dog.message} alt="dog" height={300} width={300} />
//     </div>
//   );
// }

const getUnsplashData = async () => {
  const res = await fetch("https://api.unsplash.com/photos?", {
    cache: "no-store",
  });
  console.log(res);
  return res.json();
};

export default async function ListOfPosts() {
  const unsplashImages = await getUnsplashData();

  return (
    <div className="">
      <Image src={unsplashImages} alt="dog" height={300} width={300} />
    </div>
  );
}
