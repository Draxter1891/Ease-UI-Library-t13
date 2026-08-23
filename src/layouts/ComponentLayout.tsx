import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, PanelLeftClose } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";

  const components = [
    "Buttons",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Tooltip",
    "Carousel",
    "Layout",
  ];

  return (
    <div
      className={`flex min-h-[calc(100vh-16vh)] relative ${
        isDark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {sidebarOpen && (
        <aside
          className={`
          w-64 p-6 hidden sm:flex flex-col
          h-screen
          border-r
          ${isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
        >
          <div className="flex justify-between items-center select-none">
            <h2 className="text-md font-bold mb-6">Components</h2>
            <button
              className={`mb-4 p-1 rounded-lg transition ease-in duration-100 ${isDark ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-400"} cursor-e-resize`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <PanelLeftClose size={20} />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {components.map((item) => (
              <li
                onClick={() => navigate(item.toLowerCase())}
                key={item}
                className={`cursor-pointer text-md hover:translate-x-1 transition-all duration-200 ease-in-out ${
                  location.pathname === `/components/${item.toLowerCase()}`
                    ? isDark
                      ? "text-white"
                      : "text-black"
                    : isDark
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-400 hover:text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="flex-1 ml-10 overflow-auto custom-scrollbar h-screen p-6">
        <button
          className={`${sidebarOpen ? "hidden" : "flex"} ${isDark ? "text-gray-200" : "text-gray-700"}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
