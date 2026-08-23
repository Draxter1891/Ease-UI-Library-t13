import { ArrowLeft, Clock3, Code2, Sparkles } from "lucide-react";

interface ComingSoonProps {
  componentName?: string;
}

const ComingSoon = ({ componentName = "Component" }: ComingSoonProps) => {
  return (
    <main className="h-full bg-[#030712] text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
        <section className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700 bg-[#111827] shadow-lg">
            <Code2 className="h-7 w-7 text-indigo-400" />
          </div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            In Development
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {componentName} is coming soon
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
            We&apos;re currently working on this component and polishing its
            API, accessibility, and documentation. It&apos;ll be available here
            soon.
          </p>

          {/* Preview Card */}
          <div className="relative mt-10 overflow-hidden rounded-lg border border-slate-700 bg-[#111827] text-left">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-700 bg-[#1e293b] px-4 py-3">
              <span className="text-xs font-medium text-slate-200">
                Preview
              </span>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock3 className="h-3.5 w-3.5" />
                Coming soon
              </div>
            </div>

            {/* Card Body */}
            <div className="flex min-h-56 flex-col items-center justify-center px-6 py-10">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500 [animation-delay:300ms]" />
              </div>

              <p className="text-sm text-slate-500">
                Component preview will appear here.
              </p>
            </div>
            <div className="absolute top-1/2 left-0 w-full ml-10 mb-10">
              <img
                className=" w-30 h-full "
                src="../src/assets/buildMode.svg"
                alt=""
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <ArrowLeft className="h-4 w-4" />
            <span>Select another component from the sidebar</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ComingSoon;
