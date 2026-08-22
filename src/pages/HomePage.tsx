import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

type Props = {};

const HomePage = ({}: Props) => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";
  const mutedText = isDark ? "text-[#c7c4d7]" : "text-gray-600";
  const border = isDark ? "border-gray-800" : "border-gray-200";
  const surface = isDark ? "bg-gray-900" : "bg-white";

  return (
    <div
      className={`min-h-dvh pt-16 ${
        isDark ? " text-[#e4e1e5]" : "text-gray-900"
      }`}
    >
      <main>
        <section className="mx-auto w-full px-5 pb-20 pt-[120px] md:px-20 rounded-2xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h1 className="text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[72px] md:leading-[1.1] md:tracking-[-0.04em]">
                Build faster with Ease UI
              </h1>
              <p
                className={`max-w-xl text-lg leading-[1.6] tracking-[-0.01em] ${mutedText}`}
              >
                A collection of accessible, high-performance React components
                designed for the modern web. Built with Tailwind CSS and
                TypeScript.
              </p>

              <div className="flex flex-wrap gap-4">
                <NavLink
                  to={"/components/buttons"}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-linear-to-r from-[#494bd6] to-[#03b5d3] px-10 text-sm font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-opacity hover:opacity-80"
                >
                  Browse Components
                </NavLink>
              </div>
            </div>

            <div
              className={`relative hidden aspect-square w-full overflow-hidden rounded-lg border p-2 md:block lg:aspect-square ${border} ${surface}`}
            >
              <div
                className="h-full w-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url('../src/assets/heroCard.jpg')",
                }}
              />

              <div
                className={`absolute bottom-6 left-6 right-6 rounded-lg border p-4 shadow-2xl backdrop-blur-xl lg:left-auto lg:w-2/3 ${
                  isDark
                    ? "border-[#27272a]/80 bg-[rgba(9,9,11,0.7)]"
                    : "border-white/80 bg-white/85"
                }`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#F55D56]" />
                  <div className="h-3 w-3 rounded-full bg-[#EFBD26]" />
                  <div className="h-3 w-3 rounded-full bg-[#25C342]" />
                </div>
                <pre
                  className={`overflow-x-auto font-mono text-sm leading-normal ${mutedText}`}
                >
                  <span className="text-[#c0c1ff]">import</span> {"{ Button }"}
                  <span className="text-[#c0c1ff]">from</span>
                  <span className="text-[#4cd7f6]"> '@src/component' </span> ;
                  {"\n\n"}
                  <span className="text-[#c0c1ff]">
                    export default function
                  </span>
                  <span className="text-[#4cd7f6]">App</span>() {"{"} {"\n "}
                  <span className="text-[#c0c1ff]">return</span> ( {"\n <"}
                  <span className="text-[#4cd7f6]">Button</span> variant=
                  <span className="text-[#4cd7f6]">"primary"</span> glow&gt;
                  {"\n "}Launch Sequence {"\n "}&lt;/
                  <span className="text-[#4cd7f6]">Button</span>&gt; {"\n "});
                  {"\n}"}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
