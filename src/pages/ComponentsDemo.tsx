import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-sm border ${
        isDark
          ? "border-gray-700 bg-gray-900 text-gray-100"
          : "border-gray-200 bg-gray-200 text-gray-900"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-2 border-b ${
          isDark
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-gray-50"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Preview
        </span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className={`flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors ${
            isDark
              ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div
        className={`py-20 px-4 flex items-center justify-center ${
          isDark ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        {children}
      </div>

      {isCodeVisible && (
        <div className={isDark ? "border-t border-gray-700" : "border-t border-gray-200"}>
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
