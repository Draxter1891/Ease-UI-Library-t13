import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

export default function TemplateSkeleton() {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const placeholder = isDark ? "bg-neutral-700" : "bg-gray-200";
  const mutedPlaceholder = isDark ? "bg-neutral-800" : "bg-gray-100";

  return (
    <div
      className={`w-full p-6 md:p-10 animate-pulse ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-8">
        <div className={`h-8 w-64 rounded ${placeholder}`} />
        <div className={`h-4 w-72 rounded ${mutedPlaceholder}`} />
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left glass card - spans 2 cols */}
        <div
          className={`md:col-span-2 border rounded-xl p-6 flex flex-col justify-between min-h-[280px] ${
            isDark
              ? "border-neutral-700 bg-neutral-800/40"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className={`h-3 w-28 rounded ${placeholder}`} />
            <div className={`h-5 w-40 rounded ${placeholder}`} />
          </div>
          <div
            className={`flex items-center gap-3 border rounded-lg p-3 w-full max-w-sm self-end ${
              isDark ? "border-neutral-700" : "border-gray-200"
            }`}
          >
            <div className={`h-8 w-8 rounded-full shrink-0 ${placeholder}`} />
            <div className={`h-3 w-full rounded ${placeholder}`} />
          </div>
        </div>

        {/* Right dark card */}
        <div
          className={`border rounded-xl p-6 flex flex-col gap-6 min-h-[280px] ${
            isDark
              ? "border-neutral-800 bg-black"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className={`h-3 w-20 rounded ${placeholder}`} />
            <div className={`h-5 w-32 rounded ${placeholder}`} />
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <div className={`h-11 w-full rounded-lg ${placeholder}`} />
            <div
              className={`h-11 w-full rounded-lg border ${mutedPlaceholder} ${
                isDark ? "border-neutral-700" : "border-gray-200"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}