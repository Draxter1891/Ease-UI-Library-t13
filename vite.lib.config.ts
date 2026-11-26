import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "gsap",
  "lucide-react",
  "clsx",
  "tailwind-merge",
  "class-variance-authority",
  "@radix-ui/react-slot",
];

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-lib",
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      /**
       * If the user need CJS (require/older method) in their code use both formats
       */
      // formats: ["es", "cjs"],
      // fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      // cssFileName: "style",
      formats:["es"],
      fileName: ()=>"index.js",
      cssFileName: "style",
    },
    rollupOptions: {
      external: (id) =>
        external.some((dep) => id === dep || id.startsWith(dep + "/")),
    },
  },
});