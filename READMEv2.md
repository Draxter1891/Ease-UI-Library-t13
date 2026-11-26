# EaseUI

EaseUI is a React UI component library built with TypeScript. It provides reusable interface components with configurable styles, component variants, and selected GSAP-powered interactions.

The repository also contains a Vite-based demonstration website used to showcase the library.

## Features

- Reusable React components written in TypeScript.
- Component styling built with Tailwind CSS utilities.
- Variant-based styling powered by `class-variance-authority`.
- Class-name composition with `clsx` and `tailwind-merge`.
- Optional entrance and hover animations in supported components, powered by GSAP.
- TypeScript declaration files generated for package consumers.
- Separate build configurations for the demo website and the npm library.

## Components currently exported by the package

The package entry point currently exports the following components:

| Component | Description |
| --- | --- |
| `Button` | A button component with style variants, size options, optional entrance animation, and hover animation. Supports the `asChild` pattern through Radix Slot. |
| `Card` | A content card with optional title, description, image, footer, visual variant, size, and hover animation. |
| `Input` | A labelled input with optional hint or error text, size options, and default, error, or success styling tones. |
| `Modal` | A conditionally rendered modal with a backdrop, optional title and description, children, and close/done callbacks. |
| `Tooltip` | A tooltip wrapper with configurable content, position, and light or dark appearance. |

> **Export note:** The source tree also contains other input variants and a Navbar implementation, but they are not currently re-exported from the package's public entry point. They are therefore not listed as installable public components here. The demo contains additional pages; a demo page does not necessarily mean that a component is exported by the npm package.

## Requirements

- Node.js and npm.
- React 18 or later.
- React DOM 18 or later.

React and React DOM are declared as peer dependencies. Your application should provide them.

## Installation

Install EaseUI from npm:

```bash
npm install @draxter/easeui
```

Install React and React DOM in your application if they are not already installed:

```bash
npm install react react-dom
```

## Setup

Import the library stylesheet once in your application's entry file, such as `src/main.tsx`:

```tsx
import "@draxter/easeui/style.css";
```

The stylesheet contains the utility styles generated for the library components. Import it before using the components.

## Usage

Import the components you need from the package:

```tsx
import { Button, Card, Input, Modal, Tooltip } from "@draxter/easeui";
```

### Button

`Button` supports style variants, sizes, entrance animations, and hover animations.

```tsx
import { Button } from "@draxter/easeui";

export function Example() {
  return (
    <Button
      variant="primary"
      size="default"
      animation="fadeIn"
      hoverAnimation="jiggle"
      onClick={() => console.log("Button clicked")}
    >
      Get started
    </Button>
  );
}
```

Available `variant` values:

- `dark`
- `primary`
- `secondary`
- `destructive`
- `ok`
- `ghost`
- `link`
- `outline`

Available `size` values:

- `default`
- `sm`
- `lg`
- `xl`
- `icon`
- `full`
- `auto`

Available entrance animation values:

- `fadeIn`
- `scaleIn`
- `slideUp`
- `bounceIn`
- `none`

Available hover animation values:

- `jiggle`
- `scale`
- `bounce`
- `shadowPulse`
- `float3D`
- `wobbleFollow`
- `none`

The component also accepts standard button HTML attributes and supports `asChild` for rendering through a child element using Radix Slot.

### Card

`Card` can render a title, description, image, children, and an optional footer.

```tsx
import { Card } from "@draxter/easeui";

export function Example() {
  return (
    <Card
      title="Getting started"
      description="A reusable card for grouping related content."
      variant="light"
      size="md"
      animate
      hoverAnimation="scale"
    >
      <p>Place any React content inside the card.</p>
    </Card>
  );
}
```

Available `variant` values:

- `light`
- `dark`
- `outline`

Available `size` values:

- `sm`
- `md`
- `lg`

The `image` prop accepts an image URL. The `ratio` prop accepts `square`, `16:9`, or `4:3`. The `footer` prop accepts a React node. `Card` also accepts standard `div` HTML attributes and supports `asChild`.

### Input

`Input` supports a label, helper hint, error message, size, and visual tone.

```tsx
import { Input } from "@draxter/easeui";

export function Example() {
  return (
    <Input
      label="Email address"
      type="email"
      placeholder="name@example.com"
      hint="We will use this address to contact you."
      size="md"
      tone="default"
    />
  );
}
```

