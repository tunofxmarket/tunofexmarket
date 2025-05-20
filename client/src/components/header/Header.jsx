import React, { useEffect } from "react";
import { Collapse } from "flowbite";
import { links } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navLinks = links(t);

  // ✅ Fix: use startsWith instead of ===
  const changeLanguage = () => {
    const currentLang = i18n.language.startsWith("fr") ? "fr" : "en";
    const newLang = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const $targetEl = document.getElementById("navbar-sticky");
    const $triggerEl = document.querySelector(
      '[data-collapse-toggle="navbar-sticky"]'
    );
    const collapse = new Collapse($targetEl, $triggerEl);
    return () => {
      if (collapse) collapse.destroy();
    };
  }, []);

  return (
    <div className="header__section">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap gap-4 items-center justify-between mx-auto p-4">
          {/* Logo and brand name */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="" className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tunofex Fx Market
            </span>
          </a>

          {/* Buttons and Language Switch */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="inline-block flex gap-4">
              <Link to="/signin">
                <button
                  type="button"
                  className="text-primary outline outline-2 outline-secondary-light hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t("auths.login")}
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="text-primary font-bold bg-secondary-light hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t("auths.getStarted")}
                </button>
              </Link>
              {/* 🌍 Language Toggle Button */}
              <button
                onClick={changeLanguage}
                className="text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              >
                {i18n.language.startsWith("fr") ? "EN" : "FR"}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={
                      location.pathname === link.path
                        ? "block py-2 px-3 text-primary bg-secondary-light rounded md:bg-secondary-light md:text-primary md:p-3 dark:text-white md:dark:text-blue-500"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
