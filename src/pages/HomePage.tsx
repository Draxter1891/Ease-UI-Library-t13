import { NavLink, useNavigate } from "react-router";

type Props = {};

const HomePage = ({}: Props) => {

  const navigate = useNavigate();

  return (
    <div className="min-h-dvh bg-black text-[#e4e1e5] antialiased pt-16">
      <main>
      
        <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-[120px] md:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            
            <div className="flex flex-col gap-10">
              <h1 className="text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[72px] md:leading-[1.1] md:tracking-[-0.04em]">
                Build faster with Ease UI
              </h1>
              <p className="max-w-xl text-lg leading-[1.6] tracking-[-0.01em] text-[#c7c4d7]">
                A collection of accessible, high-performance React components
                designed for the modern web. Built with Tailwind CSS and
                TypeScript.
              </p>
              {/* Hero Buttons */}
              <div className="flex flex-wrap gap-4">
                <NavLink
                  to={"/components"}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-linear-to-r from-[#494bd6] to-[#03b5d3] px-10 text-sm font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-opacity hover:opacity-80"
                >
                  Get Started
                </NavLink>
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#27272a] px-10 text-sm font-medium text-[#e4e1e5] transition-colors hover:border-[#3f3f46]"
                >
                  Browse Components
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Hero Graphic */}
            <div className="relative hidden aspect-square w-full overflow-hidden rounded-lg border border-[#27272a] bg-[#09090b] p-2 md:block lg:aspect-square">
              <div
                className="h-full w-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbwDlswYWduYsAQ7D20q2dUClpQ6Xo9e0-0H-PWrezbhGnj0qBl9RkUh2sr8R0Txha5dtxbT5nZq3YG2r-HvFMf4IZ60ISNBNTO9I0XwrzaR-kFZ9YjvaEarf1Xu8V2LUBPRGXFt2wM0Ud_JPrM9u8zUGKBDevM6uboK6h3Hm7oazO_Ahlnokq7x0CsV9eL5F9dVrU6uVW3aXCpRQhuAABJJPFXmAYBCdEzKR-rD3FZtoo3IET4A')",
                }}
              />
              {/* Code Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-[#27272a]/80 bg-[rgba(9,9,11,0.7)] p-4 shadow-2xl backdrop-blur-xl lg:left-auto lg:w-2/3">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#3f3f46]" />
                  <div className="h-3 w-3 rounded-full bg-[#3f3f46]" />
                  <div className="h-3 w-3 rounded-full bg-[#3f3f46]" />
                </div>
                <pre className="overflow-x-auto font-mono text-sm leading-normal text-[#c7c4d7]">
                  <span className="text-[#c0c1ff]">import</span> {"{ Button }"}
                  <span className="text-[#c0c1ff]">from</span>
                  <span className="text-[#4cd7f6]"> '@obsidian/flux' </span> ;
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
        {/* Features */}
        <section className="mx-auto max-w-[1440px] border-t border-[#464554]/10 px-5 py-20 md:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#27272a] bg-[#09090b] text-[#c0c1ff]">
                <span className="material-symbols-outlined"> code </span>
              </div>
              <h3 className="text-xl font-semibold"> TypeScript Ready </h3>
              <p className="leading-[1.6] text-[#c7c4d7]">
                Built from the ground up with strict TypeScript support for
                robust developer experience.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#27272a] bg-[#09090b] text-[#4cd7f6]">
                <span className="material-symbols-outlined">accessibility</span>
              </div>
              <h3 className="text-xl font-semibold"> Fully Accessible </h3>
              <p className="leading-[1.6] text-[#c7c4d7]">
                WAI-ARIA compliant components ensuring your applications are
                usable by everyone.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#27272a] bg-[#09090b] text-[#494bd6]">
                <span className="material-symbols-outlined">
                  design_services
                </span>
              </div>
              <h3 className="text-xl font-semibold"> Utility First </h3>
              <p className="leading-[1.6] text-[#c7c4d7]">
                Seamlessly integrates with Tailwind CSS allowing endless
                customization without CSS bloat.
              </p>
            </div>
          </div>
        </section>
        {/* Component Showcase */}
        <section className="mx-auto max-w-[1440px] px-5 py-[120px] md:px-20">
          <div className="mb-10">
            <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-5xl">
              Precision Engineered
            </h2>
            <p className="mt-4 text-lg leading-[1.6] text-[#c7c4d7]">
              A glimpse into the component anatomy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Modern Card */}
            <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-[#27272a] bg-[#09090b] p-6 transition-colors duration-150 hover:border-[#3f3f46] lg:col-span-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,193,255,0.05),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#c0c1ff]">
                  Glassmorphism
                </h4>
                <h3 className="mb-4 text-2xl font-semibold">Modern Card</h3>
              </div>
              <div className="relative z-10 w-full self-end md:w-1/2">
                <div className="flex items-center gap-4 rounded-lg border border-[#27272a]/80 bg-[rgba(9,9,11,0.7)] p-4 backdrop-blur-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#353437]">
                    <span className="material-symbols-outlined text-sm text-[#c7c4d7]">
                      person
                    </span>
                  </div>
                  <div>
                    <div className="mb-2 h-2 w-24 rounded-full bg-[#353437]" />
                    <div className="h-2 w-16 rounded-full bg-[#353437]/50" />
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons Card */}
            <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-[#27272a] bg-[#09090b] p-6 transition-colors duration-150 hover:border-[#3f3f46] lg:col-span-4">
              <div className="relative z-10 mb-10">
                <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#4cd7f6]">
                  Interaction
                </h4>
                <h3 className="text-2xl font-semibold"> Sleek Buttons </h3>
              </div>
              <div className="relative z-10 flex flex-grow flex-col items-center justify-center gap-4">
                <button className="h-12 w-full rounded-lg bg-gradient-to-r from-[#494bd6] to-[#03b5d3] font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-opacity hover:opacity-90">
                  Deploy Now
                </button>
                <button className="h-12 w-full rounded-lg border border-[#27272a] font-medium text-[#e4e1e5] transition-colors hover:border-[#3f3f46] hover:bg-[#353437]/20">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-auto w-full border-t border-[#464554] bg-[#131316] py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:gap-0 md:px-20">
          <div className="text-xl font-bold text-[#e4e1e5]">Ease UI </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#c7c4d7] transition-colors hover:text-[#c0c1ff]"
            >
              Github
            </a>
            <a
              href="#"
              className="text-[#c7c4d7] transition-colors hover:text-[#c0c1ff]"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-[#c7c4d7] transition-colors hover:text-[#c0c1ff]"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[#c7c4d7] transition-colors hover:text-[#c0c1ff]"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-[#c7c4d7] transition-colors hover:text-[#c0c1ff]"
            >
              Privacy
            </a>
          </div>
          <div className="text-[#4cd7f6]">
            © 2024 Ease UI. Built for the modern web.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
