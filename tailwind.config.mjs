import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#D97706",
  600: "#D97706",
  900: "#0D9488",
  950: "#F1F5F9",
};
const gray = {
  100: "#F1F5F9",
  200: "#CBD5E1",
  300: "#94A3B8",
  400: "#475569",
  500: "#334155",
  700: "#1E293B",
  800: "#0F172A",
  900: "#020617",
};


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
			colors: { accent, gray },
		},
  },
  plugins: [starlightPlugin()],
};