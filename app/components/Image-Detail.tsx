import Image from "next/image";

interface ImageDetailProps {
  image: any;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ image }) => {
  return (
    <Image
      src={`/${image}.jpeg`}
      className="object-cover rounded shadow-lg h-[66vh] w-full"
      alt="Image-Detail"
    />
  );
};

export default ImageDetail;
