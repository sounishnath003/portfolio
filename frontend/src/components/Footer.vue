<template>
  <footer class="mt-8 pb-8">
    <div
      class="mx-auto flex w-full max-w-5xl flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-[11px] text-gray-500 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span class="text-emerald-600 dark:text-emerald-400">sounish@bengaluru</span>
        <span class="text-gray-300 dark:text-gray-700">│</span>
        <span>© {{ year }}</span>
      </p>

      <nav class="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label="Footer">
        <router-link
          v-for="item in paths"
          :key="item.to"
          :to="item.to"
          class="transition-colors hover:text-blue-600 dark:hover:text-yellow-400"
        >
          {{ item.path }}
        </router-link>
      </nav>

      <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span>built:</span>
        <a
          v-for="tool in stack"
          :key="tool.name"
          :href="tool.href"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-blue-600 dark:hover:text-yellow-400"
        >
          {{ tool.name }}
        </a>
        <span
          class="rounded-md border border-gray-200 px-1.5 py-0.5 text-gray-700 dark:border-gray-700 dark:text-gray-300"
        >
          v4.5
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const paths = [
  { path: "/experience", to: "/pages/work-experience" },
  { path: "/projects", to: "/pages/projects" },
  { path: "/about", to: "/pages/about" },
  { path: "/uses", to: "/pages/uses" },
];

const stack = [
  { name: "vue", href: "https://vuejs.org" },
  { name: "vite", href: "https://vitejs.dev" },
  { name: "netlify", href: "https://netlify.com" },
];
</script>
