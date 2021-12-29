import Image from "next/image";
import profilePic from "../public/images/SFDemo.jpg";

type Props = {};

const Images: React.FC<Props> = () => {
  return (
    <>
      <h1>Image page</h1>
      <Image
        src={profilePic}
        alt="San Francisco Skyline"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        // priority // if the image is the Largest Contentful Paint (LCP) Element
      />
    </>
  );
};

export default Images;
