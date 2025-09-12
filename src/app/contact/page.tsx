import ContactForm from "@/components/contact/ContactForm";
import RiseText from "@/components/RiseText";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-15 md:gap-20 my-20">
      <div className="px-5 lg:px-20 pt-16.5">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 flex flex-col gap-5">
            <RiseText
              text="Let’s plan your shipment. What services are you looking for?"
              className="font-medium text-4xl leading-[100%]"
              start="top 80%"
              duration={1}
              stagger={0.02}
            />
            <RiseText
              text="We're committed to providing personalized assistance to meet your
              shipping needs."
              className="font-medium text-lg text-lightGray mb-20"
              start="top 80%"
              duration={1}
              stagger={0.02}
            />
            <div className="flex flex-col mb-10">
              <h1 className="font-medium text-xl mb-4">Chat with us</h1>
              <p className="font-medium text-base text-lightGray">
                Speak to our team via email
              </p>
              <a
                href="marketing@avegabros.com"
                className="font-medium text-base underline"
              >
                marketing@avegabros.com
              </a>
              <a
                href="operations@avegabros.com"
                className="font-medium text-base underline"
              >
                operations@avegabros.com
              </a>
            </div>
            <div className="flex flex-col mb-10">
              <h1 className="font-medium text-xl mb-4">Business Hours</h1>
              <p className="font-medium text-base text-lightGray">
                Monday - Friday, 8:00 AM - 5:00 PM
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <h1 className="font-medium text-xl mb-4">Locations</h1>
              <div>
                <p className="font-medium text-base text-lightGray">
                  Main Office
                </p>
                <p className="font-medium text-base underline">
                  Sitio Baha-baha, Tayud, Consolacion, Cebu 6001
                </p>
              </div>
              <div>
                <p className="font-medium text-base text-lightGray">
                  Cebu Branch
                </p>
                <p className="font-medium text-base underline">
                  J. De Veyra St., North Reclamation Area, Cebu City <br />
                  6000
                </p>
              </div>
              <div>
                <p className="font-medium text-base text-lightGray">
                  Makati Branch
                </p>
                <p className="font-medium text-base underline">
                  Alexander Suites G/F 8070 Tanguille St., cor. Estrella <br />
                  Avenue, San Antonio Village, <br />
                  Makati City 1203
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="border-b border-lighterGray"></div>
    </div>
  );
};

export default ContactPage;
