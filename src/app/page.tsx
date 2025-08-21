import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="relative flex">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full object-cover h-[600px] rounded-b-lg"
        />
        <div className="absolute bottom-0 left-0 p-20 z-20 text-white flex flex-col gap-5">
          <div className="text-4xl max-w-[640px] leading-[120%]">
            Your trusted partner for{" "}
            <mark className="bg-transparent text-white font-semibold">
              seamless cargo solutions
            </mark>{" "}
            in the Philippines
          </div>
          <div className="flex flex-row gap-5">
            <Button
              link="/about"
              size="medium"
              color="white"
              classN="text-lg font-semibold"
            >
              Learn Our Story
            </Button>
            <Button
              link="/about"
              size="medium"
              color="red"
              classN="text-lg font-semibold"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
      <div className="px-20 flex flex-col gap-10">
        <div className="text-4xl">Your Logistics, Your Way</div>
        <div className="flex flex-col gap-5">
          <Card variant={"default"} />
          <div></div>
        </div>
      </div>
    </div>
  );
}
