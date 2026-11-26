# EaseUI
 
 <a href="https://task13-cohort-3-0.vercel.app/" target="_blank">
  <img
    src="https://raw.githubusercontent.com/Draxter1891/Task13-Cohort-3.0/main/docs/demo.png"
    alt="EaseUI demo site landing page"
    width="800"
  />
</a>

<sub>Click the image to open the live demo.</sub>
<br><br><br>
EaseUI is a React UI component library built with TypeScript. It provides reusable interface components with configurable styles, component variants, and selected GSAP-powered interactions.

[npm](https://www.npmjs.com/package/@draxter/easeui) · [Issues](https://github.com/Draxter1891/Task13-Cohort-3.0/issues)
 
> **Status:** early release (0.1.0). The API may change before 1.0.
 
The repository also contains a Vite-based demonstration website used to showcase the library.
 
## Features
 
- Reusable React components written in TypeScript.
- Component styling built with Tailwind CSS utilities, shipped as precompiled CSS.
- Variant-based styling powered by `class-variance-authority`.
- Class-name composition with `clsx` and `tailwind-merge`.
- Entrance and hover animations in supported components, powered by GSAP.
- TypeScript declaration files for package consumers.
- Separate build configurations for the demo website and the npm library.
## Components
 
| Component | Description |
| --- | --- |
| `Button` | A button with style variants, size options, an entrance animation, and a hover animation. Supports the `asChild` pattern through Radix Slot. |
| `Card` | A content card with optional title, description, image, footer, visual variant, size, and hover animation. |
| `Input` | A labelled input with optional hint or error text, size options, and default, error, or success styling tones. |
| `Modal` | A conditionally rendered modal with a backdrop, optional title and description, children, and close/done callbacks. |
| `Tooltip` | A tooltip wrapper with configurable content, position, and light or dark appearance. |
 
Also exported from the same entry point: `AnimatedInput`, `FloatingLabelInput`, `InputWithIcon`, `NumberInput`, `PasswordInput`, and `Textarea`. The demo website contains additional pages; a demo page does not necessarily mean that a component is exported by the npm package.
 
## Requirements
 
- React 18 or later.
- React DOM 18 or later.
- A bundler that supports ES modules (Vite, Next.js, Webpack 5, and similar).
EaseUI is published as an ES module (ESM) only. React and React DOM are peer dependencies. Your application should provide them.
 
## Installation
 
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
 
By default, Button plays the `fadeIn` entrance animation and the `jiggle` hover animation. Pass `animation="none"` and `hoverAnimation="none"` to turn them off.
 
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
The `image` prop accepts an image URL. The `ratio` prop accepts `square`, `16:9`, or `4:3`. The `footer` prop accepts a React node. `Card` also accepts standard `div` HTML attributes and supports `asChild`. Card uses the same hover animation values as Button and defaults to `none`.
 
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
When `error` is provided, it is displayed in place of `hint`. Providing `error` does not change `tone`, so set `tone="error"` yourself for the error styling. The component accepts standard input HTML attributes, and supports `disabled`.
 
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
`onClose` runs when the backdrop or Close button is clicked. `onDone` runs when the Done button is clicked. `closeText` and `doneText` change the button labels.
 
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
 
EaseUI ships precompiled CSS, so your application does not need Tailwind CSS. The stylesheet contains only the classes the components use and no global reset, so it will not change your application's base styles. Pass `className` to the components that expose it to add or override styling.
 
Dark variants (`dark:`) currently follow the operating system's color scheme.
 
## Known limitations
 
- `Modal` does not close on the Escape key and does not trap focus yet.
- `Tooltip` is positioned with CSS only. It can be clipped by a parent with `overflow: hidden` and does not flip near the edge of the viewport.
- Animations do not yet respect the `prefers-reduced-motion` setting.
- Dark styling follows the operating system setting, not a class or attribute you control.
## Development
 
Clone the repository:
 
```bash
git clone https://github.com/Draxter1891/Task13-Cohort-3.0.git
cd Task13-Cohort-3.0
```
 
Install dependencies (Node.js 20.19+ or 22.12+ is required by Vite 7):
 
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
 
5. Install the packed tarball in a fresh application and check that the components render.
6. Update the version using an appropriate semantic version increment.
7. Log in with an account that has two-factor authentication enabled, then publish:
```bash
npm login
npm publish
```
 
The `prepack` script runs the library build when npm prepares the package.
 
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
 
## Credits
 
Created and maintained by Rishabh Tripathi. The initial set of components was started by Devendra Dhote.
 
## License
 
EaseUI is released under the MIT License. See the [LICENSE](./LICENSE) file for details.
 