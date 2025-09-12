import RiseText from "@/components/RiseText";
import ApproachSection from "@/components/services/ApproachSection";
import ICHSSteps from "@/components/services/ICHSSteps";
import ServicesFeaturedCards from "@/components/services/ServicesFeaturedCards";
import TayloredCargoSection from "@/components/services/TayloredCargoSection";

const ServicePage = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 my-20">
      <div className="px-5 lg:px-20 flex flex-col mt-16.5">
        <div className="flex flex-col">
          <RiseText
            text="We acknowledge that every"
            className="font-medium text-3xl"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="cargo shipment is unique,"
            className="font-medium text-3xl"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="that's why we offer flexible end-to-end solutions"
            className="font-medium text-base text-lightGray mt-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <ServicesFeaturedCards />
      </div>
      <div className="px-5 lg:px-20">
        <ApproachSection />
      </div>
      <div className="flex flex-col">
        <div className="px-5 lg:px-20 pb-10 flex flex-col">
          <RiseText
            text="Integrated Cargo Handling Services (ICHS)"
            className="font-medium text-3xl"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="A complete cargo handling solution that covers everything from port to destination"
            className="font-medium text-base text-lightGray mt-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <ICHSSteps />
      </div>
      <div className="px-5 lg:px-20 flex flex-col">
        <RiseText
          text="Tailored Cargo Services"
          className="font-medium text-3xl"
          start="top 100%"
          duration={1}
          stagger={0.02}
        />
        <RiseText
          text="A customizable cargo solution tailored to your logistics needs"
          className="font-medium text-base text-lightGray mt-2.5"
          start="top 100%"
          duration={1}
          stagger={0.02}
        />
        <TayloredCargoSection />
      </div>
      <div className="border-b border-lighterGray"></div>
    </div>
  );
};

export default ServicePage;
