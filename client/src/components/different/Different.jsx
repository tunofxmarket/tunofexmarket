import React from "react";
import { useTranslation } from "react-i18next";
import { difference } from "../../data";

function Different() {
  const { t } = useTranslation();

  return (
    <div className="innerWrapper w-4/5 py-20 flex justify-center mx-auto">
      <div className="sectionContent w-full gap-5 md:gap-20 md:py-20 lg:py-20 flex flex-col md:flex-col lg:flex-row items-center">
        <div className="left w-full flex-1">
          <div className="title lg:pr-16 flex justify-center text-center">
            <h1 className="font-extrabold text-2xl text-center md:text-6xl lg:text-6xl lg:leading-normal">
              {t("difference.title")}
            </h1>
          </div>
        </div>
        <div className="right flex-1">
          <div className="rightContent flex flex-col gap-6">
            {difference.map((item) => (
              <div key={item.id} className="difference">
                <div className="text">
                  <p className="text-gray-400">
                    <span className="font-bold text-white">
                      {t(item.titleKey)}
                    </span>{" "}
                    – {t(item.textKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Different;
