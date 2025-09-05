"use client";
import { applications } from "@/app/services/jobsData";
import CareerForm from "@/components/careers/CareerForm";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = Number(params.id);

  const application = applications.find((app) => app.id === id);

  if (!application) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20 md:gap-20 my-20">
      <div className="flex flex-col gap-0"></div>
      <div className="px-5 lg:px-20 flex flex-col gap-5 items-center">
        <Image
          src="/images/logo.png"
          alt="Avega"
          width={58}
          height={42}
        ></Image>
        <div className="flex flex-col gap-2.5 items-center">
          <p className="font-medium text-lg text-lightGray">APPLY FOR</p>
          <h1 className="font-medium text-3xl">{application.position}</h1>
          <div className="font-medium text-base text-red flex gap-3">
            <span>{application.location}</span> • <span>{application.category}</span>
          </div>
        </div>
        <p className="font-medium text-base text-lightGray text-center">
          We’re glad you’d like to be part of our team! <br /> Just fill out the
          form below, and our HR team will be in touch.
        </p>
      </div>
      <div className="px-5 lg:px-20 flex flex-col">
        <CareerForm data={application}/>
      </div>
      <div className="border-b border-lighterGray"></div>
    </div>
  );
};

export default Page;
