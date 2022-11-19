import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
  },
  plugins: [sveltekit()],
  resolve: {
    dedupe: ["svelte", "@fullcalendar/common", 'svelte-apexcharts']
  },
  optimizeDeps: {
    include: ['just-throttle', 'dayjs', '@fullcalendar/common']
  },
  ssr: {
    external: ['@xstate/svelte']
  }
};

export default config;