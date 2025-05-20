import React from "react";
import { Footer } from "flowbite-react";
import { contact, documents, usefulLinks } from "../../data";
import { Link } from "react-router-dom";
import "./footer.css";
import Ticker from "../marketTicker/Ticker";
import TradingViewWidget from "../marketTicker/Ticker";
import TradingViewTicker from "../marketTicker/Ticker";
import WhatsAppChat from "../whatsapp/Whatsapp";
import { useTranslation } from "react-i18next";

function Footercomp() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="innerWrapper bg-black text-white justify-center">
        <div className="content w-full flex py-10 px-5 md:px-20 lg:px-20 justify-center">
          <div className="contentWrapper grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-16 justify-center">
            <div className="about w-full justify-center mb-3">
              <div className="aboutContent">
                <p className="text-gray-400 text-left">{t("footer.about")}</p>
              </div>
            </div>
            <div className="usefulLink w-full flex md:text-left lg:text-left justify-center">
              <div className="usefulLinkContent">
                <Footer.Title
                  title={t("footer.headings.usefulLinks")}
                  className="text-base font-bold mb-3 text-gray-400"
                />
                <Footer.LinkGroup col className="gap-2">
                  {usefulLinks.map((link, index) => (
                    <Footer.Link
                      key={index}
                      href={link.link}
                      className="text-sm"
                    >
                      {t(link.name)}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="documents w-full">
              <div className="documentContent">
                <Footer.Title
                  title={t("footer.headings.documents")}
                  className="text-base font-bold mb-3 text-gray-400"
                />
                <Footer.LinkGroup col className="gap-2">
                  {documents.map((doc, index) => (
                    <Footer.Link
                      key={index}
                      href={doc.link}
                      className="text-sm"
                    >
                      {t(doc.name)}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="contact w-full">
              <div className="contactContent">
                <Footer.Title
                  title={t("footer.headings.contact")}
                  className="text-base font-bold mb-3 text-gray-400"
                />
                <Footer.LinkGroup col className="gap-2">
                  {contact.map((item, index) => (
                    <Footer.Link key={index}>{t(item.address)}</Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex w-full bg-black text-white justify-center">
        <div className="copyright w-4/5 flex justify-center">
          <p className="flex text-center py-5 text-gray-400">
            &copy; 2024 Tunofex Fx Market. {t("footer.copyright")}
          </p>
        </div>
      </div>
      <div className="whatsapp">
        <WhatsAppChat />
      </div>
      <div>
        <TradingViewTicker />
      </div>
    </footer>
  );
}

export default Footercomp;
