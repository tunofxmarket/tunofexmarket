import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tradingAssets, whyChoose } from "../../data";

function TradeAsset() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en"; // fallback to English

  return (
    <div className="innerWrapper flex flex-col w-11/12 lg:w-4/5 py-10 lg:py-20 md:flex-row justify-center items-center mx-auto">
      <div className="assetContent w-full">
        <div className="top w-full gap-10 flex flex-col lg:py-10 md:flex-row lg:flex justify-between">
          <div className="left flex-1">
            <div className="title">
              <h5 className="uppercase font-bold text-xl lg:text-2xl py-3">
                {t("trading.whyChoose", "Why choose forex and bitcoin trade?")}
              </h5>
            </div>
            <div className="text">
              <p className="text-base lg:text-lg">
                {t(
                  "trading.description",
                  "Cryptocurrencies are a borderless means of exchange allowing for instant and cost-effective transactions across the world..."
                )}
              </p>
            </div>
            <div className="button flex mt-8 lg:mt-12">
              <Link to="/">
                <button className="rounded-full font-semibold bg-black py-3 lg:py-4 px-8 lg:px-10 border-2 border-transparent text-white text-lg hover:bg-transparent hover:border-2 hover:border-black hover:text-black ">
                  {t("trading.button", "Trading Assets")}
                </button>
              </Link>
            </div>
          </div>
          <div className="right flex-1 mt-10 md:mt-0">
            <div className="rightContent">
              {tradingAssets.map((asset, index) => (
                <div key={index} className="assets flex gap-5 py-3 items-start">
                  <div className="icon bg-black text-white rounded-full p-3 text-2xl lg:text-3xl">
                    {React.createElement(asset.icon)}
                  </div>
                  <div className="assetText">
                    <h3 className="font-bold text-xl lg:text-2xl uppercase">
                      {t(asset.titleKey)}
                    </h3>
                    <p className="text-base lg:text-lg">{t(asset.textKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom w-full mt-10 lg:mt-20 flex justify-center">
          <div className="bottomContent w-full flex flex-col justify-center">
            <div className="bottomTitle lg:py-5">
              <h1 className="text-center uppercase font-extrabold text-3xl lg:font-extrabold lg:text-6xl">
                {t("trading.whyChooseUs", { defaultValue: "Why Choose Us" })}
              </h1>
            </div>
            <div className="whys w-full flex justify-center">
              <div className="whysContent mt-16 w-full flex flex-wrap justify-center gap-8">
                {whyChoose.map((why, index) => (
                  <div
                    key={index}
                    className="why flex flex-col items-center justify-center text-center w-36 lg:w-48"
                  >
                    <div className="icon text-4xl md:text-6xl lg:text-7xl text-primary">
                      {React.createElement(why.icon)}
                    </div>
                    <div className="subtitle mt-3">
                      <p className="font-semibold text-base lg:text-lg">
                        {t(why.titleKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeAsset;
