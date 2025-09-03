import Button from "@/components/Button";
import RiseText from "@/components/RiseText";
import { ICHSSteps } from "@/components/services/ICHSSteps";
import TayloredCargo from "@/components/services/TayloredCargo";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="flex flex-col gap-20 my-20">
      <div className="px-20 flex flex-col">
        <div className="flex flex-col">
          <RiseText
            text="We acknowledge that every"
            className="font-medium text-3xl leading-[100%]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="cargo shipment is unique,"
            className="font-medium text-3xl leading-[100%]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="that's why we offer flexible end-to-end solutions"
            className="font-medium text-base text-lightGray leading-[100%] mt-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <div className="flex gap-5 flex-col md:flex-row mt-10">
          <div className="p-5 w-full bg-lightestGray rounded-lg flex items-center gap-5 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl  leading-[100%]">
                Integrated Cargo Handling Services (ICHS)
              </h1>
              <span className="font-medium text-base text-lightGray leading-[100%]">
                A seamless, end-to-end logistics solution{" "}
              </span>
              <Button
                color="red"
                size="small"
                classN="text-base font-semibold"
                link={"/services"}
              >
                More about ICHS
              </Button>
            </div>
            <Image
              src="/images/wh-pickup.png"
              alt="wh-pickup"
              width={1920}
              height={1080}
              className="w-5/12 object-cover min-w-[226px] h-[205px] rounded-md"
            ></Image>
          </div>
          <div className="p-5 w-full bg-lightestGray rounded-lg flex items-center gap-5 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl  leading-[100%]">
                Our Tailored Cargo Solutions
              </h1>
              <span className="font-medium text-base text-lightGray leading-[100%]">
                Customize your logistic needs with any of our services
              </span>
              <Button
                color="red"
                size="small"
                classN="text-base font-semibold"
                link={"/services"}
              >
                More about Cargo Solutions
              </Button>
            </div>
            <Image
              src="/images/nationwide.png"
              alt="wh-pickup"
              width={1920}
              height={1080}
              className="w-5/12 object-cover min-w-[226px] h-[205px] rounded-md"
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="px-20 pb-10 flex flex-col">
          <RiseText
            text="Integrated Cargo Handling Services (ICHS)"
            className="font-medium text-3xl leading-[100%]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="A complete cargo handling solution that covers everything from port to destination"
            className="font-medium text-base text-lightGray leading-[100%] mt-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <ICHSSteps />
      </div>
      <div>
        <div className="px-20 pb-10 flex flex-col">
          <RiseText
            text="Tailored Cargo Services"
            className="font-medium text-3xl leading-[100%]"
            start="top 100%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="A customizable cargo solution tailored to your logistics needs"
            className="font-medium text-base text-lightGray leading-[100%] mt-2.5"
            start="top 100%"
            duration={1}
            stagger={0.02}
          />
          <TayloredCargo />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
