import { cn } from "@/lib/utils";
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";

const universities = [
  { name: "IGNOU", logo: ignouLogo },
  { name: "Manipal University Online", logo: manipalLogo },
  { name: "Uttaranchal University", logo: uttaranchalLogo },
  { name: "Vivekananda Global University", logo: vguLogo },
  { name: "IGNOU", logo: ignouLogo },
  { name: "Manipal University Online", logo: manipalLogo },
  { name: "Uttaranchal University", logo: uttaranchalLogo },
  { name: "Vivekananda Global University", logo: vguLogo },
];

const UniversityLogosMarquee = () => {
  return (
    <div className="py-8 bg-white/50 overflow-hidden">
      <div className="flex animate-marquee space-x-8 md:space-x-16">
        {universities.map((university, index) => (
          <div key={index} className="flex flex-col items-center min-w-[120px] md:min-w-[140px]">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border p-2">
              <img
                src={university.logo}
                alt={university.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-xs md:text-sm text-center mt-2 text-gray-600 font-medium leading-tight">
              {university.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityLogosMarquee;