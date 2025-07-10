import React from "react";

const InfoCard = ({ imageSrc, sections }) => {
  return (
    <div className="relative max-w-xs xl:max-w-lg 2xl:max-w-xl border-[rgba(255,255,255,0.3)] backdrop-blur-md bg-[rgba(50,46,46,0.28)] text-white p-6 rounded-lg border border-gray-700">
      {/* Top Right Image */}
      <div className="relative">
  <div className="custom-gradient rounded-full p-2 absolute -top-16 -right-16 bg-gradient-to-r from-[#010101] via-[#3e3d3d] to-[#010101] z-10">
    <div className="bg-gradient-to-r from-[#3e3d3d] via-[#010101] to-[#010101] rounded-full flex items-center justify-center p-5">
      <img
        src={imageSrc}
        alt="Icon"
        className="w-12 h-12 2xl:w-16 2xl:h-16 object-contain"
      />
    </div>
  </div>
</div>

      {/* Content */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          {/* Heading */}
          <h2 className="text-xl 2xl:text-2xl font-bold text-orange-400 mb-1">{section.title}</h2>

          {/* Subheading */}
          {section.subtitle && (
            <p className="text-sm 2xl:text-base text-orange-300 mb-2">{section.subtitle}</p>
          )}

          {/* Features list */}
          {section.features && (
            <ul className="list-disc list-inside space-y-2">
              {section.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Paragraph */}
          {section.paragraph && (
            <p className="text-gray-300 2xl:text-xl">{section.paragraph}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
