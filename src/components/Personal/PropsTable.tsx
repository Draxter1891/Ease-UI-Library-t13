import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";

  return (
    <div
      className={`overflow-hidden rounded-lg border shadow-sm ${
        isDark
          ? "border-gray-700 bg-gray-900 text-gray-100"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <table className="w-full">
        <thead className={isDark ? "bg-gray-800" : "bg-gray-50"}>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold ">Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Description
            </th>
          </tr>
        </thead>
        <tbody
          className={`divide-y ${isDark ? "divide-gray-700" : "divide-gray-200"}`}
        >
          {data.map((row, i) => (
            <tr
              key={i}
              className={`transition-colors ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
              }`}
            >
              <td
                className={`px-4 py-3 text-sm font-mono ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {row.prop}
              </td>
              <td
                className={`px-4 py-3 text-sm font-mono ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {row.type}
              </td>
              <td
                className={`px-4 py-3 text-sm font-mono ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {row.default}
              </td>
              <td
                className={`px-4 py-3 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
