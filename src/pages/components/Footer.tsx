import type { RootState } from "@/store/Store";
import { useSelector } from "react-redux";
import { Link } from "react-router";



const Footer = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const mutedText = isDark ? "text-[#c7c4d7]" : "text-gray-600";
  return (
    <footer
      className={`mt-auto w-full border-t py-8 ${isDark?"border-gray-700":"border-gray-200"}`}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:gap-0 md:px-20">
        <div
          className={`text-xl font-bold ${isDark ? "text-[#e4e1e5]" : "text-gray-900"}`}
        >
          Ease UI{" "}
        </div>
        <div className="flex gap-6">
          <Link
            to={"https://github.com/Draxter1891/Task13-Cohort-3.0"} target="_blank" rel="noopener noreferrer"
            className={`transition-colors hover:text-[#c0c1ff] ${mutedText}`}
          >
            Github
          </Link>
       
          
          
          <Link
            to={"https://linkedin.com/in/tripathi-rishabh"} target="_blank" rel="noopener noreferrer"
            className={`transition-colors hover:text-[#c0c1ff] ${mutedText}`}
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-[#4cd7f6]">
          © {new Date().getFullYear()} Ease UI. Built for the modern web.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
