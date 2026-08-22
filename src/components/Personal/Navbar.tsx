import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log("this is theme->", mode);

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className={`font-bold text-2xl cursor-pointer ${mode==="dark"?"text-white":"text-black"}`}
        >
          EaseUi
        </h1>


        <div className="hidden sm:flex items-center bg-transparent rounded-md px-3 py-1.5 shadow-xs shadow-gray-300 border border-gray-200">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search components"
            className={`ml-2 bg-transparent outline-none text-base font-semibold text-gray-700 placeholder-gray-400 ${mode==="dark"?"text-white":"text-black"}`}
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-gray-500">
        <li
          onClick={() => navigate("components/buttons")}
          className={`cursor-pointer ${mode==="dark"?"text-gray-200 hover:text-gray-400":"text-gray-900 hover:text-gray-500"}`}
        >
          Components
        </li>
        <li className={`cursor-pointer ${mode==="dark"?"text-gray-200 hover:text-gray-400":"text-gray-900 hover:text-gray-500"}`}>About</li>
        <li className={`cursor-pointer ${mode==="dark"?"text-gray-200 hover:text-gray-400":"text-gray-900 hover:text-gray-500"}`}>Templates</li>
        {mode === "dark" && (
          <li
            className="cursor-pointer p-2 rounded-full transition duration-100 ease-in hover:bg-gray-600"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun size={20} className="text-yellow-400"/>
          </li>
        )}
        {mode === "light" && (
          <li
            className="cursor-pointer p-2 rounded-full  transition duration-100 ease-in hover:bg-gray-300"
            onClick={() => dispatch(toggleTheme())}
          >
            <Moon size={20} className="text-gray-900"/>
          </li>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-gray-700">☰</button>
    </nav>
  );
};

export default Navbar;
