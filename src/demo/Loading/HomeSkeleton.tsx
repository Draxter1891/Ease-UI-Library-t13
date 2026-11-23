import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

export default function HomeSkeleton() {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const placeholder = isDark ? "bg-neutral-700" : "bg-gray-200";
  const mutedPlaceholder = isDark ? "bg-neutral-800" : "bg-gray-100";

  return (
    <div
      className={`w-full h-screen px-6 py-16 animate-pulse ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left content */}
        <div className="flex flex-col gap-5">
          <div className={`h-12 w-full max-w-md rounded ${placeholder}`} />
          <div className={`h-12 w-3/4 max-w-sm rounded ${placeholder}`} />

          <div className="flex flex-col gap-2 mt-4">
            <div className={`h-4 w-full max-w-md rounded ${mutedPlaceholder}`} />
            <div className={`h-4 w-2/3 rounded ${mutedPlaceholder}`} />
          </div>

          <div className={`h-12 w-48 rounded-lg mt-4 ${placeholder}`} />
        </div>

        {/* Right code panel */}
        <div
          className={`border rounded-xl overflow-hidden h-[300px] md:h-[540px] relative ${
            isDark
              ? "border-neutral-800 bg-neutral-800/50"
              : "border-gray-200 bg-gray-100"
          }`}
        >
          <div
            className={`absolute bottom-6 right-6 left-6 md:left-16 rounded-lg p-5 flex flex-col gap-3 ${
              isDark ? "bg-neutral-900" : "bg-white"
            }`}
          >
            <div className="flex gap-2">
              <div className={`h-2.5 w-2.5 rounded-full ${placeholder}`} />
              <div className={`h-2.5 w-2.5 rounded-full ${placeholder}`} />
              <div className={`h-2.5 w-2.5 rounded-full ${placeholder}`} />
            </div>
            <div className={`h-3 w-full rounded ${placeholder}`} />
            <div className={`h-3 w-4/5 rounded ${placeholder}`} />
            <div className={`h-3 w-3/5 rounded ${placeholder}`} />
            <div className={`h-3 w-full rounded ${placeholder}`} />
            <div className={`h-3 w-2/3 rounded ${placeholder}`} />
          </div>
        </div>
      </div>
    </div>
  );
}