import type { RootState } from "@/store/Store";
import { UserRound } from "lucide-react";
import { useSelector } from "react-redux";

const Templates = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const border = isDark ? "border-[#27272a]" : "border-gray-200";
  const surface = isDark ? "bg-[#09090b]" : "bg-white";

  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-[120px] md:px-20 rounded-3xl"
      style={{
        background:
          "url('../src/assets/componentShowcase.jpg') center no-repeat",
      }}
    >
      <div className="mb-10">
        <h2 className="text-4xl text-white font-bold leading-tight tracking-[-0.02em] md:text-5xl">
          Precision Engineered
        </h2>
        <p className={`mt-4 text-lg leading-[1.6] text-gray-300`}>
          A glimpse into the component anatomy.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div
          className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-white/20 p-6 transition-all ease-in shadow-lg duration-150 lg:col-span-8 bg-white/10 backdrop-blur-md"
        >
          <div className="relative z-10">
            <h4 className={`mb-2 text-sm font-medium uppercase tracking-widest ${isDark?"text-white":"text-gray-900"}`}>
              Glassmorphism
            </h4>
            <h3 className="mb-4 text-2xl font-semibold">Modern Card</h3>
          </div>
          <div className="relative z-10 w-full self-end md:w-1/2">
            <div
              className={`flex items-center gap-4 rounded-lg border p-4 backdrop-blur-xl ${isDark ? "border-white/20 bg-black/20" : "border-white/20 shadow-lg bg-white/20"}`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark?"bg-white/60":"bg-black/60"}`}>
                <UserRound className={`${isDark?"text-black":"text-white"}`} />
              </div>
              <div>
                <div className={`mb-2 h-2 w-24 rounded-full ${isDark?"bg-gray-100":"bg-gray-900"}`}/>
                <div className={`mb-2 h-2 w-18 rounded-full  ${isDark?"bg-gray-200/40":"bg-gray-700"}`} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border p-6 transition-colors duration-150 lg:col-span-4 ${border} ${surface} ${isDark ? "hover:border-[#3f3f46]" : "hover:border-gray-400"}`}
        >
          <div className="relative z-10 mb-10">
            <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#4cd7f6]">
              Interaction
            </h4>
            <h3 className="text-2xl font-semibold"> Sleek Buttons </h3>
          </div>
          <div className="relative z-10 flex grow flex-col items-center justify-center gap-4">
            <button className="h-12 w-full rounded-lg bg-linear-to-r from-[#494bd6] to-[#03b5d3] font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-opacity hover:opacity-90">
              Deploy Now
            </button>
            <button
              className={`h-12 w-full rounded-lg border font-medium transition-colors ${isDark ? "border-[#27272a] text-[#e4e1e5] hover:border-[#3f3f46] hover:bg-[#353437]/20" : "border-gray-300 text-gray-900 hover:border-gray-500 hover:bg-gray-100"}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