Available `size` values:

- `sm`
- `md`
- `lg`

Available `tone` values:

- `default`
- `error`
- `success`

When `error` is provided, it is displayed in place of `hint`. The component accepts standard input HTML attributes, except that its `size` and `disabled` props are handled by the component's own API.

### Modal

`Modal` is controlled through the `isOpen` prop. It returns nothing while `isOpen` is false.

```tsx
import { useState } from "react";
import { Button, Modal } from "@draxter/easeui";

export function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>

      <Modal
        isOpen={isOpen}
        title="Confirm action"
        description="Would you like to continue?"
        variant="light"
        size="md"
        onClose={() => setIsOpen(false)}
        onDone={() => setIsOpen(false)}
      >
        <p>Your modal content goes here.</p>
      </Modal>
    </>
  );
}
```

Available `variant` values:

- `light`
- `dark`
- `outline`

Available `size` values:

- `sm`
- `md`
- `lg`

`onClose` runs when the backdrop or Close button is clicked. `onDone` runs when the Done button is clicked. The component does not currently document built-in Escape-key handling or focus trapping; add and test those behaviors separately if your application requires them.

### Tooltip

Wrap an element with `Tooltip` and provide the content to display.

```tsx
import { Tooltip } from "@draxter/easeui";

export function Example() {
  return (
    <Tooltip content="More information" position="top" variant="dark">
      <button type="button">Hover or focus me</button>
    </Tooltip>
  );
}
```

Available `position` values:

- `top`
- `right`
- `bottom`
- `left`

Available `variant` values:

- `dark`
- `light`

## Styling and customization

EaseUI components use Tailwind CSS utility classes internally. You can pass `className` to the components that expose it to add or override styling.

Import the package stylesheet as described in the Setup section. If you use Tailwind CSS in your own application, keep your Tailwind setup compatible with the version and CSS output used by the library. The library build uses Tailwind CSS 4.

## Development

Clone the repository:

```bash
git clone https://github.com/Draxter1891/Task13-Cohort-3.0.git
cd Task13-Cohort-3.0
```

Install dependencies:

```bash
npm install
```

Start the demo website locally:

```bash
npm run dev
```

## Build commands

This repository has separate build commands for the demo website and the npm package.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server for the demo website. |
| `npm run build` | Builds the demo website into `dist/`. |
| `npm run build:lib` | Builds the library into `dist-lib/` and generates TypeScript declaration files. |
| `npm run typecheck` | Runs TypeScript using `tsconfig.app.json`. |
| `npm run preview` | Serves the production demo build locally for preview. |

To build the npm package:

```bash
npm run build:lib
```

The package metadata points to the generated files in `dist-lib/`. Do not publish before checking that the build completes and that the expected JavaScript, CSS, and declaration files are present.

## Publishing

The package is configured for public npm publishing. Before publishing a new version:

1. Confirm that the package name and version in `package.json` are correct.
2. Run the type-check command and resolve any errors.
3. Build the library with `npm run build:lib`.
4. Inspect the files that will be included in the package:

   ```bash
   npm pack --dry-run
   ```

5. Update the version using an appropriate semantic version increment.
6. Publish the package:

   ```bash
   npm publish
   ```

The `prepack` script runs the library build when npm prepares the package. Running the build manually first is still useful because it lets you review build output before publishing.

## Dependencies

The library uses the following runtime packages:

- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `gsap`
- `lucide-react`
- `tailwind-merge`

React and React DOM are peer dependencies and must be supplied by the consuming application.

## Project structure

```text
src/
├── components/       # Reusable UI components
├── demo/             # Supporting components used by demo pages
├── features/         # Demo application feature state
├── layouts/          # Demo application layouts
├── libs/             # Shared utilities and animation helpers
├── pages/            # Demo website pages
├── router/           # Demo application routing
├── store/            # Demo application store
├── index.ts          # Public library entry point
└── style.css         # Library stylesheet entry
```

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Make your changes and test the demo and library builds.
4. Open a pull request describing the change.

For bugs or feature requests, use the [GitHub Issues](https://github.com/Draxter1891/Task13-Cohort-3.0/issues) page.

## License

EaseUI is released under the MIT License. See the [LICENSE](./LICENSE) file for details.
