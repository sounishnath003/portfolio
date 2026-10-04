<template>
  <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p class="font-mono text-[11px] tracking-[0.22em] text-blue-600 dark:text-yellow-400">
        {{ index }}&nbsp;/&nbsp;{{ label }}
      </p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>
    <router-link
      v-if="href"
      :to="href"
      class="group inline-flex items-center gap-1 font-mono text-xs text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-yellow-400"
    >
      {{ hrefLabel }}
      <span class="transition-transform group-hover:translate-x-0.5">→</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  href?: string;
  hrefLabel?: string;
}>();
</script>
