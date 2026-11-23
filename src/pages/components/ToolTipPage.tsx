import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/demo/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const ToolTipPage = () => {

  //this is the Code for the copy button clicks
  const usageCode = `import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="Helpful information" position="top">
  <Button size="sm">Hover me</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "Content displayed inside the tooltip.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The element that triggers the tooltip on hover or focus.",
    },
    {
      prop: "position",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Controls where the tooltip appears relative to its trigger.",
    },
    {
      prop: "variant",
      type: '"dark" | "light"',
      default: '"dark"',
      description: "Controls the tooltip color scheme.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional classes for custom tooltip styling.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-xl text-gray-600">
          Provides brief, contextual information when users hover over or focus an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Tooltip content="Displayed above the trigger" position="top">
              <Button size="sm">Top</Button>
            </Tooltip>
            <Tooltip content="Displayed to the right" position="right">
              <Button size="sm" variant="secondary">Right</Button>
            </Tooltip>
            <Tooltip content="Displayed below the trigger" position="bottom">
              <Button size="sm" variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="Displayed to the left" position="left" variant="light">
              <Button size="sm" variant="dark">Left</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default ToolTipPage;