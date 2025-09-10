import Team from "@/components/about/Team";
import Timeline from "@/components/about/Timeline";
import Values from "@/components/about/Values";
import RiseText from "@/components/RiseText";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-15 md:gap-20 my-20">
      <div className="px-5 lg:px-20 flex flex-col mt-20">
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl leading-[100%] text-center">
            About Avega Bros. <br /> Integrated Shipping Corporation
          </h1>
          <p className="font-medium text-base leading-[100%] text-center text-lightGray mt-5">
            With over 40 years of experience, Avega Bros. has been a trusted
            logistics partner <br /> delivering end-to-end shipping and cargo
            solutions across the Philippines.
          </p>
          <Image
            alt="About"
            src="/images/about-hero.png"
            width={1920}
            height={1080}
            className="w-full object-cover h-[600px] rounded-lg mt-10"
          />
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col">
          <RiseText
            text="OUR JOURNEY"
            className="font-medium text-base text-lightGray leading-[100%] mb-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="From Roots to Routes"
            className="font-medium text-3xl leading-[100%]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <Timeline />
      </div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col gap-10">
          <div className="flex align-top flex-col gap-5 md:flex-row md:gap-0">
            <div className="w-[300px]">
              <h1 className="font-bold text-xl leading-[100%] text-left bg-gradient-to-r from-[#A30101] to-[#FF0000] bg-clip-text text-transparent">
                Vision
              </h1>
            </div>
            <p className="w-11/12 font-medium text-xl leading-[100%] text-left text-lightGray">
              To develop a seamless nationwide logistics network that connects
              Philippine industries through reliable and efficient cargo
              transport.
            </p>
          </div>
          <div className="flex align-top flex-col gap-5 md:flex-row md:gap-0">
            <div className="w-[300px]">
              <h1 className="font-bold text-xl leading-[100%] text-left bg-gradient-to-r from-[#A30101] to-[#FF0000] bg-clip-text text-transparent">
                Mission
              </h1>
            </div>
            <p className="w-11/12 font-medium text-xl leading-[100%] text-left text-lightGray">
              To strengthen the Philippine supply chain through operational
              excellence, infrastructure investment, client-focused cargo
              services that drive national growth.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col">
          <RiseText
            text="Values"
            className="font-medium text-3xl leading-[100%] mb-10"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <Values />
      </div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col">
          <RiseText
            text="Meet the Team"
            className="font-medium text-3xl leading-[100%] mb-10"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <Team />
      </div>
      <div className="border-b border-lighterGray"></div>
    </div>
    // <div>
    //   <section>
    //     <Values />
    //   </section>
    //   <section>
    //     <h1 className="leading-[100%] text-[54.93px] font-medium mb-[40px]">
    //       Meet the Team
    //     </h1>
    //   </section>
    //   <section>
    //     <h1 className="leading-[100%] text-[54.93px] font-medium mb-[40px]">
    //       AVEGA Partners
    //     </h1>
    //   </section>
    // </div>
  );
};

export default AboutPage;
