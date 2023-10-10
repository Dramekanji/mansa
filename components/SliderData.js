import Image from "next/image";
import image2 from "../public/images/pt-still-2.png";
import image3 from "../public/images/pt-still-3.png";
import image4 from "../public/images/pt-still-4.png";
import image5 from "../public/images/pt-still-5.png";
import image6 from "../public/images/ghs2-still-1.png";

export const SliderData = [
  { image: <Image src={image2} alt="Image 2" width={width} height={height} /> },
  { image: <Image src={image3} alt="Image 3" width={width} height={height} /> },
  { image: <Image src={image4} alt="Image 4" width={width} height={height} /> },
  { image: <Image src={image5} alt="Image 5" width={width} height={height} /> },
  { image: <Image src={image6} alt="Image 6" width={width} height={height} /> },
];
