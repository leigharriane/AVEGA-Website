import Nav from "@/components/Nav";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans ">
      <Nav />
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
