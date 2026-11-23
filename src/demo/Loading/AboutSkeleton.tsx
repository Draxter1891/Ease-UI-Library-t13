import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

export default function AboutSkeleton() {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const placeholder = isDark ? "bg-neutral-700" : "bg-gray-200";
  const mutedPlaceholder = isDark ? "bg-neutral-800" : "bg-gray-100";

  return (
    <div
      className={`w-full px-6 py-20 animate-pulse ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
        <div className={`h-3 w-32 rounded ${placeholder}`} />
        <div className={`h-10 w-full max-w-xl rounded ${placeholder}`} />
        <div className={`h-4 w-full max-w-2xl rounded ${mutedPlaceholder}`} />
        <div className={`h-4 w-5/6 rounded ${mutedPlaceholder}`} />
        <div className={`h-4 w-3/4 rounded ${mutedPlaceholder}`} />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-xl border p-6 flex flex-col gap-4 ${
              isDark ? "border-neutral-800" : "border-gray-200"
            }`}
          >
            <div className={`h-10 w-10 rounded-lg ${placeholder}`} />
            <div className={`h-4 w-2/3 rounded ${placeholder}`} />
            <div className="flex flex-col gap-2">
              <div className={`h-3 w-full rounded ${mutedPlaceholder}`} />
              <div className={`h-3 w-full rounded ${mutedPlaceholder}`} />
              <div className={`h-3 w-3/4 rounded ${mutedPlaceholder}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}