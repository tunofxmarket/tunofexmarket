import React from "react";
import { useTranslation } from "react-i18next";

function Trusted() {
  const { t } = useTranslation();

  return (
    <div className="innerWrapper flex w-full mx-auto py-10 justify-center">
      <div className="content text-center px-5 md:px-5 lg:px-5">
        <div className="top">
          <div className="title">
            <h1 className="font-extrabold uppercase text-3xl py-3 md:text-5xl lg:text-5xl md:py-5 lg:py-10">
              {t("trusted.title")}
            </h1>
            <img src="./assets/trusted-by.png" alt={t("trusted.trustedAlt")} />
          </div>
        </div>
        <div className="bottom text-center px-5 md:px-5 md:py-10 lg:px-5">
          <div className="title">
            <h1 className="font-extrabold uppercase text-3xl py-3 md:text-5xl lg:text-5xl md:py-5 lg:py-10">
              {t("trusted.award")}
            </h1>
            <img src="./assets/award-winner.png" alt={t("trusted.awardAlt")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
