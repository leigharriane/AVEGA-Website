import Button from "@/components/Button";
import Card from "@/components/home/Card";
import Divide from "@/components/home/Divide";
import FleetBlock from "@/components/home/FleetBlock";
import RiseText from "@/components/RiseText";
import RiseText2 from "@/components/RiseTextExp";
import Image from "next/image";

export default function Home() {
  const stats = [
    { value: 45, label: "Cargo Ships" },
    { value: 9, label: "Barges" },
    { value: 8, label: "Tugboats" },
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="relative flex">
        <div className="w-full h-[600px] absolute top-0 left-0 bg-black/40 rounded-b-lg"></div>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full object-cover h-[600px] rounded-b-lg"
        />

        <div className="absolute bottom-0 left-0 p-20 z-20 text-white flex flex-col gap-5">
          <div className="text-4xl max-w-[640px] leading-[120%]">
            <RiseText
              text="Your trusted partner for seamless cargo solutions in the Philippines"
              className=""
              markText={["seamless", "cargo", "solutions"]}
              markClassName="bg-transparent text-white font-semibold"
              start="top 80%"
              duration={1}
              stagger={0.02}
            />
          </div>
          <div className="flex flex-row gap-5">
            <Button
              link="/about"
              size="small"
              color="white"
              classN="text-base font-semibold"
            >
              Learn Our Story
            </Button>
            <Button
              link="/about"
              size="small"
              color="red"
              classN="text-base font-semibold"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
      <div className="px-20 flex flex-col gap-10">
        <RiseText
          text="Your Logistics, Your Way"
          className="text-4xl"
          start="top 80%"
          duration={1}
          stagger={0.02}
        />

        <div className="flex flex-col gap-5">
          <Card variant="firstHome" />
          <Card variant="secondHome" />
        </div>
      </div>
      <FleetBlock />
      {/* <div className="px-20 flex flex-row gap-10">
        <div className="flex flex-col gap-10">
          <RiseText
            text="A Diverse Fleet for Diverse Cargo Needs"
            className="text-4xl max-w-[480px]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <div className="w-full flex flex-row justify-between items-center">
            <Divide icon="45" text="Cargo Ships" />
            <Divide icon="9" text="Barges" />
            <Divide icon="8" text="Tugboats" />
          </div>
        </div>

        <Image
          src="/images/home-img3.png"
          alt="A Diverse Fleet for Diverse Cargo Needs"
          width={1920}
          height={1080}
          className="w-1/3 object-cover rounded-lg"
        />
      </div> */}
    </div>
  );
}
