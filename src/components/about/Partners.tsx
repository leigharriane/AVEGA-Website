import Image from "next/image";

const logos = [
  { src: "/images/logo.png", alt: "UNAHCO" },
  { src: "/images/logo.png", alt: "La Filipina" },
  { src: "/images/logo.png", alt: "Steel Asia" },
  { src: "/images/logo.png", alt: "Pilmico" },
  { src: "/images/logo.png", alt: "San Miguel Mills" },
  { src: "/images/logo.png", alt: "San Miguel Foods" },
  { src: "/images/logo.png", alt: "Cargill" },
  { src: "/images/logo.png", alt: "KKC" },
];

const Partners = () => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {logos.map((logo, e) => (
            <div
              key={e}
              className="flex items-center justify-center bg-[#FFFFFF] p-6 rounded-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={64}
                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
