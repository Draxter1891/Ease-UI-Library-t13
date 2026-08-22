import { Code2, Sparkles, UserStar } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

const features = [
  {
    title: "Design Precision",
    description:
      "Every component is engineered with meticulous attention to detail, maintaining sub-pixel perfection across all viewport permutations.",
    icon: Code2,
    iconClass: "text-indigo-300 bg-indigo-400/15",
  },
  {
    title: "Developer Experience",
    description:
      "Intuitive APIs, comprehensive TypeScript definitions, and exhaustive documentation to accelerate your workflow without friction.",
    icon: UserStar,
    iconClass: "text-cyan-300 bg-cyan-400/15",
  },
  {
    title: "Open Standards",
    description:
      "Built on robust web standards ensuring longevity, accessibility out-of-the-box, and seamless integration with the modern ecosystem.",
    icon: Sparkles,
    iconClass: "text-violet-300 bg-violet-400/15",
  },
];

const AboutPage = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] px-5 py-16 transition-colors duration-300 md:px-10 md:py-24`}
    >
      <main className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${
              isDark ? "text-cyan-300" : "text-indigo-600"
            }`}
          >
            About Ease UI
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Engineered for Performance
          </h1>
          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-6 md:text-base ${
              isDark ? "text-[#c7c4d7]" : "text-gray-600"
            }`}
          >
            We are building the next generation of web interfaces. Ease UI
            delivers precision-crafted React components designed for
            high-end applications, uncompromising accessibility, and
            unparalleled developer velocity.
          </p>
        </header>

        <section className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {features.map(({ title, description, icon: Icon, iconClass }) => (
            <div
              key={title}
              className={`min-h-64 rounded-xl border p-6 transition-colors duration-300 ${
                isDark
                  ? "border-[#303035] bg-[#151518] hover:border-[#4a4a53]"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
            >
              <div
                className={`mb-5 flex h-9 w-9 items-center justify-center rounded-md ${iconClass}`}
              >
                <Icon size={17} strokeWidth={2.2} />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p
                className={`mt-2 text-sm leading-5 ${
                  isDark ? "text-[#c7c4d7]" : "text-gray-600"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
