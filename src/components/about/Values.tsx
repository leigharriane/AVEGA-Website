import AwardIcon from "../../../public/icons/Award";
import BulbIcon from "../../../public/icons/Bulb";
import ProgressIcon from "../../../public/icons/Progress";
import SafetyCheckIcon from "../../../public/icons/SafetyCheck";
import ScaleIcon from "../../../public/icons/Scale";
import ServiceIcon from "../../../public/icons/Service";

const firstValues = [
  {
    title: "Excellence",
    description:
      "We handle every cargo with precision and urgency, maintaining the highest standards in every operation.",
    icon: AwardIcon,
    iconColor: "#D50000",
  },
  {
    title: "Safety",
    description:
      "We prioritize our crew, vessels, and cargo through rigorous protocols, expert training, and proactive maintenance.",
    icon: SafetyCheckIcon,
    iconColor: "#D50000",
  },
  {
    title: "Progress",
    description:
      "Every shipment moves the country forward. We strengthen supply chains by enhancing systems and expanding our reach.",
    icon: ProgressIcon,
    iconColor: "#D50000",
  },
  {
    title: "Service",
    description:
      "We respond to client needs with flexibility and reliability. Whether it's full coordination or custom logistics support, we deliver solutions built on trust and responsiveness.",
    icon: ServiceIcon,
    iconColor: "#D50000",
  },
  {
    title: "Innovation",
    description:
      "We streamline operations by refining processes, upgrading systems, and adopting new technologies.",
    icon: BulbIcon,
    iconColor: "#D50000",
  },
  {
    title: "Integrity",
    description:
      "We stay transparent in our service, fair in our dealings, and accountable in every delivery.",
    icon: ScaleIcon,
    iconColor: "#D50000",
  },
];

const Values = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-15">
        {firstValues.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div
              key={index}
              className="px-5 border-l-[3px] border-lightestGray"
            >
              <div>
                <div className="mb-10 text-red">
                  <IconComponent height={50} width={50} strokeWidth="2" />
                </div>
                <h2 className="mb-2.5 leading-[100%] text-xl font-bold">
                  {value.title}
                </h2>
                <p className="leading-[100%] text-base font-medium text-lightGray">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
