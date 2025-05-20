import React from "react";
import { perks } from "../../data";
import { useTranslation } from "react-i18next";

function Perks() {
  const { t } = useTranslation();

  return (
    <div className="perksWrapper flex w-full bg-white items-center justify-center">
      <div className="perkContent flex flex-col sm:w-11/12 md:grid md:grid-cols-2 lg:flex-row lg:w-4/5 py-8 px-10 bg-white justify-between items-center drop-shadow-lg rounded-md">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="perk flex flex-col px-10 sm:w-full gap-6 py-10 hover:bg-secondary-light/25 rounded-sm"
          >
            <span className="flex items-center justify-center text-center text-6xl lg:text-6xl">
              {React.createElement(perk.icon)}
            </span>
            <h4 className="text-3xl lg:text-3xl font-bold text-center leading-10">
              {t(perk.nameKey)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perks;
