import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const BannerSection = () => {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="container flex gap-8">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default BannerSection;
