import Image from "next/image";

const logos = [
  { src: "/images/marquee-logos/1.png", alt: "UNAHCO" },
  { src: "/images/marquee-logos/2.png", alt: "La Filipina" },
  { src: "/images/marquee-logos/3.png", alt: "Steel Asia" },
  { src: "/images/marquee-logos/4.png", alt: "Pilmico" },
  { src: "/images/marquee-logos/5.png", alt: "San Miguel Mills" },
  { src: "/images/marquee-logos/6.png", alt: "San Miguel Foods" },
  { src: "/images/marquee-logos/7.png", alt: "Cargill" },
  { src: "/images/marquee-logos/8.png", alt: "KKC" },
  {
    src: "/images/marquee-logos/9.png",
    alt: "Long Harbor Logistic Corporation",
  },
  { src: "/images/marquee-logos/10.png", alt: "MCR Agriventure Corporation" },
  { src: "/images/marquee-logos/11.png", alt: "Bounty" },
  { src: "/images/marquee-logos/12.png", alt: "National Food Authority" },
  { src: "/images/marquee-logos/13.png", alt: "Philcement" },
  { src: "/images/marquee-logos/14.png", alt: "Alibra" },
  { src: "/images/marquee-logos/15.png", alt: "Amigo" },
  { src: "/images/marquee-logos/16.png", alt: "Arvin International" },
  { src: "/images/marquee-logos/17.png", alt: "Pioneer Glass" },
  { src: "/images/marquee-logos/18.png", alt: "ADM" },
  { src: "/images/marquee-logos/19.png", alt: "Starport" },
  { src: "/images/marquee-logos/20.png", alt: "Top Armada" },
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
