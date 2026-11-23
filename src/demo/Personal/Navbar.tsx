import { toggleTheme } from "@/features/ThemeSlice";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import type { RootState } from "@/store/Store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.theme);
  const [showMobileNav, setshowMobileNav] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setshowMobileNav(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
  }, []);

  const closeMobileNav = () => setshowMobileNav(false);

  return (
    <nav
      ref={navRef}
      className={`relative z-20 w-full px-8 py-3 ${
        mode === "dark" ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1
            onClick={() => navigate("/")}
            className={`font-bold text-2xl cursor-pointer ${mode === "dark" ? "text-white" : "text-black"}`}
          >
            EaseUi
          </h1>

          <div className="hidden sm:flex items-center bg-transparent rounded-2xl px-3 py-1.5 border border-gray-500">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search components"
              className={`ml-2 bg-transparent outline-none text-base font-semibold text-gray-700 placeholder-gray-400 ${mode === "dark" ? "text-white" : "text-black"}`}
            />
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-gray-500">
          <NavLink
            to={"components/buttons"}
            className={`cursor-pointer ${mode === "dark" ? "text-gray-200 hover:text-gray-400" : "text-gray-900 hover:text-gray-500"}`}
          >
            Components
          </NavLink>
          <NavLink
            to={"about"}
            className={`cursor-pointer ${mode === "dark" ? "text-gray-200 hover:text-gray-400" : "text-gray-900 hover:text-gray-500"}`}
          >
            About
          </NavLink>
          <NavLink
            to={"templates"}
            className={`cursor-pointer ${mode === "dark" ? "text-gray-200 hover:text-gray-400" : "text-gray-900 hover:text-gray-500"}`}
          >
            Templates
          </NavLink>
          {mode === "dark" && (
            <li
              className="cursor-pointer p-2 rounded-full transition duration-100 ease-in hover:bg-gray-600"
              onClick={() => dispatch(toggleTheme())}
            >
              <Sun size={20} className="text-yellow-400" />
            </li>
          )}
          {mode === "light" && (
            <li
              className="cursor-pointer p-2 rounded-full  transition duration-100 ease-in hover:bg-gray-300"
              onClick={() => dispatch(toggleTheme())}
            >
              <Moon size={20} className="text-gray-900" />
            </li>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={showMobileNav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMobileNav}
          onClick={() => setshowMobileNav((prev) => !prev)}
          className={`rounded-md p-2 transition-colors md:hidden ${
            mode === "dark"
              ? "text-gray-200 hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {showMobileNav ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile Nav Options */}

      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out md:hidden ${
          showMobileNav
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`rounded-xl border p-3 shadow-lg transition-colors ${
              mode === "dark"
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
          <ul className="flex flex-col gap-1">
            <NavLink
              to={"components/buttons"}
              onClick={closeMobileNav}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${mode === "dark" ? "text-gray-200 hover:bg-gray-800 hover:text-white" : "text-gray-900 hover:bg-gray-100 hover:text-black"}`}
            >
              Components
            </NavLink>
            <NavLink
              to={"about"}
              onClick={closeMobileNav}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${mode === "dark" ? "text-gray-200 hover:bg-gray-800 hover:text-white" : "text-gray-900 hover:bg-gray-100 hover:text-black"}`}
            >
              About
            </NavLink>
            <NavLink
              to={"templates"}
              onClick={closeMobileNav}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${mode === "dark" ? "text-gray-200 hover:bg-gray-800 hover:text-white" : "text-gray-900 hover:bg-gray-100 hover:text-black"}`}
            >
              Templates
            </NavLink>
            {mode === "dark" && (
              <li
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-gray-800"
                onClick={() => {
                  dispatch(toggleTheme());
                  closeMobileNav();
                }}
              >
                <Sun size={20} className="text-yellow-400" />
                Light mode
              </li>
            )}
            {mode === "light" && (
              <li
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-900 transition-colors hover:bg-gray-100"
                onClick={() => {
                  dispatch(toggleTheme());
                  closeMobileNav();
                }}
              >
                <Moon size={20} className="text-gray-900" />
                Dark mode
              </li>
            )}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
